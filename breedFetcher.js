const request = require('request');

const breedFetcher = (breeds) => {
  let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let url = baseUrl.concat('', breeds);
  request(url, callback);
}

callback = (error, response, body) => {
  if (error){
    console.log('url does not exist');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed does not exist');
    return;
  } 
  console.log ((data[0].description))
}

const args = process.argv;
let breeds = (args.slice(2));
breedFetcher(breeds);

