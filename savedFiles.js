const axios = require('axios');
const express = require("express");
const router = express.Router();
// const {response} = require("express");

async function getRequest() {
  let res = await axios.get( 'https://www.n2yo.com/passes/?s=33591');
  let data = res.data;

  //Initial split to isolate main data from junk
  let split = data.split('"Dec"];')[1].split('function SatellitePosition')[0];

  //Grabbing and sorting specific data from the first split into its outer categories
  let spStart = split.split("\n").filter(function(a){return /\bspStart = \b/.test(a); });
  let spMax = split.split("\n").filter(function(a){return /\bspMax = \b/.test(a); });
  let spEnd = split.split("\n").filter(function(a){return /\bspEnd = \b/.test(a); });


  for (let i = 0; i < spStart.length; i++) {
    let specificSplitOne = spStart[i].split('(')[1].split(')')[0];
    let specificSplitTwo = (specificSplitOne.split("\n")).split("\n");
    // let specificSplitThree = specificSplitTwo.split(",");
    console.log(specificSplitTwo);
  }
  // console.log(spStart.length)
  // let startDirection = split.split('(')[1].split(')')[0];
  // console.log(startDirection);

  return{spStart, spMax, spEnd};
}

module.exports = { getRequest };
