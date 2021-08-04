
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    // assign the values to the object instance using "this" keyword
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
    getOverview(){
      console.log(this.title + ", a" + this.genre + " film directed by " + this.director + " was released in " + this.releaseYear + ". It received a rating of " + this.rating);
    }

}
