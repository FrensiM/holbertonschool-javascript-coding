#!/usr/bin/node
const axios = require('axios');

let count = 0;

axios.get(proces(argv[2]))
.then((response)=>{
    response.data.results.forEach(element => {
        element.characters.forEach(movie => {
            if (movie.includes('18'))
                count++;
        })
    })
    console.log(count);
})
.catch((err)=>{
    console.log("err---",err)
})
