const fetch = require('node-fetch');

const swapi = require('./script2');

it('calls swapi to get people', (done)=>{
	expect.assertions(1);
	// how many expect's below, especially in asynchronous test
	// more accurate to test if it's working
	// if it's not working because it simply call getPeople then tell us it's passed
	// so we need done();
	swapi.getPeople(fetch).then(data=>{
		expect(data.count).toEqual(87)
		done();
	})
})
// another way to do without done, using return,
// so it will wait until it finished
it('calls swapi to get people2', ()=>{
	expect.assertions(1);
	// always do this
	return swapi.getPeople(fetch).then(data=>{
		expect(data.count).toEqual(87)
	})
})

it('calls swapi to get people with a promise', ()=>{
	expect.assertions(2);
	return swapi.getPeoplePromise(fetch).then(data=>{
		expect(data.count).toEqual(87)
		expect(data.results.length).toBeGreaterThan(5)
	})
})