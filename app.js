
const info=require('./getinfo/info');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion',
        demand: true

    }
}).argv;

info.getinfo(argv.direccion)
.then(console.log)