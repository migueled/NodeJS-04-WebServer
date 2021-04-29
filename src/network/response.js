/*LIBS*/
const chalk = require( 'chalk' )

const Message = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

/*RENDER*/
exports.success = ( res , view , message , statusCode , data ) => {
    if ( !statusCode ) {
        status = 200;
    }
    if ( !message ) {
        message = Message[ '200' ];
    }
    res.status( statusCode ).render( view , {
        error : '',
        body  :  message,
        data 
    })
}

exports.error = ( res , view , error , statusCode , data , details ) => {
    console.error( chalk.red('[response error] ' + details) );
    res.status( statusCode ).render( view , {
        error,
        data
    })
}

/*SEND*/
exports.successRes = ( res , message , statusCode , data ) => {
    if ( !statusCode ) {
        status = 200;
    }
    if ( !message ) {
        message = Message[ '200' ];
    }
    res.status( statusCode ).send({
        error : '',
        body  :  message,
        data 
    })
}

exports.errorRes = ( res , error , statusCode, details ) => {
    console.error( chalk.red('[response error] ' + details) );
    res.status( statusCode ).send({
        error
    })
}