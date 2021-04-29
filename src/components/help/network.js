const express = require('express');
const router = express.Router();
const response = require( '../../network/response' )
router.get( '/' , ( req , res ) => {
    const data = {
        helpText : 'This is some helpful text.',
        title : 'Help me',
        name  : 'Miguel Eduardo'
    };
    response.success( res, 'help' , 'Success' , 200 , data )
})

router.get( '/*' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Help article not found',
        title : '404',
        name : 'Miguel Eduardo'
    })
})

module.exports = router