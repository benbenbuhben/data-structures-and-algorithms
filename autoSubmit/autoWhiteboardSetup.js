'use strict';

var request = require('request'); //First tutorial used request
// const fetch = require('node-fetch'); //Second tutorial used node-fetch
var cheerio = require('cheerio');
var cmd = require('node-cmd');
const fs = require('fs');
let url = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-11//';


//let url = 'https://canvas.instructure.com/courses/1327067';


// 8448316
// Authentication scheme seems to be Bearer
// let CanvasAPIToken = '7~1BPOai4yYYu1v1laMGS7zxx36lr9MSLZq7FQWl1aT2GN1LZSjzu84k6OuH8ISo9O';
// let url = `https://canvas.instructure.com/api/v1/courses/1327067/assignments/8448316?access_token=${CanvasAPIToken}`;


//Right now, we're using the site we probably shouldn't have access to. Will work for now, but maybe get with John to ask for help on scraping sites that require authentication. Request lets you send up an authorization object, but I couldn't quite get it.

//This will scrape the assignment page and return 3 things: file/branch name, function name, and feature tasks. 
request({
  url: url,
},
function (error, response, html) {

  var $ = cheerio.load(html);

  let highlightedText = [];
  let eachHighlight = $('.highlighter-rouge').each(function (i, elem) {
    highlightedText.push($(this).text());
  }); //will be eachHighlight[1];

  let allText = $('.wrapper').text();
 
  let textArr = allText.split('\n');
  let Feature = textArr.indexOf('Feature Tasks');
  let Structure = textArr.indexOf('Structure and Testing');
  let textWeWant =[];
  for(let i = Feature+1; i < Structure; i++){
    textWeWant.push(textArr[i]);
  }
  let featureTasks = textWeWant.join(' ');
  //put feature tasks in README
});

// So we should get the above sent as a promise. But for now...
let assignmentName = 'Towers-of-Hanoi';
let functionName = 'towersOfHanoi(n)';

//Create file to write the code. Definitely add an if conditional to check if these files already exist! Don't want to overwrite any work that's already been done. Promisify the 3 things below that need to wait on the first. Run as callbacks within the first in an array of promises. Then do a promise.all, within that call the last one that opens up vscode.
cmd.get(
  `
    cd ../lib
    pwd
  `,
  function(err, data, stderr){
    
    fs.writeFile(`../lib/${assignmentName}.js`,
      `'use strict';

    function ${functionName} {
      //write function here
    }`,
      (err) => {
        if (err) throw err;
      
        console.log(`${assignmentName}.js has been saved to ${data}!`);
      });
   
  }
);

//Create test file based on name
cmd.get(
  `
    cd ../tests/lib
    pwd
  `,
  function(err, data, stderr){
    console.log('the current working dir is : ',data);
    fs.writeFile(`../__test__/lib/${assignmentName}.test.js`, `'use strict';

    const ${functionName} = require('../../../lib/${assignmentName}.js');
    
    describe(${functionName}, () => {
    
      it('${functionName}() does...', () => {
        let test = //put test here
        expect( test ).toEqual();
      });
    
      it('${functionName}() does...', () => {
        let test = //put test here
        expect( test ).toEqual();
      });
    
      it('${functionName}() does...', () => {
        let test = //put test here
        expect( test ).toEqual();
      });
    
    });`, (err) => {
      if (err) throw err;
      
      console.log(`${assignmentName}.test.js has been saved to ${data}!`);
    });
   
  }
);

//Consider adding the image extension below as a template literal based on what you determine this extension to be. In this case it would need to be a callback for the function below it.
fs.appendFile('../README.md', `
# Challenge (insert challenge #) Implement a Queue using two Stacks.
<!-- Short summary or background information -->

## Challenge
Put featureTasks here once you get the promise thing down.

### Solution
*[Solution](https://github.com/benbenbuhben/data-structures-and-algorithms/blob/master/lib/${assignmentName}.js/#L1)*

![Solution](/assets/${assignmentName}.JPG)
`, (err) => {
  if (err) throw err;
  console.log(`Today's whiteboard was appended to README.md!`);
});

//Get image file and change name/location. Note: ls -t lists files sorted by date added/modified
cmd.get(
  `
    cd ~/Downloads
    ls -t
  `,
  function(err, data, stderr){
    let img2move = data.split('\n')[0];
    console.log('img file is', img2move);
    var n = img2move.lastIndexOf('.');
    var extension = img2move.substring(n + 1);
    console.log(extension);
    if(!(extension === 'jpeg' ||  'JPG')){
      console.log('Your most recent file in Downloads is not an image file.');
      //break;
    }
    cmd.get(
      `
        cd ${__dirname}
        cp -r ~/Downloads/${img2move} ../assets/${assignmentName}.${extension}
        pwd
      `,
      function(err, data, stderr){
        console.log(`${__dirname}`);
        console.log(`~/Downloads/${img2move} has been copied to assets and renamed to ${assignmentName}.${extension}!`);
        console.log(data);
      }); 
  }
);

//The following should open up a new instance of VS Code & load the two files we just created. Needs to be promised though. This should be dependent on everything above.    
cmd.get(`
      code -n ../
      code -r __tests__/lib/${assignmentName}.js
      code -r -g lib/${assignmentName}.js:4
      git checkout -b ${assignmentName}
  `); 

//We should do one more to change the package.json. Need to figure out how to load template file with template literal. Same with Readme file.

//We can also add the desktop starter exec (conditional to check if it's there). Consider using npm fileicon to change icon.
//

//Next we should look into the Tesseract OCR from npm. Will probably work, but we need to write perfectly.

// From here, maybe consider a separate js file to submit everything. Using similar tools. Problem will be travis, so need to figure out that authentication thing.


