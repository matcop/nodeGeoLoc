const axios=require('axios');
const apiidw=process.env.KEY_OPENW;

const getclima=async (lat,lng)=>{
const resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiidw}&units=metric`)
return resp.data.main.temp
}


module.exports={
  getclima
}