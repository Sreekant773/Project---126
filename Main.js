song = "";

function setup(){
canvas = createCanvas(450, 350);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    
}


