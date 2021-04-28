const weatherForm = document.querySelector( 'form' );
const search = document.querySelector( 'input' );

weatherForm.addEventListener( 'submit' , ( e ) => {
    e.preventDefault();
    const location = search.value;
    if( location ) {
        getData( location );
    } else {
        console.log( 'else' );
    }
});

const getData = ( location ) => {
    fetch( `http://localhost:3000/weather?address=${ location }` ).then( ( response ) => {
        response.json().then( (data) => {
            if( data.error ){
                console.log( data.error );
            } else {
                console.log( data );
            }
        })
    })
}