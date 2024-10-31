let isLoggedIn = false;

function login(){
    let userName = "John";

    if(isLoggedIn){
        let welcomeMessage = `Welcome back, ${userName}`;
    } else{
        let errorMessage = "Please log in.";
        console.log(errorMessage);
    }
}

login();
console.log(isLoggedIn);
console.log(userName);