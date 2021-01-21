const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getinfo = async (direccion) => {
  try {
    const resp = await lugar.getLugarLatLng(direccion);
    if(resp.status===400) return error.resp;
    // const lat = resp.lat;
    // const lng = resp.lng;
    const msg_temp = await clima.getclima(resp.lat, resp.lng);
    return `El clima de ${direccion} es de ` + msg_temp + ' grados Centigrados';
  } catch (error) {
    if(error.response.data.message==='wrong latitude')
    return `No se pudo determinar el clima en ${direccion} :es un lugar Desconocido`;
  }
}
module.exports = {
  getinfo
}