nx=0;
ny=0;

function preload(){
   mustasche=loadImage("mustascheimg.png");
}

function setup(){
    canvas= createCanvas(500, 500);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.size(500,500);
    vid.hide();

    poseNet= ml5.poseNet(vid, modelLoaded);
    poseNet.on('pose',gotPoses )
}

function draw(){
    image(vid, 0, 0, 500,500);
    image(mustasche, nx-30, ny+10, 70, 50);
}

function Apply_filter(){
    save("Filtered_Image.png");
}

function modelLoaded(){
    console.log('Model has been loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nx= results[0].pose.nose.x;
        ny= results[0].pose.nose.y;
    }
}