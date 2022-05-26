nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotresults);
}
function gotresults(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
console.log("nose x="+nosex+"nose y="+nosey);
console.log("leftwrist x="+leftwristx+"rightwrist x="+rightwristx);
difference=floor(leftwristx-rightwristx);
console.log("difference="+difference);
}
}
function modelLoaded(){
console.log("model Loaded");
}
function draw(){
background("orange");
document.getElementById("square_side").innerHTML="square side="+difference+"px";
fill("blue");
stroke("black");
square(nosex,nosey,difference);
textSize(difference);
fill("green");
text("beeg smol cube",50,400);
}