class Form{
constructor(){
   this.input=createInput("Name");
   this.button=createButton("Play",["200"]);
   this.greeting=createElement("h3");
}

hide(){
  this.input.hide();
  this.greeting.hide();
  this.button.hide();
}
display(){
  var title=createElement("h3");
  title.html("Hi welcome to the QUIZ ");
 title.position(150,50)


this.input.position(130,160);
this.button.position(130,200);

  this.button.mousePressed( ()=>{
    this.input.hide();
    this.button.hide();
    

    contestant.name=this.input.value();
  contestantCount+=1;
  contestant.index=contestantCount
  contestant.uppdate();
  contestant.updateCount(contestantCount);

  this.greeting.html( "Oh!! we have "+contestant.name+" here ,  Hi "+contestant.name);
  this.greeting.position(200,130);
})

  }
}