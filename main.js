"use strict"
let personalMovieDB = {
  count : 0,
  movies : {},
  actors : {},
  genres : [],
  privat : false,
  start : function (){
    personalMovieDB.count = +prompt("Skolko filmov vi uje posmotreli?");
  
    while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt("Skolko filmov vi uje posmotreli?");
    }
  },
  rememberMyFilms:function(){

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
  },

  detectPersonalLevel: function(){
    if(personalMovieDB.count < 10){
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10){
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
      console.log("Вы киноман");
    }else {
      console.log("Произошла ошибка");
    }
  
  },

  showMyDB: function (hidden){
    if(!hidden){
      console.log(personalMovieDB);  
    }
  },

  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres:function(){
    for(let i = 1; i < 2; i++){
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre === "" || genre == null){
      //   console.log("Vi vveli nekoreknuyu dani");
      //   i--;
      // }else{
      //   personalMovieDB.genres[i - 1] = genre;
      // }

      let genre = prompt(`VVedite vashi lyubimie janri cherez zapituyu `).toLocaleLowerCase();
      if (genre === "" || genre == null){
          console.log("Vi vveli nekoreknuyu dani");
          i--;
        }else{
          personalMovieDB.genres = genre.split(",");
       
        }
    
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
  },
};

personalMovieDB.writeYourGenres()







   
 