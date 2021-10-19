// urls: ['<SCRIPT LANGUAGE="JavaScript">']

// https://www.n2yo.com/passes/?s=33591  Post Request


const axios = require('axios');
const express = require("express");
const router = express.Router();
// const {response} = require("express");

axios.get( 'https://www.n2yo.com/passes/?s=33591')
    .then((response) => {
      var rawData = response.data;


      // console.log(rawData)

      // let splitOne = rawData.split("<SCRIPT");
      let split = rawData.split('"Dec"];')[1].split('function SatellitePosition')[0];



      // for (let i = 0; i < lines.length; i++) {
      //   if ( /passes/.test(lines) ) {
      //     console.log()
      //   }
      //
      // }
      // let splitTwo = splitOne[1].split("<SCRIPT>")
      // return(splitTwo[0])

      // var lines_with_me = split.split("\n").filter(function(a){return /\bpasses\b/.test(a); });
      // console.log(lines_with_me.length);


      var spStart = split.split("\n").filter(function(a){return /\bspStart = \b/.test(a); });
      console.log(spStart);

      var spMax = split.split("\n").filter(function(a){return /\bspMax = \b/.test(a); });
      console.log(spMax);

      var spEnd = split.split("\n").filter(function(a){return /\bspEnd = \b/.test(a); });
      console.log(spEnd);

    });


// const express = require("express");
// const router = express.Router();
// const app = express();
//
// app.get('/test', function(req, res){
//       res.send('hello world');
// });
//
// app.listen(3000);
