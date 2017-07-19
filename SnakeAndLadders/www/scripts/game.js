
//player
document.getElementById("p1").src = "images/Avtarc.gif";
document.getElementById("p1").style.visibility = "visible";   //while loading game making the player visible



var onbox = 1;
function player_roll() {
    document.getElementById("rightinside").style.visibility = "hidden"; //hiding animation when player lands on ladder or snake
    //document.getElementById("snlanimation").style.visibility = "hidden";
    var ranNum = randomNumber(1,6); // generating random number
    document.getElementById("play").innerHTML = ranNum;
    if ((onbox == 95 && ranNum == 6) || (onbox == 96 && ranNum > 4) || (onbox == 97 && ranNum > 3) || (onbox == 98 && ranNum > 2) || (onbox == 99 && ranNum > 1) || (onbox == 100 && ranNum >= 1)) {
        alert("not allowed");   // player not allowed  to get these numbers at this finsihing stage
    }
    else
        move(ranNum);
}
 
function move(num) {
        document.getElementById('p' + onbox).style.visibility = "hidden";
        document.getElementById('p' + onbox).src = "";
        onbox = onbox + num; // player number on the board + random number
        onbox = Math.abs(onbox);
        document.getElementById('p' + onbox).src = "images/Avtarc.gif";
        document.getElementById('p' + onbox).style.visibility = "visible";


        switch (onbox) {
            case 6:
                animateLadder(onbox);
                move(10);// ladder to 16
                break;
            case 9:
                animateLadder(onbox);
                move(22);// ladder to 31
                break;
            case 18:
                animateSnake(onbox);//snake to 5
                move(-23);
                break;
            case 19:
                animateLadder(onbox);// ladder to 38
                move(19);
                break;
            case 28:
                animateLadder(onbox);
                move(56);// ladder to 84
                break;
            case 21:
                animateLadder(onbox);
                move(58); // ladder to 71
                break;
            case 43:
                animateSnake(onbox);
                move(-66); //snake to 23
                break;
            case 49:
                animateSnake(onbox);
                move(-82);// snake to 33
                break;
            case 51:
                animateLadder(onbox);
                move(16);//ladder to 67
                break;
            case 56:
                animateSnake(onbox);
                move(-82); //snake to 26
                break;
            case 65:
                animateSnake(onbox);
                move(-109); //snake to 44
                break;
            case 72:
                animateLadder(onbox);
                move(21); // ladder to 93
                break;
            case 80:
                animateLadder(onbox);
                move(20); //ladder to 100
                break;
            case 88:
                animateSnake(onbox);
                move(-141); // snake to 53
                break;
            case 92:
                animateSnake(onbox);
                move(-163); //snake to 71
                break;
            case 99:
                animateSnake(onbox);
                move(-134); // snake to 35
                break;
            case 100:
                //congratsAnim();
                //document.getElementById("popupCongratsBg").style.visibility = "visible";
                //alert("congratulations!!! U reached 100");
                //location.reload();
                animateCongrats();
            default:
                break;
                
        }
}
     

/*function congratsAnim() {
    var div = document.createElement("div");
    div.setAttribute('class':'')
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";
    
}*/
 
function randomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function animateSnake(onbox) {
    document.getElementById("snlanimation").src = "images/snake1.gif";
    document.getElementById("rightinside").style.visibility = "visible";
    //document.getElementById("snlanimation").style.visibility = "visible";
    alert("snake at " + onbox);
}

function animateLadder(onbox) {
    document.getElementById("snlanimation").src = "images/ladder.gif";
    document.getElementById("rightinside").style.visibility = "visible";
    //document.getElementById("snlanimation").style.visibility = "visible";
    alert("ladder at " + onbox);
}
function animateCongrats() {
        alert("congrats!! you have reached 100");
    location.reload();
}

function gotomenu() {
    var r = confirm("Going to menu");
    if (r == true) {
        window.location.href = "menu.html";
    }

}