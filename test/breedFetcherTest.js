const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns error for a empty request, via callback', (done) => {
    fetchBreedDescription('', (err, desc) => {
      // we expect  desc equal null 
      assert.equal(desc, null);
      const expectErr = "Breed does not exist"
      assert.equal(expectErr, err);
      done();
    });
  });

  it('returns error for a breed that does mot exit, via callback', (done) => {
    fetchBreedDescription('pupi', (err, desc) => {
      assert.equal(desc, null);
      const expectErr = "Breed does not exist"
      assert.equal(expectErr, err);
      done();
    });
  });
});