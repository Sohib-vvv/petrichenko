let numberOffFilms ;


function start(){
  numberOffFilms = +prompt("Skolko filmov vi uje posmotreli?");

  while(numberOffFilms == "" || numberOffFilms == null || isNaN(numberOffFilms)){
    numberOffFilms = +prompt("Skolko filmov vi uje posmotreli?");
  }
};

start();
let personalMovieDB = {
  count : numberOffFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false

};


function rememberMyFilms(){

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
}

rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10){
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
  }else {
    console.log("Произошла ошибка");
  }

};

detectPersonalLevel();

function showMyDB (hidden){
  if(!hidden){
    console.log(personalMovieDB);  
  }
}
showMyDB( personalMovieDB.privat);

function writeYourGenres(){
  for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}

writeYourGenres();


   
 