let numberOffFilms = +prompt("Skolko filmov vi uje posmotreli?");
let personalMovieDB = {
  count : numberOffFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false

};

let a = prompt("Odin i poslednix prosmotrennix filmov?"),
    b = prompt("Na skolko otsenite ego?"),
    c = prompt("Odin i poslednix prosmotrennix filmov?"),
    d = prompt("Odin i poslednix prosmotrennix filmov?");

    personalMovieDB.movies [a] = b;
    personalMovieDB.movies [c] = d;

 console.log(personalMovieDB);   