
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
