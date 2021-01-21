const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion',
        demand: true

    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    //const encodedUrl = encodeURI(argv.direccion);