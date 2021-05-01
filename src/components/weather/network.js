const express = require('express');
const router = express.Router();

const response = require( '../../network/response' )
const controller = require('./controller');

router.get( '/' , ( req , res ) => {
    if( !req.query.address ) {
        response.errorRes( res ,'You must provide an address' , 500 , 'No Address' )
    }
    const address = req.query.address;

    if( address ) {
        controller.weather( address , res );
    }
})

module.exports = router