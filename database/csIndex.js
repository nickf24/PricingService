const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'] })

client.connect(function(err) {
  if (err) {
  	console.log(err)
  }
});


let getRequestsByAreaCode = function(areacode) {
  let query = `SELECT * FROM nick.pricing2 WHERE areacode = ${areacode} LIMIT 10000`;
  return client.execute(query).then((result) => result);
}

let insertRequest = function(params) {
  let query = `INSERT INTO nick.pricing2 (areacode, date_time, multiplier, success, uid) VALUES (${params.areacode}, '${params.date_time}', ${params.multiplier}, '${params.success}', ${params.uid})`
  // console.log('post query is', query);
  return client.execute(query).then((result) => result);
}

module.exports = {

	getRequestsByAreaCode,
  insertRequest

}
