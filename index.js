const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];


const fetchBreedCallback =  (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }

};

fetchBreedDescription(breedName, fetchBreedCallcallback);
 
// Case 1: good response (no error (const error = null), yes description (const desc)) 
// null -> falsy
// fetchBreedCallback(false, desc);

// //Case 2: bad response (yes error, no description)
// fetchBreedCallback(error, false);