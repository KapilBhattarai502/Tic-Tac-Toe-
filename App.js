let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let winnerBox=document.querySelector(".winner-box");
let message=document.querySelector(".congrats");

let turn0=true;//playerX,playerY

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;

        }
        box.disabled=true;
        checkwinner();
       
        

    })
    
})

function checkwinner(){
    for(let pattern of winPatterns){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
               
                showWinner(pos1Val);
            }
            
        }
     

    }

}
function showWinner(winner){

            
    winnerBox.classList.remove("hide");
    message.innerText=`Congratualtions Player ${winner}`;
    resetBtn.innerText="Restart";
   

}
boxes.forEach((box)=>{
    resetBtn.addEventListener("click",()=>{
        box.innerText="";
        box.disabled=false;
        winnerBox.classList.add("hide");
        resetBtn.innerText="Reset Game"
        
    })

})
