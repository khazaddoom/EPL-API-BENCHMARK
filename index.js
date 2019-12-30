var apiBenchmark = require('api-benchmark');
var fs = require('fs');
 
var services = {
 "nodeJS": "https://api.eplworld.com/V3/"
};

///

var routes = {
    "MatchList": "/tournament/matchlist?teamId=9q0arba2kbnywth8bkxlhgmdr&calendarId=cpx9us94rxtkp57lqq9tpjyi2&lang=en",
    "NewsList": "/news/list?limit=20&type=1&lang=en"
  };
   
  var options = { debug: true, minSamples: 100, maxTime: 5 };
   
  apiBenchmark.compare(services, routes, options, function(err, results){
    apiBenchmark.getHtml(results, function(error, html) {
        // console.log(html);
        // now save it yourself to a file and enjoy
        fs.writeFile('index.html', html, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });

      });
  });