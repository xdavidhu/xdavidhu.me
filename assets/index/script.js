// some hacky DIY logic to set more or less proper scaling on mobile
function setScale(){

    var scale;

    // we can assume this is not a phone but a tablet
    if (screen.width > 900 || screen.height > 900) {
        var scale = 1;
    }
    
    // it's hopefully a phone
    else {
        // landscape
        if (screen.width > screen.height) {
            // if (screen.height > 410) {
            //     scale = 0.7;
            // } else if (screen.height <= 410 && screen.height > 350) {
            //     scale = 0.6;
            // } else if (screen.height <= 350 && screen.height > 300) {
            //     scale = 0.5;
            // } else {
            //     // for the Galaxy Fold front display :D
            //     scale = 0.45;
            // }

            // Chrome takes up a crazy amount of space in landscape mode. just hardcode this to 0.5 for now.
            scale = 0.5;
        }

        // portrait
        else {
            if (screen.width > 400) {
                scale = 0.9;
            } else if (screen.width <= 400 && screen.width > 350) {
                scale = 0.8;
            } else if (screen.width <= 350 && screen.width > 290) {
                scale = 0.7;
            } else {
                // for the Fold. again.
                scale = 0.65;
            }
        }
    }

    var viewportmeta = document.querySelector('meta[name="viewport"]');
    viewportmeta.content = "width=device-width, initial-scale=" + scale;
}

// re-scale when the phone is rotated / resized
window.addEventListener('orientationchange', function(){
    setScale();
});

window.addEventListener('resize', function(){
    setScale();
});

// set the scale when loading
setScale();