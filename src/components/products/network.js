const express = require('express');
const router = express.Router();

const response = require( '../../network/response' )

router.get( '/' , ( req , res ) => {
    if( !req.query.search ) {
        return response.errorRes( res , 'You must provide a search term' , 400 , 'No query Search' )
    }
    const data ={
        products : []
    };
    
    response.successRes( res , 'Success' , 200 , data)
})

module.exports = router