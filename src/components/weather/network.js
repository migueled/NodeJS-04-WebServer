const express = require('express');
const router = express.Router();

router.get( '/' , ( req , res ) => {
    if( !req.query.address ) {
        return res.send({
            error : 'You must provide an address'
        })
    }
    const address = req.query.address;

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

module.exports = router