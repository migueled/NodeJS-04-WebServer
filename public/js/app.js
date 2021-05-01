const weatherForm = document.querySelector( 'form' );
const search = document.querySelector( 'input' );
const messageSecond = document.querySelector( '#message-1' )

weatherForm.addEventListener( 'submit' , ( e ) => {
    e.preventDefault();
    const location = search.value;
    if( location ) {
        messageSecond.textContent = 'Loading';
        getData( location );
    } else {
        messageSecond.textContent = 'There is no data';
    }
});

const getData = ( location ) => {
    fetch( `http://localhost:3000/weather?address=${ location }` ).then( ( response ) => {
        response.json().then( (data) => {
            if( data.error ){
                messageSecond.textContent = 'Try again later';
            } else {
                console.log( data );
                messageSecond.textContent = `${ data.data.location }, Feelslike: ${ data.data.forecast.feelslike }, Temperature: ${ data.data.forecast.temperature }, Weather Description: ${ data.data.forecast.weather_descriptions }`;
            }
        })
    })
}