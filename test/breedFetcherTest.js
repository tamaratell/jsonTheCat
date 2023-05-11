const getBreedDescription = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    getBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error message when an invalid breed is passed in', (done) => {
    getBreedDescription('invalidBreed', (err, desc) => {
      assert.equal(desc, null); //value of desc should be null
      assert.equal(err, 'Breed not found :('); //value of err should be custom err msg
      done();
    });
  });
});