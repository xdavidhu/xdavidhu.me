function getDir(){
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    return dir;
}

function getInitialScale(){
    if (screen.height <= 500) {
        return "0.5";
    } else if (screen.height <= 550) {
        if (getDir() == "/archive/projects") {
            return "0.5";
        } else {
            return "0.5";
        }
    } else if (screen.height <= 700) {
        if (getDir() == "/archive/projects") {
            return "0.5";
        } else {
            return "0.6";
        }
    } else {
        if (getDir() == "/archive/projects") {
            return "0.6";
        } else {
            return "0.9";
        }
    }
}

function onOrientationChange(scaleLandscape, scaleNormal) {

    var landscape = screen.width > screen.height;
    var viewportmeta = document.querySelector('meta[name="viewport"]');

    if(landscape) {

        viewportmeta.content = "width=device-width, initial-scale=" + scaleLandscape;

    } else {

        viewportmeta.content = "width=device-width, initial-scale=" + scaleNormal;

    }

}

window.addEventListener('orientationchange', function(){
    onOrientationChange("0.5", getInitialScale());
});

onOrientationChange("0.5", getInitialScale());

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

$("document").ready(function(){
    $("#main").fadeIn(1000);
});
