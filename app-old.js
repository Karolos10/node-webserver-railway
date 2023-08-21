
const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json '})

    /* res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' }); */

    res.write('Hola mundo');
    /* res.write('1, Karlos\n');
    res.write('2, Oscar\n');
    res.write('3, Pedro\n');
    res.write('4, Juliana\n'); */



    /* const persona = {
        id: 1,
        nombre: 'Karlos'
    } */

    //res.write( JSON.stringify( persona ));
    res.end();
})

.listen( 8080 );

console.log("Escuchando en el puerto", 8080);