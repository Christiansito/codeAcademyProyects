//Father Class
class Media {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title() {
      return this._title;
    }
    get ratings() {
      return this._ratings;
    }
    get isCheckedOut() { 
      return this._isCheckedOut;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
        if(this.isCheckedOut === true) {
          this.isCheckedOut = false;
        }else {
          this.isCheckedOut = true;
        }
    }
    getAverageRatings() {
     let ratingSum = this.ratings.reduce((accum, rating) => accum+ rating, 0);
     return ratingSum / this._ratings.length;
    }
    addRating(value) {
      this._ratings.push(value);
    }
  }
  //Book Child Class
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  //Movie Child Class
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRatings());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRatings());