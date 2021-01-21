const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `http://api.weatherapi.com/v1/current.json?key=&q=${encodedUrl}`,
        headers: {
            key: 'cd7faef4f11c404f805143448211901'
        },
    });

    try {
        const resp = await instance.get();


    
    const data1 = resp.data.location;
    const direcc = data1.name;
    const lat = data1.lat;
    const lng = data1.lon;

    return {
        direcc,
        lat,
        lng,
    }
    } catch (error) {
       if (error.response.data.error.code===1006) {
        return resp="lugar Desconocido"  
       }
    }

    
   

    //return resp;
}

module.exports = {
    getLugarLatLng
}