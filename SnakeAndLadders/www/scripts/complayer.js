
//player1
document.getElementById("p1").src = "images/Avtarp.gif";
document.getElementById("p1").style.visibility = "visible";

//player2
document.getElementById("c1").src = "images/Avtarc.gif";
document.getElementById("c1").style.visibility = "visible";
document.getElementById("player2Button").disabled = true;

var onbox1 = 1;
var onbox2 = 1;
function player1_roll() {
    document.getElementById("rightinside").style.visibility = "hidden";
    var ranNum = randomNumber(1, 6);
    //var Value = document.getElementById("youDraw").value;
    //youDraw.textContent = 'You drawn : ' + ranNum;
    document.getElementById("play1").innerHTML = ranNum;
    if ((onbox1 == 95 && ranNum == 6) || (onbox1 == 96 && ranNum > 4) || (onbox1 == 97 && ranNum > 3) || (onbox1 == 98 && ranNum > 2) || (onbox1 == 99 && ranNum > 1) || (onbox1 == 100 && ranNum >= 1)) {
        alert("not allowed");
    }
    else
        move(ranNum,onbox1,'p');
    turnover1();
     
}
function turnover1() {
    
    document.getElementById("player1Button").disabled = true;//disabling button for player1
    document.getElementById("player1turn").innerHTML = "turn over";
    document.getElementById("player2turn").innerHTML = "Computer's turn"; 
    player2_roll();
}

function player2_roll() {
    document.getElementById("rightinside").style.visibility = "hidden";
    var ranNum = randomNumber(1, 6);
    document.getElementById("play2").innerHTML = ranNum;
    if ((onbox2 == 95 && ranNum == 6) || (onbox2 == 96 && ranNum > 4) || (onbox2 == 97 && ranNum > 3) || (onbox2 == 98 && ranNum > 2) || (onbox2 == 99 && ranNum > 1) || (onbox2 == 100 && random >= 1)) {
        alert("not allowed");
    }
    else
        move(ranNum, onbox2,'c');
    turnover2();
}

function turnover2() {

    document.getElementById("player2turn").innerHTML = "turn over";
    document.getElementById("player1turn").innerHTML = "Player1's turn";
    document.getElementById("player1Button").disabled = false;
}

function move(num,onbox,x) {

        document.getElementById(x + onbox).style.visibility = "hidden";
        document.getElementById(x + onbox).src = "";
        onbox = onbox + num;
        onbox = Math.abs(onbox);
        if (x =='p') {
            onbox1 = onbox;
        }
        if (x =='c'){
            onbox2 = onbox;
        }
        document.getElementById(x + onbox).src = "images/Avtar"+x+".gif";
        document.getElementById(x + onbox).style.visibility = "visible";

        switch (onbox) {
            case 6:
                animateLadder(onbox);
                move(10,onbox,x);// ladder to 16
                break;
            case 9:
                animateLadder(onbox);
                move(22,onbox,x);// ladder to 31
                break;
            case 18:    //snake to 5
                animateSnake(onbox);
                move(-23,onbox,x);
                break;
            case 19:  // ladder to 38
                animateLadder(onbox);
                move(19,onbox,x);
                break;
            case 28:
                animateLadder(onbox);
                move(56,onbox,x);// ladder to 84
                break;
            case 21:
                animateLadder(onbox);
                move(58,onbox,x); // ladder to 71
                break;
            case 43:
                animateSnake(onbox);
                move(-66,onbox,x); //snake to 23
                break;
            case 49:
                nimateSnake(onbox);
                move(-82,onbox,x);// snake to 33
                break;
            case 51:
                animateLadder(onbox);
                move(16,onbox,x);//ladder to 67
                break;
            case 56:
                animateSnake(onbox);
                move(-82,onbox,x); //snake to 26
                break;
            case 65:
                animateLadder(onbox);
                move(-109,onbox,x); //snake to 44
                break;
            case 72:
                animateSnake(onbox);
                move(21,onbox,x); // ladder to 93
                break;
            case 80:
                animateLadder(onbox);
                move(20,onbox,x); //ladder to 100
                break;
            case 88:
                animateSnake(onbox);
                move(-141,onbox,x); // snake to 53
                break;
            case 92:
                animateSnake(onbox);
                move(-163,onbox,x); //snake to 71
                break;
            case 99:
                animateSnake(onbox);
                move(-134,onbox,x); // snake to 35
                break;
            case 100:
                //congratsAnim();
                //document.getElementById("popupCongratsBg").style.visibility = "visible";
                animateCongrats(x);
            default:
                break;
        }

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateSnake(onbox) {
    document.getElementById("snlanimation").src = "images/snake1.gif";
    document.getElementById("rightinside").style.visibility = "visible";
    alert("snake at " +onbox);
}
function animateLadder(onbox) {
    document.getElementById("snlanimation").src = "images/ladder.gif";
    document.getElementById("rightinside").style.visibility = "visible";
    alert("ladder at " + onbox);
}
function animateCongrats(x) {
    if(x=='p')
        alert("congrats player1 reached 100");
    if (x == 'q')
        alert("congrats computer reached 100")
    location.reload();
}

function gotomenu() {
    var r = confirm("Going to menu");
    if (r == true) {
        window.location.href = "menu.html";
    }

}