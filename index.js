const express = require('express')
const addItems = require('./routes/addHookah');
const app = express()

var mysql = require('mysql')
var config = require('./config')
var dbOptions = {
	host:	  config.database.host,
	user: 	  config.database.user,
	password: config.database.password,
	port: 	  config.database.port, 
	database: config.database.db
}

app.use(myConnection(mysql, dbOptions, 'pool'))


app.use(express.static('public'))
app.set('view engine', 'pug');
app.use('/addItems', addItems)

app.listen('3000')

