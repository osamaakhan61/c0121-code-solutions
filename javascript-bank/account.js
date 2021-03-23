/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.transactions.push(Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    this.transactions.push(Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {

};
