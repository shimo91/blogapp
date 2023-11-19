const express =require('express');
const morgan = require('morgan');
const cors = require('cors');

const app=new express();

app.use(morgan('dev'));
require('dotenv').config();

app.use(cors());

require('./db/connect');

const routerFile =require('./routes/post');
app.use('/blogs',routerFile);

const routeruserFile =require('./routes/user');
app.use('/user',routeruserFile);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is rnning on PORT ${PORT}`);
})