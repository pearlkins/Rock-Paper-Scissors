let userscore=0;
let compscore=0;

let choice= document.querySelectorAll(".choice");

const msg= document.querySelector(".msg-container");
const user= document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

showWinner=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;
        
       
    }
    else{
        console.log("comp wins");
        msg.innerText="You lose.";
        msg.style.backgroundColor="red";
        compscore++;
        comp.innerText=compscore;
    }
}

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex= Math.floor((Math.random())*3);
    return options[randomIndex];
}

const drawgame=()=>{
    console.log("game drawn");
    msg.innerText="Game drawn.";
    msg.style.backgroundColor="yellow";
}

playgame=(userchoice)=>{
    console.log(`choice was clicked ${userchoice}`);
    const compchoice= gencompchoice();
    console.log(`comp choice= ${compchoice}`);
    let userwin=true;
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        
        if(userchoice==="rock"){
            userwin= compchoice==="paper"? false:true;
        }
        else if (userchoice==="paper"){
            userwin= compchoice==="scissors"? false:true;
        }
        else{
            userwin= compchoice==="rock"?false:true;
        }
    showWinner(userwin);

    }
}

choice.forEach((i)=>{
    i.addEventListener("click", ()=>{
        const userchoice= i.getAttribute("id");
        playgame(userchoice);
    })
});