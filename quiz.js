class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState===0){
      contestant= new Contestant
      contestant.getCount()
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef=await database.ref("contestantCount").once("value")
        if(contestantCountRef.exists()){
             contestantCount=contestantCountRef.val();
             contestant.getCount();
  
        }
       
        form = new Form()
        form.display();
  }
    }
  }
  play(){

    form.hide();

    textSize(32);
    text("Game starts , All the best "+contestant.name,200,200);
    ques = new Question
    ques.getQu()

    ques.qanda()

    
  //  ques.wroAns()

  }

  end(){
    Contestant.getContInfo();


    if(allcontestants!==undefined){
      
       var display_position=180;
      for(var con in allcontestants){

        if(con==="contestant" +contestant.index)
          fill("red")
        else
        fill("black")
        display_position+=50;
        textSize(15);
        text(allcontestants[con].name + ":" + allcontestants[con].ritans,720,display_position);
        text(allcontestants[con].name + ":" + allcontestants[con].wroans,720,display_position+20);
      
     }
    }
  }
}
