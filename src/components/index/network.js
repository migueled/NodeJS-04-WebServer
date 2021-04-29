const express = require('express');
const router = express.Router();
const response = require( '../../network/response' )

router.get( '/' , ( req , res ) => {
    const data = {
        title : 'Weather app',
        name : 'Miguel Eduardo'
    };
    response.success( res, 'index' , 'Success' , 200 , data )
})

module.exports = router