img="";
status = "";
object=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object=results;

    }
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("#FF0000");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    /*
    fill("#FF0000");
    text("dog",100,75);
    noFill();
    stroke("#FF0000");
    rect(85,65,250,330);
    fill("#FF0000");
    text("cat",315,115);
    noFill();
    stroke("#FF0000");
    rect(300,100,250,300);
    */
    
}