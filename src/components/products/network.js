const express = require('express');
const router = express.Router();

router.get( '/' , ( req , res ) => {
    if( !req.query.search ) {
        return res.send({
            error : 'You must provide a search term'
        })
    }
    console.log( req.query );
    res.send({
        products : []
    })
})

module.exports = router