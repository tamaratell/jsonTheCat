const request = require('request');

const breeds = process.argv.slice(2);

const getBreedDescription = (breed, cb) => {

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    try {
      const breedData = (JSON.parse(body))[0];
      return cb(null, breedData.description);
    }

    catch (error) {
      return cb(error, null);
    }
  });
};



module.exports = getBreedDescription;