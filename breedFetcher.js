const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let url = baseUrl.concat('', breedName);
  request(url, (error, response, body) => {
    if (error) {
      callback('url does not exist', null) ;
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed does not exist', null);
      return;
    }
    callback(null, (data[0].description).trim());
  });
};


module.exports = { fetchBreedDescription };
