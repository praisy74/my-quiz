class Questions{
    constructor(){
      
    }

   static getQu(){
        var quesRef  = database.ref('contestant/questions');
        quesRef.on("value",function(data){
           questions = data.val();
        })
       
      }
      
 static form1(){
     
      a=createButton("Snake")
      b=createButton("Parrot")
      c=createButton("Trees")
      d=createButton("Frog")


      a.position(200,370)
      b.position(300,370)
      c.position(400,370)
      d.position(500,370)
      if(b.mousePressed()){
      textSize(5)
      fill("green")
     text("Correct answer",400,360)
     contestant.ritans+=1
     contestant.questions+=1
     contestant.uppdate()

     
      }
      else if(a.mousePressed()||c.mousePressed()||d.mousePressed()){
     text("Oh! your wrong let's try next one ",400,360)
          fill("red")
          contestant.wroans+=1
          contestant.questions+=1
          contestant.uppdate()
         
      }
     
  }







  ritAns(){
    fill("red")

    var title=createElement("h4")
    title.html("Oh! your wrong let's try next one ",400,360)
    contestant.wroans+=1
    contestant.questions+=1
    contestant.uppdate()
  }

}
