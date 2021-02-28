'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let nikes = '';
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != '' && b !== '' && a != null && b != null && a.length < 10)
    {
        personalMovieDB.movies[a] = b;
    }
    else
    {
        i--;
    }
}
if (personalMovieDB.count < 10)
{
    nikes = 'Просмотрено довольно мало фильмов';
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30)
{ 
    nikes = 'Вы классический зритель';
}
else if (personalMovieDB.count > 50)
{ 
    nikes = 'Вы киноман';
}

console.log(nikes);
console.log(personalMovieDB);

