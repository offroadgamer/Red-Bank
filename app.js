let balance = 0;
let transactionStatus = 2;
let loginStatus = 2;
usernames = ["gregor", "ola", "gjøl"];
passwords = ["agjorg", "123", "jfsdj"];


function getMoney() {
    balance += 100;
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
}

function deposit() {
    transactionStatus = 1;
    document.getElementById("operation-text").innerHTML = "How much do you want to deposit?";
    document.getElementById("transaction-box").style.visibility = "visible";
}

function withdraw() {
    transactionStatus = 0;
    document.getElementById("operation-text").innerHTML = "How much do you want to withdraw?";
    document.getElementById("transaction-box").style.visibility = "visible";
}

function transaction(amount) {
    if (transactionStatus == 0) {
        balance -= amount;
    } else if (transactionStatus == 1){
        balance += amount;
    } else {
        document.write("<h1>The transaction is invalid</h1><br><a href='index.html'>Go back</a></error>");
    }
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
}

function closeTransaction() {
    document.getElementById("transaction-box").style.visibility = "hidden";
}

function navLogin() {
    loginStatus = 1
    document.getElementById("login-box").style.visibility = "visible";
    document.getElementById("login-text").innerHTML = "Log in to red bank";
    document.getElementById("signin").innerHTML = "Log in";
}

function navSignup() {
    loginStatus = 0;
    document.getElementById("login-box").style.visibility = "visible";
    document.getElementById("login-text").innerHTML = "Sign up for red bank";
    document.getElementById("signin").innerHTML = "Sign Up";
}

function login() {
    username = document.getElementById("login-email-input").value;
    password = document.getElementById("login-password-input").value;
    if (loginStatus == 1) {
        indexUsername = usernames.indexOf(username);
        indexPassword = passwords.indexOf(password);
        if(indexUsername == indexPassword) {
            document.write("Match!")
        } else {
            document.write("Failed to log in...")
        } 
    } else if (loginStatus == 0) {
        if(username == "" || username == " " || password == "" || password == " ") {
            console.log("Invalid");
            document.getElementById("error-fillout-login").style.visibility = "visible";
        } else {
            usernames.push(username);
            passwords.push(password);
            console.log("Valid")
        }
        document.getElementById("login-email-input").value = "";
        document.getElementById("login-password-input").value = "";
        console.log(usernames);
        console.log(passwords);
    } else {
        document.write("<h1>Invalid login</h1><br><h2>Go back</h2>")
    }
    
}

