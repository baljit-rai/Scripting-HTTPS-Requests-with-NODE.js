function getAndPrintHTML () {

var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffStrings = ''

  https.get(requestOptions,function(response) {
    // function callback(response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log("Chunk length: ", data.length + '\n');
      buffStrings += (data.toString());

    });

    response.on('end', function() {
      console.log(buffStrings);
      console.log('Response stream complete');
    });
  });
//https.request(requestOptions).end();

}

getAndPrintHTML();