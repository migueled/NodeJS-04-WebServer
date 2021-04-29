const express = require('express');
const router = express.Router();

router.post( '/' , ( req , res ) => {
    res.render( 'about' , {
        title : 'About me',
        name  : 'Miguel ED'
    })
})

module.exports = router