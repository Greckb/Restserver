const Server = require('./models/server');

require('dotenv').config();

const server = new Server();

//Con esto llamamos a la clase server y levantamos el servidor
server.listen();



