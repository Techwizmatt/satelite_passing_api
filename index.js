// urls: ['<SCRIPT LANGUAGE="JavaScript">']

// https://www.n2yo.com/passes/?s=33591  Post Request


const express = require("express");
const connect = require("./savedFiles");
const {getRequest} = require("./savedFiles");
const router = express.Router();
const app = express();

app.get('/test', function(req, res){

  getRequest().then(function(result) {
    res.send(result);
  })
});

app.listen(3000);
