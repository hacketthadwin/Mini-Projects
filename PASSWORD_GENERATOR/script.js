let password=document.getElementById("password");
let copybutton=document.getElementById("copybutton");
let passwordlength=document.getElementById("rangeselector");  //this is password length selector
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let generatebutton=document.getElementById("generatebutton");
let strength=document.getElementById("strength"); //this is the strength bar

let passwordlengthvalue=document.getElementById("passwordlengthvalue"); //this is the password length value display
passwordlengthvalue.innerText=passwordlength.value; //this will display the password length value (use innertext to set and get the value of div)
passwordlength.oninput = function() {        //learn this on how to change value of passwordlengthvalue when the slider is moved
    passwordlengthvalue.innerText = this.value;
  };

  function generatepassword() {

    return currpass;
}


generatebutton.addEventListener("click", function() {

    let availablecharacters = "";
    if (uppercase.checked) availablecharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) availablecharacters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) availablecharacters += "0123456789";
    if (symbols.checked) availablecharacters += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (availablecharacters.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }

    let currpass = "";
    for (let i = 0; i < passwordlength.value; i++) {
        let randomindex = Math.floor(Math.random() * availablecharacters.length);
        currpass += availablecharacters.charAt(randomindex);
    }

    password.innerText = currpass;
    if (parseInt(passwordlengthvalue.innerText) >= 8 && availablecharacters.length >= 50) {
        strength.style.backgroundColor = "green";
    } else {
        strength.style.backgroundColor = "red";
    }
});


copybutton.addEventListener("click", function () {
    let text = password.innerText;

    if (text.trim() === "") {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Error copying:", err));
});




