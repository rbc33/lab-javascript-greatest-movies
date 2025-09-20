// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map((m) => m.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	return moviesArray.reduce((acc, curr) => {
		if (curr.director === 'Steven Spielberg' && curr.genre.includes('Drama')) {
			return acc + 1
		} else {
			return acc
		}
	}, 0)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) return 0
	const sum = moviesArray.reduce((acc, curr) => {
		if (curr.score) {
			return acc + curr.score
		} else {
			return acc
		}
	}, 0)
	const avg = sum / moviesArray.length
	const round = parseFloat(avg.toFixed(2))

	console.log(round)
	return round
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	return scoresAverage(moviesArray.filter((m) => m.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
