const geoCode = require( '../../services/geocode' );
const forecast = require( '../../services/forecast' );

const response = require( '../../network/response' )

function weather( address , res ) {
    
    geoCode( address , ( error , { latitude , longitude , location } = {} ) => {
        if ( error ) { 
            return response.errorRes( res , error , 400 , `Error geoCode ${ error }` )
        }
        forecast( longitude , latitude , ( error , dataForeCast ) => {
            if ( error ) { 
                return response.errorRes( res , error , 400 , `Error forecast ${ error }` )
            }
            return response.successRes( res, 'Success' , 200 , {
                forecast : dataForeCast,
                location,
                address : address
            })
        })
    })

}

module.exports = { weather }