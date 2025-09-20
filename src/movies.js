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
// const sorted = array.slice().sort((a, b) => a.year !== b.year
// ? a.year - b.year
// : a.title.localeCompare(b.title));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const movies = moviesArray.sort((a, b) => a.title.localeCompare(b.title))
	return movies.map((m, i) => {
		if (i <= 19) {
			return m.title
		}
	})
}
// const sortedTitles = moviesArray.slice().sort((a,b) => a.title.localeCompare(b.title)).map(x => x.title).slice(0, 20);

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
// function turnHoursToMinutes(moviesArray) {
//   return moviesArray.map(m => {
//     const match = m.duration.match(/(?:(\d+)h)?(?: *(\d+)min)?/);
//     const hours = match[1] ? parseInt(match[1]) : 0;
//     const minutes = match[2] ? parseInt(match[2]) : 0;
//     return { ...m, duration: hours * 60 + minutes };
//   });
// }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (moviesArray.length === 0) return null
	console.log(moviesArray)
	const yearsScores = {}

	moviesArray.map((m) => {
		if (!yearsScores[m.year]) {
			yearsScores[m.year] = {
				score: m.score,
				count: 1,
			}
		} else {
			yearsScores[m.year].score += m.score
			yearsScores[m.year].count++
		}
	})
	console.log('years: ', yearsScores)

	let bestYear = 2025
	let bestAvgScore = -Infinity

	for (const year in yearsScores) {
		const { score, count } = yearsScores[year]
		const avgScore = score / count

		if (avgScore > bestAvgScore) {
			bestAvgScore = avgScore
			bestYear = Math.min(year, bestYear)
		}
	}

	console.log('score: ', bestAvgScore, ', year: ', bestYear)
	return `The best year was ${bestYear} with an average score of ${bestAvgScore}`
}
// function bestYearAvg(moviesArray) {
//   if(!moviesArray.length) return null;
//   const yearMap = {};
//   for(const movie of moviesArray){
//     if(!yearMap[movie.year]) yearMap[movie.year] = [];
//     yearMap[movie.year].push(movie.score);
//   }
//   let bestYear = 0;
//   let bestAvg = 0;
//   for(const year in yearMap){
//     const avg = yearMap[year].reduce((a,c)=>a+c,0)/yearMap[year].length;
//     if(avg > bestAvg || (avg === bestAvg && year < bestYear)){
//       bestAvg = avg;
//       bestYear = year;
//     }
//   }
//   return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
// }
