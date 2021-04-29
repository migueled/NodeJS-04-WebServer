const express = require( 'express' )
const path    = require( 'path' )
const hbs     = require( 'hbs' )

const pathSetup = ( server ) => {
    /*Define paths for express config*/
    const publicDirectoryPath = path.join( __dirname , '../public' )
    const viewsPath           = path.join( __dirname ,  '../templates/views' )
    const partialsPath        = path.join( __dirname ,  '../templates/partials' )
    
    /*Setup handlebars engine and views location*/
    server.set( 'view engine' , 'hbs' )
    server.set( 'views' , viewsPath )
    hbs.registerPartials( partialsPath )
    
    /*Setup static directory to serve*/
    server.use( express.static( publicDirectoryPath ) )
}

module.exports = pathSetup;
