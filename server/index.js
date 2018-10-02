require('dotenv').config();

const controller = require('./controller'),
    express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    passport = require('passport'),
    bodyParser = require('body-parser');

//middleware - express, massive, bodyparser
const app = express();

app.use(express.static(`${__dirname}/../build`));

const { /*SESSION_SECRET,*/ 
        SERVER_PORT, 
        /*CONNECTION_STRING*/ } = process.env;

massive(CONNECTION_STRING).then((db) => {
    console.log('connected to database');
    app.set('db', db);
})

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());

app.use(passport.session());

//endpoints go here
// app.get('/decryption/:id', (req, res, next) => {
//     console.log({id}=req.params)
//     next()
// }, controller.returnDecryption)
// app.post('/encryption', controller.decrypt)
// app.delete('/decryption/:id', controller.deleteMessage)

//port
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})
