/* exported Account */
function Account(number, holder) {
  this.number = number,
  this.holder = holder,
  this.transactions = [];
}
/* this.deposit = function (amount) {
    if (amount > 0) {
      this.transactions.unshift(Transaction('deposit', amount));
      return true;
    } else {
      return false;
    }
  },
  this.withdraw = function (amount) {
    if (amount > 0) {
      this.transactions.unshift(Transaction('withdrawal', amount));
      return true;
    } else {
      return false;
    }
  },
  this.getBalance = function () {
    if (this.transactions === undefined) {
      return 0;
    }
  }; */
