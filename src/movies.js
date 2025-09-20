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

	return round
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	return scoresAverage(moviesArray.filter((m) => m.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	const movArr = structuredClone(moviesArray)
	const movies = movArr
		.sort((a, b) => a.year - b.year)
		.sort((a, b) => {
			if (a.year === b.year) {
				return a.title.localeCompare(b.title)
			}
		})
	return movies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const movies = moviesArray.sort((a, b) => a.title.localeCompare(b.title))
	return movies.map((m, i) => {
		if (i <= 19) {
			return m.title
		}
	})
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	const hours = moviesArray.map((m) => {
		if (m.duration.length > 2) {
			const duration =
				parseInt(m.duration.slice(0)) * 60 + parseInt(m.duration.slice(3.2))
			return {
				...m,
				duration: duration,
			}
		} else {
			const duration = parseInt(m.duration.slice(0)) * 60
			return {
				...m,
				duration: duration,
			}
		}
	})
	return hours
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
