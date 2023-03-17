let numberOffFilms = +prompt("Skolko filmov vi uje posmotreli?");
let personalMovieDB = {
  count : numberOffFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false

};



    let a ,
        b;

    for(let i = 0; i < 2; i++){
       a = prompt("Odin i poslednix prosmotrennix filmov?", '');
      b = prompt("Na skolko otsenite ego?", "");

      if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies [a] = b;
      } else {
        console.log('error');
        i--;
      }
     
    }

    if(personalMovieDB.count < 10){
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10){
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
      console.log("Вы киноман");
    }else {
      console.log("Произошла ошибка");
    }

 console.log(personalMovieDB);   