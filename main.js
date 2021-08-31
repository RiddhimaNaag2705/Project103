Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML='<img id="pic" src="'+data+'">';
    });
}
console.log("ml5 ver.", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VQLIyG0-2/model.json", modelLoaded);

function modelLoaded(){
console.log("model loaded")
}

function check(){
    img=document.getElementById("pic");
    classifier.classify(img, getResult);
}

function getResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("display").innerHTML=results[0].label;
    }
}