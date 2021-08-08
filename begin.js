
// class
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title      = title;
    this.author     = author;
    this.ISBN       = ISBN;
    this.numCopies  = numCopies;
  }

  // getter
  get availability() {
    return this.getAvailability();
  }

  // check the number of available copies
  getAvailability() {
      if(this.numCopies === 0){
        return "Out of stock";
      } else if (this.numCopies < 10) {
        return "Low stock";
      } return "In stock";
  }

  // subtract numCopiesSold from numCopies
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  // add numCopiesStocked to numCopies
  restock = function(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }

}

// Example
// const GoodToGreat = new Book("Good To Great", "Jim Collins", "662099", 4);
// console.log(GoodToGreat.availability);
// GoodToGreat.restock(10);
// console.log(GoodToGreat.availability);
// GoodToGreat.sell(14);
// console.log(GoodToGreat.availability);
