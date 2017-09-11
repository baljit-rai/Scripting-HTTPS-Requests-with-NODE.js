var getHTML= require('../makeModule');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, lowerCase);