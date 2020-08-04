const express = require('express');
const app = express()
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 5000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./routes/index'));
app.use('/api/books',require('./routes/books'));
app.use('/api/users',require('./routes/users'))
//starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port')

} )