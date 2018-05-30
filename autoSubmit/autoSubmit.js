'use strict';

var request = require('request'); //First tutorial used request
// const fetch = require('node-fetch'); //Second tutorial used node-fetch
var cheerio = require('cheerio');
var cmd=require('node-cmd');
const fs = require('fs');

cmd.get(`
git add .
git commit -m "done"
git push origin ${assignmentName}
git open
`); 

//From here we probably need to figure out how to do login with express
