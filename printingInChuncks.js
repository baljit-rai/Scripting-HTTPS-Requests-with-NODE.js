
function getAndPrintHTMLChuncks() {

var https = require('https');

var requestOptions =  {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

  https.get(requestOptions,function(response) {
    // function callback(response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log("Chunk length: ", data.length + '\n');
      console.log(data.toString());
    })

    // response.on('end', function() {
    //   console.log('Response stream complete')
    // });
  });
//https.request(requestOptions).end();
};

getAndPrintHTMLChuncks();