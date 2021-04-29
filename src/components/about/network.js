const express = require('express');
const router = express.Router();

const response = require( '../../network/response' )

router.get( '/' , ( req , res ) => {
    const data = {
        title : 'About me',
        name  : 'Miguel Eduardo'
    }
    response.success( res , 'about' , 'Success' , 200 , data)
})

module.exports = router