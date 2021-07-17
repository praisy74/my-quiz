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

   /* updateRitans(){
database.ref("contestants/contestant").update({
    ritans:this.ritans+1
})

    })*/

   static getContInfo(){
        var contInfo=database.ref("contestants")
        contInfo.on("value",(data)=>{
            allcontestants=data.val()
        })
    }
    
}