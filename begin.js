// name of a class starts with an uppercase letter
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    // assign the values to the object instance using "this" keyword
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
    // method
    getOverview(){
      return (this.title + ", a " + this.genre + " film directed by " + this.director + " was released in " + this.releaseYear + ". It received a rating of " + this.rating);
    }

}

// Example
// const Cruella = new Movie("Cruella", "Craig Gillespie", "Comedy/Crime", 2021, 4.7);
// const LaLaLand = new Movie("La La Land", "Damien Chazelle", "Musical/Romance", 2016, 4.5);

// console.log(Cruella.getOverview());
// console.log(LaLaLand.getOverview());
