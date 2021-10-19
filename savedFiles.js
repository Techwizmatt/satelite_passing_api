const axios = require('axios');
const express = require("express");
const router = express.Router();
// const {response} = require("express");

async function getRequest() {
  let res = await axios.get( 'https://www.n2yo.com/passes/?s=33591');
  let data = res.data;


  let split = data.split('"Dec"];')[1].split('function SatellitePosition')[0];

  var spStart = split.split("\n").filter(function(a){return /\bspStart = \b/.test(a); });
  var spMax = split.split("\n").filter(function(a){return /\bspMax = \b/.test(a); });
  var spEnd = split.split("\n").filter(function(a){return /\bspEnd = \b/.test(a); });

  return{spStart};
}

module.exports = { getRequest };
