const axios = require('axios');
const express = require('express')
const cheerio = require('cheerio');

const app = express()
const port = 3055

function isEmpty(str) {
  return (!str || str.length === 0 );
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  var args = process.argv.slice(2);
  axios.get('https://codequiz.azurewebsites.net', {
    headers: {
      Cookie: "hasCookie=true"
  }
  })
  .then(function (response) {
    const $ = cheerio.load(response.data, { normalizeWhitespace: false,
                                            xmlMode: true,
                                            decodeEntities: true
                                          });
    const cells = $("table tr");
    const len = cells.length;
    switch(String(args)){
      case 'B-INCOMESSF':{
        const cell = cells[1];
        for (let j = 0; j < 5; j++) {
          cellNode = $(cell.children[j]);

          if(!isEmpty(cellNode.text().trim())){
            console.log(j , " : " ,  cellNode.text() );
          }
        }
        break;
      }

      case 'BM70SSF':{
        const cell = cells[2];
        for (let j = 0; j < 6; j++) {
          cellNode = $(cell.children[j]);

          if(!isEmpty(cellNode.text().trim())){
            console.log(j , " : " ,  cellNode.text() );
          }
        }
        break;
      }

      case 'BEQSSF':{
        const cell = cells[3];
        for (let j = 0; j < 6; j++) {
          cellNode = $(cell.children[j]);

          if(!isEmpty(cellNode.text().trim())){
            console.log(j , " : " ,  cellNode.text() );
          }
        }
        break;
      }

      case 'B-FUTURESSF':{
        const cell = cells[4];
        for (let j = 0; j < 6; j++) {
          cellNode = $(cell.children[j]);

          if(!isEmpty(cellNode.text().trim())){
            console.log(j , " : " ,  cellNode.text() );
          }
        }
        break;
      }

      default:{
        console.log("Other case!")
        break;
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  }); 
})