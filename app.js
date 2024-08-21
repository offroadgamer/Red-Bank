let balance = 0;
let transactionStatus = 2;
let loginStatus = 2;
let = loggedIn = false;
let = loggedIn_usr = "";
let accounts = [["ola", "123", 1000.00], ["gregor", "agurk", -700.00]]


function getMoney() {
    balance += 100;
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
}

function deposit() {
    transactionStatus = 1;
    document.getElementById("operation-text").innerHTML = "How much do you want to deposit?";
    document.getElementById("transaction-box").style.visibility = "visible";
    document.getElementById("message-box").style.visibility = "hidden";
}

function withdraw() {
    transactionStatus = 0;
    document.getElementById("operation-text").innerHTML = "How much do you want to withdraw?";
    document.getElementById("transaction-box").style.visibility = "visible";
    document.getElementById("message-box").style.visibility = "hidden";
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
    document.getElementById("message-box").style.visibility = "hidden";
    loginStatus = 1;
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

function closeMessage() {
    document.getElementById("message-box").style.visibility = "hidden";
}

function login() {
    document.getElementById("message-box").style.visibility = "hidden";
    document.getElementById("transaction-box").style.visibility = "hidden";
    let username_f = document.getElementById("login-email-input").value;
    let password_f = document.getElementById("login-password-input").value;
    let username = username_f.replace(" ", "");
    let password = password_f.replace(" ", "");
    console.log(username, password);
    if (loginStatus == 1) {
        document.getElementById("login-email-input").value = "";
        document.getElementById("login-password-input").value = "";
        let usrn_index = 0;
        let pswd_index = 0;
        let is_valid = false;
        for (array_number = 0; array_number < accounts.length; array_number++) {
            if (accounts[array_number][0] == username && accounts[array_number][1] == password) {
                usrn_index = array_number;
                pswd_index = array_number;
                is_valid = true;
            }
        }
        if(is_valid && usrn_index == pswd_index) {
            document.getElementById("message-box").style.visibility = "visible";
            document.getElementById("login-box").style.visibility = "hidden";
            document.getElementById("message").innerHTML = "Logged in successfully!";
            document.getElementById("message").style.color = "#66cc66";
            document.getElementById("message-box").style.visibility = "visible";
            console.log("LOGIN: SUCSESS!");
            loggedIn = true;
            balance = accounts[usrn_index][2];
            document.getElementById("balance").innerHTML = "Your balance: $" + balance;
            document.getElementById("login-btn").style.visibility = "hidden";
            document.getElementById("logout-btn").style.visibility = "visible";
            loggedIn_usr = accounts.indexOf(accounts[usrn_index])
            console.log(loggedIn_usr);
        } else {
            document.getElementById("message-box").style.visibility = "visible";
            document.getElementById("login-box").style.visibility = "hidden";
            document.getElementById("message").innerHTML = "Login Failed";
            document.getElementById("message").style.color = "#e13423";
            document.getElementById("message-box").style.visibility = "visible";
            console.log("LOGIN: FAILED!");
        }
    } else if (loginStatus == 0) {
        if(username == "" || username == " " || password == "" || password == " ") {
            console.log("Invalid");
            document.getElementById("error-fillout-login").style.visibility = "visible";
        } else {
            accounts.push([username, password, 0.00]);
            console.log("Valid");
            document.getElementById("login-box").style.visibility = "hidden";
            document.getElementById("message").innerHTML = "Signed Up successfully!";
            document.getElementById("message").style.color = "#66cc66";
            document.getElementById("message-box").style.visibility = "visible";
        }
    } else {
        document.write("<h1>Invalid login</h1><br><h2>Go back</h2>")
    }
    
}

function logout() {
    document.getElementById("login-btn").style.visibility = "visible";
    document.getElementById("logout-btn").style.visibility = "hidden";
    balance = 0;
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
    loggedIn = false;
    document.getElementById("message-box").style.visibility = "hidden";
}

if (loggedIn) {
    document.getElementById("signin-btn").innerHTML = "Logged in as " + accounts[loggedIn_usr][0];
}