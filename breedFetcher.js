const  request = require('request');
//const { fetchBreedDescription } = require('./breedFetcher');
// const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
request( catUrl, function (error, response, body) {
  // error case
  if(error){
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)[0].name); // Print the HTML for the Google homepage.
  callback(error, false);
}
else {
// passing
 console.log(typeof body);
 const data = JSON.parse(body);
 callback(false, data); 
}


});



//  fetch('https://api.thecatapi.com/v1/breeds/search?q=Siberian')
//   .then(response => response.json())
//   .then(data => console.log(data));
//   const breedDescription = fetchBreedDescription('Siberian');

// console.log(data);
// console.log(typeof data);


module.exports = { fetchBreedDescription };