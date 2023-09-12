 const boxes=document.querySelectorAll(".box");
 const gameInfo=document.querySelector(".game-info");
 const newGamebtn=document.querySelector(".btn");

 let currentPlayer;
 let gameGrid;

 
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initgame(){
    currentPlayer="X"
    newGamebtn.classList.remove("active");
    
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box, index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        box.classList.remove("win");
        // boxes.forEach((box)=>{
        //     box.classList.remove("win");

        // })


    });
    
    gameInfo.innerText=`Current Player:  ${currentPlayer}`;
}
initgame();

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
});

function  handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();


    }


}
function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{

        currentPlayer="X";
    }
    gameInfo.innerText=`Current Player:  ${currentPlayer}`;

}
// newGamebtn.classList.add("active");
newGamebtn.addEventListener("click",initgame);

function checkGameOver(){
    let answer="";
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]]!==""||gameGrid[position[0]]!==""||gameGrid[position[0]]!=="")&&
        (gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]])){
            if(gameGrid[position[1]]=="X"){
                answer="x";

            }
            else{
                answer="O";
            }

            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
    });
    if(answer!==""){
        gameInfo.innerText=`winner is:${answer}`;
        newGamebtn.classList.add("active");
        return;
        // boxes[position[0]].classList.remove("win");
        // boxes[position[1]].classList.remove("win");
        
        // boxes[position[2]].classList.remove("win");
    }
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box !==""){
            fillCount++;
        }
    })
    if(fillCount===9){
        gameInfo.innerText="Game Tied!";
        newGamebtn.classList.add("active");
    }
    
     
      

}



 
