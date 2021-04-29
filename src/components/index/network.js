const express = require('express');
const router = express.Router();

router.post( '/' , ( req , res ) => {
    res.render( 'index' , {
        title : 'Weather app',
        name  : 'Miguel Eduardo'
    })
})

module.exports = router