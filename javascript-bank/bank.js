/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || Number.isInteger(balance) !== true) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts[number - 1] === undefined) {
    return null;
  } else {
    return this.accounts[number - 1];
  }
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalBalance += this.accounts[i].getBalance();
  }
  return totalBalance;
};
