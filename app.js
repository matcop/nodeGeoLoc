const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion',
        demand: true

    }
}).argv;

console.log(argv.direccion);
const encodedUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: { 'X-RapidAPI-Key': 'fb81986a37msh6fb410231ed5fc2p1b4017jsneb7b44d07b77' }
});

instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log(err);
    })