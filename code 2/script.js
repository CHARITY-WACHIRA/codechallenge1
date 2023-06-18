const prompt=require("prompt-sync")({sigint:true});
const speed=parseInt(prompt("enter speed of car"))
function calculatePoints(speed){
    const speedLimit=70
    const increase=5
    if(speed< speedLimit + increase){
        console.log("ok")
        return
    }
    const points=Math.floor((speed-speedLimit)/increase)
    if (points > 12){
        console.log("License suspended")
    } else{
        console.log("points" + points)
    }
       
}
calculatePoints(speed)