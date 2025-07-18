let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgctr = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgmbtn = document.querySelector(".newgm-btn");
let turnO = true;
let name = alert("enter players name");
let player1 = prompt("player 1 name");
let player2 = prompt("player 2 name");
 

const winpatterns = [
    [0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 5, 8],[2, 4, 6],[3, 4, 5],[6, 7, 8],
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerText = `${player1}`; 
            turnO = false;
        } else{
            box.innerText = `${player2}`;
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);

            }
        }

        let filledBoxes = Array.from(boxes).every(box => box.innerText !== "");
        if (filledBoxes){
            draw();
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgctr.classList.remove("hide");
    disableboxes();
};

const draw = () => {
    msg.innerText = 'your match is draw';
    msgctr.classList.remove("hide");
    disableboxes();
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgctr.classList.add("hide");
    
};

newgmbtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);


