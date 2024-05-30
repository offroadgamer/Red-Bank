let balance = 0;
let status = 2;
document.getElementById("transaction-box").style = 
//Hvis status er 0, withdraw
//Hvis status er 1, deposit

function getMoney() {
    balance += 100;
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
}

function deposit() {
    status = 1;
    document.getElementById("operation-text").innerHTML = "How much do you want to deposit?";
}

function withdraw() {
    status = 0;
    document.getElementById("operation-text").innerHTML = "How much do you want to withdraw?";
}

function transaction(amount) {
    if (status == 0) {
        balance -= amount;
    } else if (status == 1){
        balance += amount;
    } else {
        document.write("<h1>The transaction is invalid</h1>");
    }
    document.getElementById("balance").innerHTML = "Your balance: $" + balance;
}
