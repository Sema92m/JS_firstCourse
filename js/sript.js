// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", '');
// console.log(answer + 5);

// const user = 18;

// alert(`Hello ${user}`);

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(decr--);

// console.log(5%2);

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const questionLastFilm1 = prompt('Один из последних просмотренних фильмов?',''),
	questionRateFilm1 = +prompt('На сколько оцените его?',''),
	questionLastFilm2 = prompt('Один из последних просмотренних фильмов?',''),
	questionRateFilm2 = +prompt('На сколько оцените его?','');

	personalMovieDB.movies[questionLastFilm1] = questionRateFilm1;
	personalMovieDB.movies[questionLastFilm2] = questionRateFilm2;

	console.log(personalMovieDB);
