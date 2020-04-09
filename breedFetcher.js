const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let url = baseUrl.concat('', breedName);
  request(url, req);
}

const req = (error, response, body) => {
  if (error){
    console.log('url does not exist');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed does not exist');
    return;
  } 
  console.log((data[0].description))
}

module.exports = { fetchBreedDescription };
