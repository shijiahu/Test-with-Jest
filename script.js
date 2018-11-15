const googleDatabase = [
	'cat.com',
	'soup.com',
	'anmial.com',
	'catpictures.com',
	'myfavoritcats.com',
	'myfavoritcats2.com',
	'myfavoritcats3.com',
];

const googleSearch = (searchInput, db) => {
	const matches = db.filter(website =>{
		return website.includes(searchInput);
	})
	// if length of matches > 3, return first three
	return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log(googleSearch('cat', googleDatabase))


module.exports = googleSearch;