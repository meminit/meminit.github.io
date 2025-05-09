function deepFryImage(imgElement, quality, passes, callback) {
    let con = document.getElementById("con").value;
    let sat = document.getElementById("sat").value;

    console.log(`Initial Quality: ${quality}, Contrast: ${con}%, Saturation: ${sat}%`);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");


    let width = imgElement.naturalWidth;
    let height = imgElement.naturalHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(imgElement, 0, 0, width, height);

    let dataUrl = canvas.toDataURL("image/jpeg", quality);

    function compressPass(pass) {
        if (pass >= passes) {
            callback(dataUrl);
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
    }

    compressPass(0);
}

    
    function deepFryGIF(imgElement, quality, passes, callback) {
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
        ctx.filter = `contrast(100%) saturate(120%)`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
    
        deepFryImage(imgElement, quality, passes, function(friedSrc) {
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
    
    document.getElementById("upload").addEventListener('change', (event) => { 
    const image = event.target.files[0]
    
    const reader = new FileReader()
    
    const inputimgholder = document.getElementById('inputImage')
    
    reader.onload = function (e) {
        
        inputimgholder.src = e.target.result
        inputimgholder.style.display = 'block'
    }
    
    reader.readAsDataURL(image);
    });
    
    document.getElementById("dfit").addEventListener("click", function(event) {
    
    const target = document.getElementById("upload")
    
    const file = target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
    
        img.onload = function() {
            const outputImg = document.getElementById("output");
    
            if (file.type === "image/gif") {
                deepFryGIF(img, document.getElementById('quality').value, 3, function(friedGIFSrc) {
                    outputImg.src = friedGIFSrc;
                    outputImg.style.display = "block";
                });
            } else {
                deepFryImage(img, document.getElementById('quality').value, 3, function(friedImageSrc) {
                    outputImg.src = friedImageSrc;
                    outputImg.style.display = "block";
                });
            }
        };
    };
    reader.readAsDataURL(file);
    });