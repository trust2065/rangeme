var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/getData", (req, res, next) => {
  const request = require("request");
  const url =
    "https://www.flickr.com/services/feeds/photos_public.gne?id=181830538@N07&tags=&tagmode=all&format=json";
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      console.log("end");
      res.json(body);
    }
  });

  // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(process.env.PORT || 3000, () =>
  console.log(`Proxy server listening...`)
);
