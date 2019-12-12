const axios = require('axios');

const getLugarLatLng = async (  dir ) => {

        // esta funciòn escapa los caracteres para una url segura

    const encodeUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key':'5a610ee24dmsh1e04c9fddae9f29p14707bjsn4c508531de29',
            'x-rapidapi-host':'devru-latitude-longitude-find-v1.p.rapidapi.com'
            }
    })
    
    // Codigos de estado, en este caso el status 200, es que todo saliò bien
    
    
    const resp  =  await instance.get()

    // .then( resp => {
    //     console.log(resp.data.Results[0]);
    // })
    // .catch( err => {
    //     console.log(err);
    // });

    if(resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para: ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }


}
// no deja de ser una funciòn


module.exports = {
    getLugarLatLng
}