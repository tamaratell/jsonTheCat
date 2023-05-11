const request = require('request');

//to filter by breed
//endpoint: ./breeds
//e.g. https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
//main endpoint to JSOn of all breeds: https://api.thecatapi.com/v1/breeds
//to search breeds https://api.thecatapi.com/v1/breeds/search?breed={breed.id}
//to search a breed: https://api.thecatapi.com/v1/breeds/search?q=beng

const breeds = process.argv.slice(2);

const getBreedData = (breed, cb) => {

  let breedData = "";

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    try {
      breedData = (JSON.parse(body))[0];
      return cb(breedData.description);
    }

    catch (error) {
      console.log("Breed not found :(");
      return;
    }

  });
};

getBreedData(breeds, (desc) => { console.log(desc); });