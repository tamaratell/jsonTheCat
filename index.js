const getBreedDescription = require('./breedFetcher');

const breeds = process.argv.slice(2);

getBreedDescription(breeds, (error, desc) => {
  if (error) {
    console.log("breed not found :(");
  } else {
    console.log(desc);
  }
});