#!/usr/bin/env node

const axios = require('axios');

axios.get(process.argv[2])
  .then(function (response) {
    console.log('code: %s', response.status);
  })
  .catch(function (error) {
    console.log('code: %s', error.response.status);
  });