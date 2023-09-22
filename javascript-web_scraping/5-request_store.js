#!/usr/bin/node
const axios = require('axios');

const apiUrl = 'https://swapi.dev/api/films/';

axios.get(apiUrl)
  .then(response => {

    const filmTitles = response.data.results.map(film => film.title);

    console.log('Film Titles:');
    filmTitles.forEach(title => {
      console.log(title);
    });
  })
  .catch(error => {
    console.error('Error fetching data from Star Wars films API:', error);
  });
