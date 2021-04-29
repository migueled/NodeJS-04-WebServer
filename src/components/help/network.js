const express = require('express');
const router = express.Router();

router.get( '/' , ( req , res ) => {
    res.render( 'help' , {
        helpText : 'This is some helpful text.',
        title : 'Help me',
        name  : 'Miguel Eduardo'
    })
})

router.get( '/*' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Help article not found',
        title : '404',
        name : 'Miguel Eduardo'
    })
})

module.exports = router