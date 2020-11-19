const express = require('express');
const app = express();
const { SERVER_PORT } = require('./path');
const cors = require('cors');
const db = require('./database/db');
const routes = require('./routes/taskRoutes');
const routes2 = require('./routes/userRoutes');

//Server settings
app.set('port', process.env.PORT  || SERVER_PORT);
app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//Middleware
app.use(cors({
    origin:'*'
}));

//Routes
app.use(routes);
app.use(routes2);

//Start the server
app.listen(app.get('port'), ()=>{
    console.log('Server listening on port '+app.get('port'));
});