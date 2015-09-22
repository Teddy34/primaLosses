var apiUrl = "https://zkillboard.com/api/corporation/98161032/losses/pastSeconds/604800";
var _ = require('lodash');
var fetch = require('node-fetch');

var THROTTLE_DURATION = 5 * 60 * 1000;

// functions to analyse losses

var reduceLoss = function(memo, loss) {
  return _(loss.items).reduce(reduceLostItem,memo);
};

var reduceLostItem = function (memo, value) {
  memo[value.typeID] = (_.isNumber(memo[value.typeID])? memo[value.typeID] : 0) + value.qtyDropped + value.qtyDestroyed;
  return memo;
};

var convertToObject = function(value, key) {
  return { typeID: key, quantity: value};
};

var computeLossesForIndustry = function(losses) {
  return _.map(_.reduce(losses, reduceLoss, {}), convertToObject);
};

// function to get losses

var fetchLosses = function() {
  var options = {
    method: 'get',
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
  };
  return fetch(apiUrl,options).
    then(getJSON);
};

var getLostStuff = _.throttle(function() {
  return Promise.resolve()
  .then(fetchLosses)
  .then(computeLossesForIndustry);
}, THROTTLE_DURATION);

//throttledGetLosses().then(getLossesForIndustry).then(logger);

// init the webserver
app = require('express')();
app.use('/', function(req,res) {
  getLostStuff()
  .then(function(response) {
    res.send(response);
  });
});

// START THE SERVER
// =============================================================================
app.listen(process.env.PORT || 8080);


// util:

function logger(log) {
  console.log(log);
  return log;
}

// getJSON
function getJSON(response) {
  return response.json();
}