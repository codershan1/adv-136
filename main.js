status = "";
input_text = "";


function preload() {

}

function setup() {
    canvas  = createCanvas(325, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(325, 325);
    video.hide();
}

function start() {
    objectdetector = ml5.objectdetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 325, 325)
}