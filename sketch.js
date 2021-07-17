
var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var questions=0;
var database;
var a,b,c,d,a1,a3,a2,a4,b1,b2,b3,b4,c1,c2,c3,c4,d1,d2,d3,d4
var form, contestant, quiz;
var allcontestants=[]

function preload(){
  form1=loadImage("form1.jpg")  
  form2=loadImage("form2.jpg")
  form3=loadImage("form3.jpg")
  form4=loadImage("form4.png")  
}
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz=new Quiz;
  quiz.getState();
  quiz.start();
 
}


function draw(){
  background("pink");

  
  if(contestantCount===3){
    quiz.update(1)
  }
  if(gameState===1){
    clear();
quiz.play();
  }
  if(questions===0&&gameState===1){
background(form1)
  }
}
