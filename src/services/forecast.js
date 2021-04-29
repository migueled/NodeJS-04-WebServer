const request = require( 'request' )
const key = require( '../config' )

const forecast = ( longitude , latitude, callback ) =>{
    const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${ key.keyWeatherStack() }&query=${ latitude },${ longitude }&units=m`;

    request({ url : urlWeatherStack , json : true } , ( error , { body } ) => {
        if( error ){
            callback( 'Unable to connect to weather service' , undefined )
        } else if( body.error ) {
            callback( 'Unable to find location' , undefined )
        } else {
            callback( undefined , {
                temperature : body.current.temperature,
                feelslike : body.current.feelslike,
                weather_descriptions : body.current.weather_descriptions[0]
            } )
        }
    } )
}


module.exports = forecast;