const express  = require( 'express' )
const router   = express.Router()
const response = require( '../../network/response' )

router.get( '/' , ( req , res ) => {
    const data = {
        title : '404',
        name : 'Miguel Eduardo'
    };
    response.error( res , '404'  ,'Page not found' , 500 , data , 'Error to search page' )
})

module.exports = router