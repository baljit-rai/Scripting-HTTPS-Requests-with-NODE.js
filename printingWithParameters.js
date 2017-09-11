function getAndPrintHTML (options) {

  var https = require('https');

  var buffStrings = ''

  https.get(options,function(response) {
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

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
