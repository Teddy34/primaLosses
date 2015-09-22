var apiUrl = "https://zkillboard.com/api/corporation/98161032/losses/pastSeconds/604800";
var _ = require('lodash');
var fetch = require('node-fetch');

var example = JSON.parse('[{"killID":49141947,"solarSystemID":30004985,"killTime":"2015-09-19 18:03:00","moonID":0,"victim":{"shipTypeID":593,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":2456},"attackers":[{"characterID":1113916482,"characterName":"AgentFiftySix","corporationID":98303242,"corporationName":"Rolled Out","allianceID":0,"allianceName":"","factionID":0,"factionName":"","securityStatus":1.9,"damageDone":2456,"finalBlow":1,"weaponTypeID":2889,"shipTypeID":34562}],"items":[{"typeID":33890,"flag":93,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4405,"flag":13,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":12,"qtyDropped":0,"qtyDestroyed":8,"singleton":0},{"typeID":5439,"flag":19,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21898,"flag":29,"qtyDropped":99,"qtyDestroyed":0,"singleton":0},{"typeID":2466,"flag":87,"qtyDropped":0,"qtyDestroyed":3,"singleton":0},{"typeID":33890,"flag":94,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4475,"flag":28,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2048,"flag":11,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21924,"flag":5,"qtyDropped":500,"qtyDestroyed":0,"singleton":0},{"typeID":33076,"flag":12,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":4025,"flag":21,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21898,"flag":27,"qtyDropped":0,"qtyDestroyed":99,"singleton":0},{"typeID":21906,"flag":5,"qtyDropped":0,"qtyDestroyed":500,"singleton":0},{"typeID":33890,"flag":92,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":2889,"flag":27,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":5973,"flag":20,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":5,"qtyDropped":0,"qtyDestroyed":17,"singleton":0},{"typeID":2889,"flag":29,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21898,"flag":5,"qtyDropped":260,"qtyDestroyed":0,"singleton":0}],"zkb":{"hash":"73a8ad5131ac809b9ad2e46423f384809817d67e","totalValue":8949886.89,"points":7}},{"killID":49137889,"solarSystemID":30002806,"killTime":"2015-09-19 14:08:00","moonID":0,"victim":{"shipTypeID":670,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":461},"attackers":[{"characterID":229269539,"characterName":"seka wolf","corporationID":98284796,"corporationName":"Vipres\'","allianceID":0,"allianceName":"","factionID":0,"factionName":"","securityStatus":-2.7,"damageDone":461,"finalBlow":1,"weaponTypeID":14206,"shipTypeID":29988}],"items":[],"zkb":{"hash":"39134fe5fe2329bdde5136de3ecb0513c3673eac","totalValue":10000,"points":1}},{"killID":49137865,"solarSystemID":30002806,"killTime":"2015-09-19 14:06:00","moonID":0,"victim":{"shipTypeID":593,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":3841},"attackers":[{"characterID":1871388872,"characterName":"Voidest","corporationID":98107258,"corporationName":"Caldari Colonial Defense Ministry","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":-5.2,"damageDone":3207,"finalBlow":1,"weaponTypeID":3074,"shipTypeID":16238},{"characterID":1143886999,"characterName":"xxFantasyxx","corporationID":98107258,"corporationName":"Caldari Colonial Defense Ministry","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":-6.2,"damageDone":527,"finalBlow":0,"weaponTypeID":603,"shipTypeID":603},{"characterID":0,"characterName":"","corporationID":0,"corporationName":"","allianceID":0,"allianceName":"","factionID":500001,"factionName":"Caldari State","securityStatus":0,"damageDone":107,"finalBlow":0,"weaponTypeID":0,"shipTypeID":32964}],"items":[{"typeID":21898,"flag":5,"qtyDropped":0,"qtyDestroyed":260,"singleton":0},{"typeID":4405,"flag":13,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":33076,"flag":12,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":5439,"flag":19,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21898,"flag":29,"qtyDropped":120,"qtyDestroyed":0,"singleton":0},{"typeID":33890,"flag":94,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":33890,"flag":93,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4475,"flag":28,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":2048,"flag":11,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21924,"flag":5,"qtyDropped":0,"qtyDestroyed":500,"singleton":0},{"typeID":2889,"flag":27,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4025,"flag":21,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21898,"flag":27,"qtyDropped":120,"qtyDestroyed":0,"singleton":0},{"typeID":21906,"flag":5,"qtyDropped":500,"qtyDestroyed":0,"singleton":0},{"typeID":33890,"flag":92,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":5,"qtyDropped":0,"qtyDestroyed":17,"singleton":0},{"typeID":5973,"flag":20,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2488,"flag":87,"qtyDropped":3,"qtyDestroyed":0,"singleton":0},{"typeID":2889,"flag":29,"qtyDropped":1,"qtyDestroyed":0,"singleton":0}],"zkb":{"hash":"f0db36e35544c0021c18304dd386be22639dee42","totalValue":8752005.24,"points":7}},{"killID":49124837,"solarSystemID":30004979,"killTime":"2015-09-18 20:30:00","moonID":0,"victim":{"shipTypeID":593,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":3055},"attackers":[{"characterID":90098844,"characterName":"skiffighter","corporationID":98086136,"corporationName":"Your Bunny Wrote.","allianceID":99001333,"allianceName":"R.E.V.O.L.U.T.I.O.N","factionID":0,"factionName":"","securityStatus":-4.3,"damageDone":2162,"finalBlow":1,"weaponTypeID":2817,"shipTypeID":598},{"characterID":641623284,"characterName":"PhaNtom Craft","corporationID":1120519592,"corporationName":"Souls Takers","allianceID":99001333,"allianceName":"R.E.V.O.L.U.T.I.O.N","factionID":0,"factionName":"","securityStatus":-9.8,"damageDone":798,"finalBlow":0,"weaponTypeID":2488,"shipTypeID":17926},{"characterID":93590804,"characterName":"tahoma sakura","corporationID":625591217,"corporationName":"Sovetsky Soyuz","allianceID":99001333,"allianceName":"R.E.V.O.L.U.T.I.O.N","factionID":0,"factionName":"","securityStatus":-10,"damageDone":95,"finalBlow":0,"weaponTypeID":3162,"shipTypeID":593}],"items":[{"typeID":33890,"flag":93,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":5973,"flag":20,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":33076,"flag":12,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":4405,"flag":13,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":5443,"flag":19,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":33890,"flag":94,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4475,"flag":28,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2048,"flag":11,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21924,"flag":5,"qtyDropped":0,"qtyDestroyed":500,"singleton":0},{"typeID":2889,"flag":27,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":21906,"flag":29,"qtyDropped":101,"qtyDestroyed":0,"singleton":0},{"typeID":4025,"flag":21,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21906,"flag":5,"qtyDropped":0,"qtyDestroyed":158,"singleton":0},{"typeID":33890,"flag":92,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":5,"qtyDropped":0,"qtyDestroyed":26,"singleton":0},{"typeID":28668,"flag":12,"qtyDropped":0,"qtyDestroyed":4,"singleton":0},{"typeID":2488,"flag":87,"qtyDropped":3,"qtyDestroyed":0,"singleton":0},{"typeID":2889,"flag":29,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21906,"flag":27,"qtyDropped":0,"qtyDestroyed":101,"singleton":0},{"typeID":21898,"flag":5,"qtyDropped":660,"qtyDestroyed":0,"singleton":0}],"zkb":{"hash":"54d4a7be8841eb78e7e597abe9a47175f8c231e4","totalValue":11957610.91,"points":6}},{"killID":49103995,"solarSystemID":30002807,"killTime":"2015-09-17 15:45:00","moonID":0,"victim":{"shipTypeID":593,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":2613},"attackers":[{"characterID":784014573,"characterName":"Tavit","corporationID":98107258,"corporationName":"Caldari Colonial Defense Ministry","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":-0.9,"damageDone":2613,"finalBlow":1,"weaponTypeID":2488,"shipTypeID":626}],"items":[{"typeID":5973,"flag":20,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":33890,"flag":93,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4405,"flag":13,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21898,"flag":29,"qtyDropped":0,"qtyDestroyed":120,"singleton":0},{"typeID":5443,"flag":19,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":33890,"flag":94,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":4475,"flag":28,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2889,"flag":29,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2048,"flag":11,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21924,"flag":5,"qtyDropped":500,"qtyDestroyed":0,"singleton":0},{"typeID":33076,"flag":12,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":4025,"flag":21,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":21898,"flag":27,"qtyDropped":120,"qtyDestroyed":0,"singleton":0},{"typeID":21906,"flag":5,"qtyDropped":500,"qtyDestroyed":0,"singleton":0},{"typeID":33890,"flag":92,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":2889,"flag":27,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":12,"qtyDropped":7,"qtyDestroyed":0,"singleton":0},{"typeID":2488,"flag":87,"qtyDropped":0,"qtyDestroyed":6,"singleton":0},{"typeID":2488,"flag":87,"qtyDropped":2,"qtyDestroyed":0,"singleton":0},{"typeID":28668,"flag":5,"qtyDropped":25,"qtyDestroyed":0,"singleton":0},{"typeID":21898,"flag":5,"qtyDropped":0,"qtyDestroyed":260,"singleton":0}],"zkb":{"hash":"e4f606be97dec0092cf3d40a957318ae6195d9e6","totalValue":13379891.9,"points":24}},{"killID":49093653,"solarSystemID":30002806,"killTime":"2015-09-16 20:52:00","moonID":0,"victim":{"shipTypeID":593,"characterID":94132853,"characterName":"Tethys Luxor","corporationID":98161032,"corporationName":"Prima Gallicus","allianceID":0,"allianceName":"","factionID":500004,"factionName":"Gallente Federation","damageTaken":2263},"attackers":[{"characterID":1861922931,"characterName":"Safoi","corporationID":98252326,"corporationName":"Crazy Bird Inc.","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":3.4,"damageDone":1164,"finalBlow":1,"weaponTypeID":3178,"shipTypeID":11381},{"characterID":92295819,"characterName":"Harlon Cordarii","corporationID":98252326,"corporationName":"Crazy Bird Inc.","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":1.8,"damageDone":717,"finalBlow":0,"weaponTypeID":16236,"shipTypeID":16236},{"characterID":0,"characterName":"","corporationID":1000127,"corporationName":"Guristas","allianceID":0,"allianceName":"","factionID":0,"factionName":"","securityStatus":0,"damageDone":340,"finalBlow":0,"weaponTypeID":0,"shipTypeID":11036},{"characterID":91619721,"characterName":"Uiri Tawate","corporationID":98252326,"corporationName":"Crazy Bird Inc.","allianceID":99001742,"allianceName":"Templis CALSF","factionID":500001,"factionName":"Caldari State","securityStatus":3.5,"damageDone":42,"finalBlow":0,"weaponTypeID":587,"shipTypeID":587}],"items":[{"typeID":3178,"flag":28,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":5439,"flag":20,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":2205,"flag":87,"qtyDropped":3,"qtyDestroyed":0,"singleton":0},{"typeID":33076,"flag":11,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":5973,"flag":19,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":31526,"flag":93,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":23009,"flag":27,"qtyDropped":0,"qtyDestroyed":63,"singleton":0},{"typeID":31153,"flag":92,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":11,"qtyDropped":7,"qtyDestroyed":0,"singleton":0},{"typeID":23009,"flag":5,"qtyDropped":2468,"qtyDestroyed":0,"singleton":0},{"typeID":4025,"flag":21,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":3178,"flag":27,"qtyDropped":1,"qtyDestroyed":0,"singleton":0},{"typeID":2048,"flag":13,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":28668,"flag":5,"qtyDropped":17,"qtyDestroyed":0,"singleton":0},{"typeID":23009,"flag":28,"qtyDropped":0,"qtyDestroyed":63,"singleton":0},{"typeID":10190,"flag":12,"qtyDropped":0,"qtyDestroyed":1,"singleton":0},{"typeID":26929,"flag":94,"qtyDropped":0,"qtyDestroyed":1,"singleton":0}],"zkb":{"hash":"bbd5313783e26e5c9c0b6763fbd27bcedb43bb6c","totalValue":7143306.07,"points":4}}]');
var THROTTLE_DURATION = 5 * 60 * 1000;
// util:

function logger(log) {
  console.log(log);
  return log;
}

// getJSON
function getJSON(response) {
  return response.json();
}

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

var getLossesForIndustry = function(losses) {
  return _.map(_.reduce(losses, reduceLoss, {}), convertToObject);
};

// use case
// console.log(getLossesForIndustry(example));

// function to get losses

var getLosses = function() {
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

var throttledGetLosses = _.throttle(getLosses, THROTTLE_DURATION);

//throttledGetLosses().then(getLossesForIndustry).then(logger);

// init the webserver
app = require('express')();
app.use('/', function(req,res) {
  throttledGetLosses()
  .then(getLossesForIndustry)
  .then(function(response) {
    res.send(response);
  });
});

app.listen(7777);

// START THE SERVER
// =============================================================================
/*exports.startServer = function(port, path, callback) {
  app.listen(port);
  console.log('Magic happens on port ' + port);
  if (callback) {
    callback();
  }
};*/