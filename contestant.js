class Contestant{
    constructor(){
    this.index=null;
    this.name=null;
    this.ritans=0;
    this.wroans=0;
    this.questions=0;
    }
    getCount(){
        var contestantCountRef=database.ref("contestantCount");
        contestantCountRef.on("value",function(data){
            contestantCount=data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            contestantCount:count
        })
    }

    uppdate(){

        var contestantIndex="contestants/contestant"+this.index

        database.ref(contestantIndex).set({
         name:this.name,
         ritans:this.ritans,
         wroans:this.wroans,
         questions:this.questions
        })
    }

    updateRitans(ob){
        fill("blue")
        text("Correct answer",400,360)
      
    var green=color(21, 190, 52)
        ob.style('background-color',green);
        this.ritans+=1;
        this.questions+=1
        uppdate()
       
    
        }
        updateWroans(ob1){
          
            fill("blue")

            text("Oh! your wrong let's try next one ",400,360)
           var red=color(232, 0, 35 )
           ob1.style('background-color',red);
           contestant.wroans+=1
           questions+=1
           uppdate()
           
        
            }
            
   static getContInfo(){
        var contInfo=database.ref("contestants")
        contInfo.on("value",(data)=>{
            allcontestants=data.val()
        })
    }
    
}