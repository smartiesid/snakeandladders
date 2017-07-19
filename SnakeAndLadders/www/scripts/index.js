
function onfocusNameField() {
   // document.getElementById("nameField").placeholder = "";
   // document.body.style.backgroundPositionY = -80 + "px";
    document.getElementsByClassName("middle").style.height = -100 + 'px';

}

function outfocusNameField() {
    document.getElementById("nameField").placeholder = "Enter Username";
    document.body.style.backgroundPositionY = 0 + "px";
}

function checkName() {
    var textBox = document.getElementById("nameField").value; 
    if(textBox.length < 3 || textBox.length >= 15){
        document.getElementById("result").innerHTML  = "Must contain atleast 3 characters";			
    } 	
	else {
        document.getElementById("result").innerHTML = "Username is:" + textBox;
        window.location.href = "menu.html";
			
		}
		
}

function enterPressed(e) {
    if ((e.keyCode === KeyEvent.KEYCODE_ENTER)||(e.keycode === 13)){
        alert("hai");
    }
}