var menu = document.getElementById('menu-overlay');
function show(){
    var menu = document.getElementById('menu-overlay');
    menu.style.display='block';
}
function hide(){
    var menu = document.getElementById('menu-overlay');
    menu.style.display='none';
}
function hide_overlays(){
    var menu = document.getElementById('round-main');
    menu.style.display='none';
    hide();
}
function show_overlays(){
    var menu = document.getElementById('round-main');
    menu.style.display='flex';
    hide();
}
function buttoneffectsu(i){
    var layer = document.getElementById('l'+i+'1');
    layer.style.backgroundColor='transparent';
    layer=document.getElementById('l'+i+'2');
    layer.style.backgroundColor='transparent';
}
var ar1 = ['rgba(137, 43, 226, 0.185)','rgba(153, 205, 50, 0.185)','rgb(255, 94, 0, 0.185)'];
var ar2 = ['rgba(137, 43, 226, 0.226)','rgba(153, 205, 50, 0.226)','rgb(255, 94, 0, 0.226)']
function buttoneffectsd(i){
    var layer = document.getElementById('l'+i+'1');
    layer.style.backgroundColor=ar1[i-1];
    layer=document.getElementById('l'+i+'2');
    layer.style.backgroundColor=ar2[i-1];

}

//processing
var mode=0;
var user = document.getElementById('1l');
var opponent = document.getElementById('1r');
var user_count=0,oppo_count=0,final=7,u=1;
var c;
var j= document.getElementById('u');
var t=null;
document.getElementById(mode).style.backgroundColor='purple';
document.getElementById('round'+final).style.backgroundColor='purple';


function ini(){
    for(var i =1;i<=final;i++){
        j=document.getElementById('u'+i);
        j.style.backgroundColor='rgb(58, 58, 58)';
    }
    for(var i =1;i<=final;i++){
        j=document.getElementById('o'+i);
        j.style.backgroundColor='rgb(58, 58, 58)';
    }
    for(var i =final+1;i<=7;i++){
        j=document.getElementById('u'+i);
        j.style.backgroundColor='rgb(34, 32, 32)';
    }
    for(var i =final+1;i<=7;i++){
        j=document.getElementById('o'+i);
        j.style.backgroundColor='rgb(34, 32, 32)';
    }
    user_count=0;
    oppo_count=0;
    document.getElementById('display').innerHTML='';

}
function ini2(){
    ini(final);
    hide();
}


// output
function dis(u,c,b){
    // for user
    user.style.display='none';
    user = document.getElementById(u+'l');
    user.style.display='block';

    // for the opponent
    
    opponent.style.display='none';
    opponent = document.getElementById(c+'r');
    opponent.style.display='block';

    
    // scoreboard

    var checker;
    var num;

    if((user_count==final)||(oppo_count==final)){
        ini(final);
        document.getElementById('display').innerHTML='';
    }

    if(b==1){
        checker='u';
        user_count++;
        num=user_count;
    }
    else if(b==-1){
        checker='o';
        oppo_count++;
        num=oppo_count;
    }
    else{
        return;
    }

    if((oppo_count==(final+1))||(user_count==(final+1))){
        ini(final);
        return;
    }
    j=document.getElementById(checker+num);
    j.style.backgroundColor='green';
    
    if(user_count==final){
        document.getElementById('display').innerHTML='You Won!';
    }
    if(oppo_count==final){
        document.getElementById('display').innerHTML='You Lost!';
    }
    console.log(user_count);
    console.log(oppo_count);
}

// outcome 

function desci(){
    if(mode==0){    
        c = Math.floor((Math.random()*3) + 1);
    }
    else if(mode==1){
        peaceful();
    }
    else{
        impossible();
    }
    
    var b = 0;
    if(u==c){
        b=0;
    }
    else if(((c==1)&&(u==3))||((u==1)&&(c==3))){
        if(c<u){
            b=-1;
        }
        else{
            b=1;
        }
    }
    else{
        if(c>u){
            b=-1;
        }
        else{
            b=1;
        }
    }
    dis(u,c,b);
}

//peaceful
function peaceful(){
    if(oppo_count==(final-1)){
        switch (u) {
            case 1:
                c=3;
                break;
            case 2:
                c=1;
                break;
            case 3:
                c=2;
                break;
            default:
                break;
        }
    }
    else{
        c = Math.floor((Math.random()*3) + 1); 
    }
}

//impossible
function impossible() {
    if(user_count==(final-1)){
        switch (u) {
            case 1:
                c=2;
                break;
            case 2:
                c=3;
                break;
            case 3:
                c=1;
                break;
            default:
                break;
        }
    }
    else{
        c = Math.floor((Math.random()*3) + 1);
    }
}

//inputs

function input(i){
    
    u=i;
    desci();
}

function mode_input(i){
    document.getElementById(mode).style.backgroundColor='rgb(54, 54, 54)';
    mode=i;
    document.getElementById(mode).style.backgroundColor='purple';
    hide();
}

function round_input(i){
    document.getElementById('round'+final).style.backgroundColor='rgb(143, 143, 3)';
    document.getElementById('round'+final).style.color='black';
    final=i;
    document.getElementById('round'+final).style.backgroundColor='purple';
    document.getElementById('round'+final).style.color='black';
    ini(final);
    hide_overlays();
}