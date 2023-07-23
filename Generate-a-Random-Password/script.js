const passwordBox = document.getElementById("Password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol ="!@#$%^&*?~_-";

const alltypes = upperCase + lowerCase + number + symbol;


function createPassword(){
    let Password = ""
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > Password.length){
        Password += alltypes[Math.floor(Math.random() * alltypes.length)];
    }
    passwordBox.value = Password;
}


// function copyPassword(){
//     passwordBox.ariaSelected();
//     document.execCommand("copy");
// }
function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordBox.value);
    // alert("Copied the Password: ");

    if(passwordBox.value == ""){
        alert("Please click on Generate Password")
    }else{
        alert("Copied the Password: ");
    }
}