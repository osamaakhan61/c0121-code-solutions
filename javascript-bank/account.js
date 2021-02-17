/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
}

Account.transactions = new Array([Transaction]);
console.log(Account.transactions);
