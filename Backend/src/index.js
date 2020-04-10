const app = require('./app');
const { connect } = require('./database');



async function main() {

    //conexion a la base de datos
    await connect();

    //Aplicacion Express
    await app.listen(4000);
    console.log('Servior Funcionado en puerto 4000: Conectado');

}

main();