//const { require } = require('yargs');
const lugar = require('./lugar/lugar');
const clima= require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion',
        demand: true

    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
   //una funcion async a fuerza regresa una promesa asi;

   clima.getclima(-16.53,-68.20)
   .then(console.log)
   .catch(console.log)