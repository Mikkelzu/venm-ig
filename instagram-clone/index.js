/*

    Main 

*/

const express = require('express');
const app = express();

const config = require('./config');
const db = require('./config/database');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const globalRouter = require('./routes/global')

const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(express.urlencoded( {limit:'50mb', extended:true } ));
app.use(express.json( {limit:'50mb'} ));
app.use(cors);

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/global', globalRouter)

app.listen(config.port, console.log('Server started on port %s', config.port));