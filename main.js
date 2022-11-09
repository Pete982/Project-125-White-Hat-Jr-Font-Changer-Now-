LeftWrist_x = 0;

RightWrist_x = 0;

difference = 0;

function setup(){
    
    video = createCapture(VIDEO);
    
    canvas = createCanvas(400, 400);

    
  
    video.size(390, 390);

    video.position(10, 50);

     canvas.position(553, 123);


    poseNet = ml5.poseNet(video, modelDone);

    poseNet.on('poses', gotPoses);

    document.getElementById("canvas");

}


  function modelDone(){

   console.log("posenet is ready and available!")

}

function draw(){

    background("#ee1128");
}

function gotPoses( results, error ){

     if(error){
         
        console.error(error);
 
     }

     if(results.length > 0){

    console.log(results);

        console.log("The rightWrist_x is "+ results[0].pose.rightWrist.x + "The RightWrist_y is"+ results[0].pose.rightWrist.y );
        
        console.log("The leftWrist_x is"+ results[0].pose.leftWrist.x+ "The LeftWrist_y is " + results[0].pose.leftWrist.y );

        difference = floor(LeftWrist_x - RightWrist_x);

         RightWrist_x = results[0].pose.RightWrist.x;

         LeftWrist_x = results[0].pose.LeftWrist.x;

        

     }
}

function draw(){

   background("#86fcfa"); 

   text("Joseph", 50, 400);

   fill("#ed0518");

   textSize(difference);

   document.getElementById("FunnyFontSize").innerHTML = "The Font Size of the Text Will Be " + difference + "px";
}