class Questions{
    constructor(){
      
    }

 /*)static  getQu(){
  //  var contestantQ="contestants/contestant"+this.index+"questions"
    
       var quesRef  = database.ref('contestant/questions');
        quesRef.on("value",function(data){
           quest = data.val();
        })
        database.ref("contestants/contestant").update({
          questions:quest
        })
       
      }*/
      
 static  qanda(){
     if(contestant.questions===0){
      a=createButton("Snake")
      b=createButton("Parrot")
      c=createButton("Trees")
      d=createButton("Frog")


      a.position(200,370)
      b.position(300,370)
      c.position(400,370)
      d.position(500,370)
      b.mousePressed(()=>
      contestant.updateRitans(b)
      
      )
         
      
      if(a.mousePressed()){
        contestant.updateWroans(a)  
      }else if(c.mousePressed()){
        contestant.updateWroans(c)    
      }
      else if(d.mousePressed()){
        contestant.updateWroans(d)     
      }

  }
}







  ritAns(ob1){
   // var title=createElement("h4")
   fill("blue")
    text("Correct answer",400,360)
  
var green=color(21, 190, 52)
    ob1.style('background-color',green);
    contestant.ritans+=1
    quest+=1
    contestant.uppdate()
  }
  wroAns(ob){
  
   fill("blue")

     text("Oh! your wrong let's try next one ",400,360)
    var red=color(232, 0, 35 )
    ob.style('background-color',red);
    contestant.wroans+=1
    quest+=1
    contestant.uppdate()
  }

}
