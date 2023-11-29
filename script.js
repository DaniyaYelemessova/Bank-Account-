function UserDataBase() {
  this.users = {};
  this.currentId = 0;
}

UserDataBase.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

UserDataBase.prototype.addUser = function (user) {
  user.id = this.assignId();
  this.users[user.id] = user;
};

function UserAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

UserAccount.prototype.transaction = function (amount) {
  this.balance = this.balance + amount;
  return this.balance;
};

// UI logic
const userDataBase = new UserDataBase();
const user1 = new UserAccount("Amy", 100000);
const user2 = new UserAccount("Kirsten", 20000000);
userDataBase.addUser(user1);
userDataBase.addUser(user2);
console.log(userDataBase);

// if withdrawal = true (input amount * -1)
function transaction(userId, type, amount) {
  if (type === "withdrawal") {
    amount = amount * -1;
  }
  userDataBase.users[userId].transaction(amount);
}

function handleTransactionForm(event) {
  let userId = document.getElementById("userIdInput").value;
  let initialDeposit = document.getElementById("initialDeposit").value;
  let type = document.getElementById("transactions").value;
  let amount = document.getElementById("amount").value;


}

document.addEventListener("DOMContentLoaded", function(){
  
})