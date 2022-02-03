const div1=document.getElementById('div1');
const div2=document.getElementById('div2');
const div3=document.getElementById('div3');
const div4=document.getElementById('div4');     //Getting id's
const div5=document.getElementById('div5');
const div6=document.getElementById('div6');
const div7=document.getElementById('div7');
const div8=document.getElementById('div8');
const div9=document.getElementById('div9');
const btn=document.getElementById('button');
const para=document.getElementById('start');
var count=0;

//Function to check whether player wins or not

const check=(player_value)=>{
    if (d1==player_value && d2==player_value && d3==player_value){
       return "true";
    }
    else if(d4==player_value && d5==player_value && d6==player_value){
       return "true";
    }
    else if(d7==player_value && d8==player_value && d9==player_value){
       return "true";
    }
    else if(d1==player_value && d4==player_value && d7==player_value){
       return "true";
    }
    else if(d2==player_value && d5==player_value && d8==player_value){
       return "true";
    }
    else if(d3==player_value && d6==player_value && d9==player_value){
       return "true";
    }
    else if(d1==player_value && d5==player_value && d9==player_value){
       return "true";
    }
    else if(d3==player_value && d5==player_value && d7==player_value){
       return "true";
    }
}
 
//Function to insert values of player 1

const play1=(player1)=>{
    div1.addEventListener("click",function(){
        div1.innerHTML=`${player1}`;
        d1=`${player1}`;
        count++;
        div1.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
            else{
        para.innerHTML=`Player Second Turn`;
            play2(player2);
        }
    })
    div2.addEventListener("click",function(){
        div2.innerHTML=`${player1}`;
        d2=`${player1}`;
        count++;
        div2.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div3.addEventListener("click",function(){
        div3.innerHTML=`${player1}`;
        d3=`${player1}`;
        count++;
        div3.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div4.addEventListener("click",function(){
        div4.innerHTML=`${player1}`;
        d4=`${player1}`;
        count++;
        div4.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div5.addEventListener("click",function(){
        div5.innerHTML=`${player1}`;
        d5=`${player1}`;
        count++;
        div5.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
 
    })
    div6.addEventListener("click",function(){
        div6.innerHTML=`${player1}`;
        d6=`${player1}`;
        count++;
        div6.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div7.addEventListener("click",function(){
        div7.innerHTML=`${player1}`;
        d7=`${player1}`;
        count++;
        div7.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div8.addEventListener("click",function(){
        div8.innerHTML=`${player1}`;
        d8=`${player1}`;
        count++;
        div8.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    div9.addEventListener("click",function(){
        div9.innerHTML=`${player1}`;
        d9=`${player1}`;
        count++;
        div9.style.pointerEvents = 'none';
        let res=check(player1);
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player1} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }
        else{
    para.innerHTML=`Player Second Turn`;
        play2(player2);
    }
    })
    
    //Function to insert values of player 2 

    }
    const play2=(player2)=>{
        div1.addEventListener("click",function(){
            div1.innerHTML=`${player2}`;
            d1=`${player2}`;
            let res=check(player2);
            div1.style.pointerEvents = 'none';
        if(res=="true"){
            para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
            
            setInterval(() => {
                location.reload();
            }, 4000);
            return;
        }else{
        para.innerHTML=`Player First Turn`;
            play1(player1);
        }
        })
        div2.addEventListener("click",function(){
            div2.innerHTML=`${player2}`;
            d2=`${player2}`;
            let res=check(player2);
            div2.style.pointerEvents = 'none';
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div3.addEventListener("click",function(){
            div3.innerHTML=`${player2}`;
            d3=`${player2}`;
            div3.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div4.addEventListener("click",function(){
            div4.innerHTML=`${player2}`;
            d4=`${player2}`;
            div4.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div5.addEventListener("click",function(){
            div5.innerHTML=`${player2}`;
            d5=`${player2}`;
            div5.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div6.addEventListener("click",function(){
            div6.innerHTML=`${player2}`;
            d6=`${player2}`;
            div6.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div7.addEventListener("click",function(){
            div7.innerHTML=`${player2}`;
            d7=`${player2}`;
            div7.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div8.addEventListener("click",function(){
            div8.innerHTML=`${player2}`;
            d8=`${player2}`;
            div8.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
        div9.addEventListener("click",function(){
            div9.innerHTML=`${player2}`;
            d9=`${player2}`;
            div9.style.pointerEvents = 'none';
            let res=check(player2);
            if(res=="true"){
                para.innerHTML=` 👑👑 ${player2} wins 👑👑 `;
                
                setInterval(() => {
                location.reload();
            }, 4000);
            return;
            }else{
            para.innerHTML=`Player First Turn`;
                play1(player1);
            }
        })
    }

var d1,d2,d3,d4,d5,d6,d7,d8,d9;

//selecting player


var input=prompt(`Enter what you want to enter first (X or O) :-`);
if (input=="X" || input=="x"){
     var player1="X";
     var player2="O";
}
else {
     player1="O";
     player2="X";

}

//Button to start the game 

btn.addEventListener('click',function(){
    para.innerHTML=`Player First is ${player1} `;
    setTimeout(()=>{
     para.innerHTML=`Player Second Is ${player2}`;
    },2000)
    setTimeout(()=>{
        para.innerHTML=`Player First Turn`;
       },4000)
       play1(player1);
})

