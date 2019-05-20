require('dotenv-safe').config();

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import passport from 'passport';
import sql from 'mssql';

import sqlConfig from './config/database';
import authStrategy from './auth/stategy';

import auth from './routes/auth';
import users from './routes/users';
import gest from './routes/empresa';
import cors from 'cors';

const app = express();
app.use(cors());
//Conexão global
sql.connect(sqlConfig(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD))
   .then(conn => {global.conn = conn; console.log(`Conectado ao banco de dados ${process.env.DB_NAME}!`)})
   .catch(err => console.error(err));

//SETANDO SECRET KEY
global.secret = process.env.SECRET_KEY;

passport.use(authStrategy);

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());



//routes
app.use('/login', auth);
app.use('/users', users);
app.use('/gestor', gest);

app.listen(process.env.PORT, () => {
    console.log('API online! porta: ' + process.env.PORT);
});