const express = require('express');
const router = express.Router();

router.post( '/' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Page not found',
        title : '404',
        name : 'Miguel Ed'
      })
})

module.exports = router