const express = require('express');
const router = express.Router();

router.get( '/' , ( req , res ) => {
    res.render( 'index' , {
        title : 'Weather app',
        name  : 'Miguel Eduardo'
    })
})

module.exports = router