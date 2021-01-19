const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion',
        demand: true

    }
}).argv;

const encodedUrl = encodeURI(argv.direccion);

console.log(encodedUrl);

const instance = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=&q=${encodedUrl}`,
    headers: {
        key: 'cd7faef4f11c404f805143448211901',


    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.location.country);
    })
    .catch(err => {
        console.log(err);
    })