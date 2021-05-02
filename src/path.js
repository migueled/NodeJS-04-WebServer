const express = require( 'express' )
const path    = require( 'path' )
const hbs     = require( 'hbs' )
const config  = require( './config' )

const pathSetup = ( server ) => {
    /*Define paths for express config*/
    const publicDirectoryPath = path.join( __dirname , `../${ config.publicPath }` )
    const viewsPath           = path.join( __dirname ,  `../${ config.templatesPath }/${ config.viewsPath }` )
    const partialsPath        = path.join( __dirname ,  `../${ config.templatesPath }/${ config.partialsPath }` )
    
    /*Setup handlebars engine and views location*/
    server.set( 'view engine' , 'hbs' )
    server.set( 'views' , viewsPath )
    hbs.registerPartials( partialsPath )
    
    /*Setup static directory to serve*/
    server.use( express.static( publicDirectoryPath ) )
}

module.exports = pathSetup;
