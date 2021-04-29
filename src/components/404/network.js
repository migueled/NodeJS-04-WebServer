const express = require('express');
const router = express.Router();

router.get( '/' , ( req , res ) => {
    res.render( '404' , {
        errorMessage : 'Page not found',
        title : '404',
        name : 'Miguel Ed'
      })
})

module.exports = router