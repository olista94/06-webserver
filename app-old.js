
const http = require('http');

http.createServer( ( req, resp ) => {
    
    console.log( req )

    // resp.writeHead( 200, { 'Content-Type': 'application/json' } )
    // resp.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' ); 
    // resp.writeHead( 200, { 'Content-Type': 'application/csv' } );

    resp.write( 'Hola Mundo' );
    resp.end();

} )
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 );
