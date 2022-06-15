const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const {v4:uuid4} = require('uuid')
const path = require('path')
const router = require('./router')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set('view engine', 'ejs')

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret : uuid4(),
    resave : false,
    saveUninitialized : true
}))

app.use('/route',router)

app.get('/',(req,res) => {
    res.render('base',{title : 'Login System'})

})

app.listen(3000)