const statusMessage = {
    '200': 'done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = ( res , message , status , data ) => {
    let statusCode    = status;
    let statusMessage = message;
    
    if ( !status ) {
        status = 200;
    }
    if ( !message ) {
        statusMessage = statusMessage[ status ];
    }
    res.status( statusCode ).send({
        error : '',
        body  :  statusMessage,
        data 
    })
}

exports.error = ( res , view , error , status , data , details) => {
    console.error( '[response error] ' + details );
    res.status( status ).render( view ,{
        error,
        data
    })
}