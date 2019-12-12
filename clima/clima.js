const axios = require('axios');


const getClimate =  async (lat, lng)=> {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7229dde77d40f0b1edfaaf917342b4d5&units=metric`)

    return  resp.data.main.temp;

}



module.exports = {
    getClimate
}