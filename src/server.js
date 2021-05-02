const express = require( 'express' )
const server  = express()

/*FILES*/
const router = require( './network/routes' )
const pathSetup   = require( './path' )
const config = require( './config' )

/*PATH SETUP*/
pathSetup( server )

/*ROUTES*/
router( server )

/*this starts up this server port => 3000*/
server.listen( config.port , () => {
    console.log( `Server is up on ${ config.host }/${ config.port }` ) // This message is never going to display to someone int the browser
})