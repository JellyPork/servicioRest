const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');

const propiedadesRouter = require('./routers/propiedades');
const propietariosRouter = require('./routers/propietarios');
const arrendatariosRouter = require('./routers/arrendatarios');



const app = express();
const port = 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

app.use('/propiedades', propiedadesRouter);
app.use('/propietarios', propietariosRouter);
app.use('/arrendatarios', arrendatariosRouter);




// Iniciar servidor

https.createServer({
  cert: fs.readFileSync('server.cer'),
  key: fs.readFileSync('server.key')
},app).listen(port, () => {
  console.log(`Servidor iniciado en https://localhost:${port}`);
});
