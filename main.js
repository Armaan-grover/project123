var leftWristX = 0;
var rightWristX = 0;



function preload(){

}

function setup(){
video=createCapture(VIDEO)
video.size(400,400)
canvas=createCanvas(400,400)
poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getPoses)
}

function modelLoaded() {
    console.log("If you see this, the model has loaded!")
}


function getPoses(results) {
    if (results.length > 0) {
        //console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left wrist is " +leftWristX)
        console.log("right wrist is "+rightWristX)
    }
}


function draw(){

}