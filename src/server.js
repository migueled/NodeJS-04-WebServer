const express = require( 'express' )
const server  = express()

/*Files /Weather*/
const router = require( './network/routes' )
const pathSetup   = require( './path' )

/*PATH SETUP*/
pathSetup( server )

/*ROUTES*/
router( server )

/*this starts up this server port => 3000*/
server.listen( 3000 , () => {
    console.log( `Server is up on port 3000` ) // This message is never going to display to someone int the browser
})