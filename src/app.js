const path    = require( 'path' )
const express = require( 'express' )
const hbs     = require( 'hbs' )
const app     = express()

/*Files /Weather*/
const geoCode = require( './utils/geocode' );
const forecast = require( './utils/forecast' );

/*Define paths for express config*/
const publicDirectoryPath = path.join( __dirname , '../public' )
const viewsPath           = path.join( __dirname ,  '../templates/views' )
const partialsPath        = path.join( __dirname ,  '../templates/partials' )

/*Setup handlebars engine and views location*/
app.set( 'view engine' , 'hbs' )
app.set( 'views' , viewsPath )
hbs.registerPartials( partialsPath )

/*Setup static directory to serve*/
app.use( express.static( publicDirectoryPath ) )

/*Routes*/
app.get( '/' , ( req, res ) => {
    res.render( 'index' , {
        title : 'Weather app',
        name  : 'Miguel Eduardo'
    })
})

app.get( '/about' , ( req , res ) => {
    res.render( 'about' , {
        title : 'About me',
        name  : 'Miguel ED'
    })
})

app.get( '/help', ( req , res ) => {
    res.render( 'help' , {
        helpText : 'This is some helpful text.',
        title : 'Help me',
        name  : 'Eduardo'
    })
})

/*http://localhost:3000/products?search=games&rating=5*/
app.get( '/products' , ( req, res ) => {
    if( !req.query.search ) {
        return res.send({
            error : 'You must provide a search term'
        })
    }
    console.log( req.query );
    res.send({
        products : []
    })
})

/*http://localhost:3000/weather?address=philadelphia*/
app.get( '/weather' , ( req , res ) => {
    if( !req.query.address ) {
        return res.send({
            error : 'You must provide an address'
        })
    }
    const address = req.query.address;
    let temperature = '';
    let feelslike = '';
    let weather_descriptions = '';
    let ubic = '';

    if( address ) {
        geoCode( address , ( error , { latitude , longitude , location } = {} ) => {
            if ( error ) { 
                return res.send( { error } )
            }
            forecast( longitude , latitude , ( error , dataForeCast ) => {
                if ( error ) { 
                    return res.send( { error } )
                }
                return res.send({
                    forecast : dataForeCast,
                    location,
                    address : req.query.address
                })
            })
        })
    }
})

app.get( '/help/*', ( req , res ) => {
  res.render( '404' , {
    errorMessage : 'Help article not found',
    title : '404',
    name : 'Miguel ED'
  })
})

app.get( '*' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Page not found',
        title : '404',
        name : 'Miguel Ed'
      })
})

/*this starts up this server port => 3000*/
app.listen( 3000 , () => {
    console.log( 'Server is up on port 3000' ) // This message is never going to display to someone int the browser
})