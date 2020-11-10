const express = require('express')
const app = express()
const fs = require("fs");
const request = require("request");
const methodOverride = require('method-override')
const path = require('path')
const fileUpload = require('express-fileupload')
const fetch = require("node-fetch");
const { callbackify } = require('util')
const { Http2ServerRequest } = require('http2');
const { contains } = require('jquery');


app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));



app.locals.radio_subsidymeasuretitle;
app.locals.text_subsidymeasuretitle;
app.locals.radio_subsidyobjective;
app.locals.text_subsidyobjective;
app.locals.radio_beneficiaryname;
app.locals.text_beneficiaryname;
app.locals.email_addresspass;
app.locals.searchawards;


/***************************************************** */
/* Default login screen - Web application Launch screen */
/****************************************************** */
app.get('/',(req, res) => {
  res.render('publicusersearch/homepage')
})



/****************************************************** */
/* All Router declarations */
/****************************************************** */

var subsidymeasuretitle = require('./routes/subsidymeasuretitle');
app.use('/subsidymeasuretitle',subsidymeasuretitle);

var beneficiaryname = require('./routes/beneficiaryname');
app.use('/beneficiaryname',beneficiaryname);

var subsidyobjective = require('./routes/subsidyobjective');
app.use('/subsidyobjective',subsidyobjective);

var spendingregion = require('./routes/spendingregion');
app.use('/spendingregion',spendingregion);

var searchresults = require('./routes/searchresults');
app.use('/searchresults',searchresults);







const port = process.env.PORT || 3001;
app.listen(port);

console.log("Server running at https://localhost:3001");
