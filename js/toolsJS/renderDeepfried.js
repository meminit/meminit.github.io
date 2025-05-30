function deepFryImage(imgElement, quality, passes, callback) {

    let con = parseFloat(document.getElementById("con").value) || 100; // Default to 100 if invalid
    let sat = parseFloat(document.getElementById("sat").value) || 100; // Default to 100 if invalid

    // Validate quality and passes
    quality = Math.min(Math.max(parseFloat(quality) || 0.8, 0.05), 1); // Clamp between 0.05 and 1
    passes = Math.max(parseInt(passes) || 1, 1); // Ensure passes is at least 1

    console.log(`Initial Quality: ${quality}, Contrast: ${con}%, Saturation: ${sat}%, Passes: ${passes}`);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let originalWidth = imgElement.naturalWidth;
    let originalHeight = imgElement.naturalHeight;

    let width = originalWidth;
    let height = originalHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(imgElement, 0, 0, width, height);

    let dataUrl = canvas.toDataURL("image/jpeg", quality);

    function compressPass(pass) {
        if (pass >= passes) {
            const img = new Image();
            img.src = dataUrl;
            img.onload = function () {
                canvas.width = originalWidth;
                canvas.height = originalHeight;

                ctx.clearRect(0, 0, originalWidth, originalHeight);
                ctx.filter = `contrast(${con}%) saturate(${sat}%)`;
                ctx.drawImage(img, 0, 0, originalWidth, originalHeight);

                dataUrl = canvas.toDataURL("image/jpeg", quality);
                callback(dataUrl);
            };
            img.onerror = function () {
                console.error("Error loading image during final pass.");
                callback(null); // Return null on error
            };
            return;
        }

        const img = new Image();
        img.src = dataUrl;
        img.onload = function () {
            width = Math.max(1, width * 0.9);
            height = Math.max(1, height * 0.9);
            canvas.width = width;
            canvas.height = height;

            ctx.clearRect(0, 0, width, height);
            ctx.filter = `contrast(${con}%) saturate(${sat}%)`;
            ctx.drawImage(img, 0, 0, width, height);

            let newQuality = Math.max(quality - 0.1, 0.05);
            console.log(`Pass ${pass + 1}: Quality set to ${newQuality}, Size: ${width}x${height}`);

            dataUrl = canvas.toDataURL("image/jpeg", newQuality);
            compressPass(pass + 1);
        };
        img.onerror = function () {
            console.error("Error loading image during compression pass.");
            callback(null); // Return null on error
        };
    }

    compressPass(0);
}

function deepFryGIF(imgElement, quality, passes, fps, callback) {

    let con = parseFloat(document.getElementById("con").value) || 100; // Default to 100 if invalid
    let sat = parseFloat(document.getElementById("sat").value) || 100; // Default to 100 if invalid

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;

    const gif = new GIF({
        workers: 2,
        quality: 10
    });

    let frameCount = 5;
    let currentFrame = 0;
    const frameDelay = Math.round(1000 / fps);

    function processFrame() {
        if (currentFrame >= frameCount) {
            gif.on('finished', function (blob) {
                callback(URL.createObjectURL(blob));
            });
            gif.render();
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.filter = `contrast(${con}) saturate(${sat})`;
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

        deepFryImage(imgElement, quality, passes, function (friedSrc) {
            const friedImg = new Image();
            friedImg.src = friedSrc;
            friedImg.onload = function () {
                gif.addFrame(friedImg, { delay: frameDelay });
                currentFrame++;
                processFrame();
            };
            friedImg.onerror = function () {
                console.error("Error loading fried image for GIF frame.");
            };
        });
    }

    processFrame();
}

document.getElementById("upload").addEventListener('change', (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    const inputimgholder = document.getElementById('previewImg');

    reader.onload = function (e) {
        inputimgholder.src = e.target.result;
        inputimgholder.style.display = 'block';
    };

    reader.readAsDataURL(image);
});

document.getElementById("dfit").addEventListener("click", function (event) {
    const target = document.getElementById("upload");
    const file = target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
            const outputImg = document.getElementById("previewImg");

            if (file.type === "image/gif") {
                const fps = 10;
                deepFryGIF(img, document.getElementById('quality').value, 3, fps, function (friedGIFSrc) {
                    outputImg.src = friedGIFSrc;
                    document.querySelector('#download').href = friedGIFSrc
                    outputImg.style.display = "block";
                });
            } else {
                deepFryImage(img, document.getElementById('quality').value, 3, function (friedImageSrc) {
                    outputImg.src = friedImageSrc;
                    document.querySelector('#download').href = friedImageSrc
                    outputImg.style.display = "block";
                });
            }
        };
        img.onerror = function () {
            console.error("Error loading image.");
        };
    };
    reader.readAsDataURL(file);
});