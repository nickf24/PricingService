const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/thesis');

let Schema = mongoose.Schema;

let surgeSchema = new Schema({
  areacode: Number,
  multiplier: Number,
  date_time: Date
});

let surgeList = mongoose.model('surgeList', surgeSchema);

let save = (params) => {
  var newSurgeEntry = new surgeList({ areacode: params.areacode, multiplier: params.multiplier, date_time: params.date_time });
  newSurgeEntry.save(function(err) {
  	if (err) {
  	  console.log(err);
  	}
  });
}

let updateSurge = (areacode, arr) => {
  
}

let getSurgeByArea = (areacode) => {
  // console.log('here', areacode)
  return surgeList.find({"areacode": areacode}).then((result) => {
  	console.log(result)
  	return result;
  });
  // query.select('multiplier');
  // query.exec(callback)
}

module.exports = {
  getSurgeByArea,
  save
}