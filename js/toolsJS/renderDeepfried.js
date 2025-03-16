function deepFryImage(imgElement, quality, passes, callback, saturation, contrast) {

    
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    let dataUrl = canvas.toDataURL("image/jpeg", quality);

    function compressPass(pass) {
        if (pass >= passes) {
            callback(dataUrl);
            return;
        }

        const img = new Image();
        img.src = dataUrl;
        img.onload = function () {
            ctx.filter = `contrast(${contrast}%) saturate(${saturation}%)`;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            dataUrl = canvas.toDataURL("image/jpeg", quality);
            compressPass(pass + 1);
        };
    }

    compressPass(0);
}

function deepFryGIF(imgElement, quality, passes, callback, sat, con) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;

    const gif = new GIF({
        workers: 2,
        quality: 30
    });

    function processFrame(frame, totalFrames) {
        if (frame >= totalFrames) {
            gif.on('finished', function(blob) {
                callback(URL.createObjectURL(blob));
            });
            gif.render();
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

        deepFryImage(imgElement, quality, passes,sat, con, function(friedSrc) {
            const friedImg = new Image();
            friedImg.src = friedSrc;
            friedImg.onload = function () {
                gif.addFrame(friedImg, { delay: 100 });
                processFrame(frame + 1, totalFrames);
            };
        });
    }

    processFrame(0, 5); // Simulating 5 frames
}

document.getElementById("upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const outputImg = document.getElementById("output");

            if (file.type === "image/gif") {
                deepFryGIF(img, 0.01, 3, 100, 200, function(friedGIFSrc) {
                    outputImg.src = friedGIFSrc;
                    outputImg.style.display = "block";
                });
            } else {
                deepFryImage(img, 0.1, 3, 100, 200, function(friedImageSrc) {
                    outputImg.src = friedImageSrc;
                    outputImg.style.display = "block";
                });
            }
        };
    };
    reader.readAsDataURL(file);
});