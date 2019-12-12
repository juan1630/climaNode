// ====================== REQUIERES ================

const lugar = require('./place/place');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'Direccion de una ciudad para obtener el clima',
        command: true
    }
})
.argv;


const getIfo = async (direccion)=> {

    try {
    
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClimate(coords.lat , coords.lng );

        return `El clima de ${coords.direccion} es de: ${temp}.`
    
    } catch (error) {
    
            return `No se pudo determinar el clima de ${coords.direccion}.`
    }

    
    

}

getIfo(argv.direccion)
.then( console.log )
.catch( console.log )

// lugar.getLugarLatLng(argv.direccion)
// .then( resp => console.log(resp) )
// .catch(erro => console.log(erro) )



