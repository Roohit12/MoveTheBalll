const ball=document.getElementById("ball");
let A=ball.style.left;
let B=ball.style.right;
let x=0;
let y=0;

var a = window.addEventListener('keypress',function(e){
    //Right movement
    if(e.key==="d"||e.key==="D"){

        if(x<850){

        ball.style.position = "absolute";
        x=x+10;
        ball.style.left = x + 'px';
        }
    }
    //left movement
    if(e.key==="a"||e.key==="A"){
        if(x>0){
        ball.style.position = "absolute";
        x=x-10;
        ball.style.left = x + 'px';
        }
    }
    //upward movement
    if(e.key==="w"||e.key==="W"){
        if(y>0){
        ball.style.position = "absolute";
        y=y-10;
        ball.style.top = y + 'px';
        }
    }
    //downward movement
    if(e.key==="s"||e.key==="S"){
        if(y<580){
        ball.style.position = "absolute";
        y=y+10;
        ball.style.top = y + 'px';}
    }
})