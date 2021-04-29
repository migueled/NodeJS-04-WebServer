const express = require('express');
const router = express.Router();

router.post( '/' , ( req , res ) => {
    res.render( 'help' , {
        helpText : 'This is some helpful text.',
        title : 'Help me',
        name  : 'Eduardo'
    })
})

router.post( '/help/*' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Help article not found',
        title : '404',
        name : 'Miguel ED'
    })
})

module.exports = router