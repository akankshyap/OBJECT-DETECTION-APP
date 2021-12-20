status="";


function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(500,450);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById ("status").innerHTML="status:detecting object"

}
 
function modelLoaded(){
    console.log ("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if (error){
    console.log (error);
    
}
console.log(results);
}

function draw(){
image(img,0,0,500,450);
fill ("#FF0000");
text("dog", 45,75);
text ("cat", 230,100);
noFill();
stroke("FF0000");
rect(30,60,450,350);
rect (200,90,200,200);



}