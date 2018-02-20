const cassandra = require('cassandra-driver');

// make cassandra an env variable, pass IP address that cassandra is on
// when pull down docker image, insteado f doing docker-compose
// on cmd line, docker run -e CASSANDRAIP=ipasstringgoeshere --net=host --name nameOfContainer **name of image**
// net=host, 
// on AWS security group, have to open ports for CASSANDRA, 9042 there's a few to be opened
// expose net host on server container 
// subnet becomes host, all ports exposed in ec2 are exposed in docker container
const client = new cassandra.Client({ contactPoints: [process.env.CASSANDRAIP] })
// const client = new cassandra.Client({ contactPoints: [PROCESS.env.CASSANDRAIP' })

client.connect(function(err) {
  if (err) {
  	console.log(err)
  }
});


let getRequestsByAreaCode = function(areacode) {
  let query = `SELECT * FROM service.pricing WHERE areacode = ${areacode} LIMIT 100`;
  return client.execute(query).then((result) => result);
}

let getRequestsByHour = function(areacode, hourstart, hourend) {
  let query = `SELECT * FROM service.pricing WHERE areacode = ${areacode} AND date_time >= ${hourstart} AND date_time < ${hourend} LIMIT 10000`;
  return client.execute(query).then((result) => result);
}

let getAverageSuccessByAreaCode = function(areacode) {
  let query = `SELECT sum(success) FROM service.pricing WHERE areacode = ${areacode}`;
  return client.execute(query).then((result) => {
    // console.log('here', result)
    // console.log(result)
    var sumCount = result.rows[0]['system.sum(success)'];
    let query2 = `SELECT COUNT(*) from service.pricing WHERE areacode = ${areacode}`;
    return client.execute(query2).then((result) => {
      // console.log('sumcount + result', sumCount)
      
      result = result.rows[0]['count']
      // console.log(result);
      result = result.toString();
      // console.log(sumCount / Number(result));
      return sumCount / Number(result);
    })
  });
}

let getAverageMultiplierByAreaCode = function(areacode) {
  let query = `SELECT sum(multiplier) FROM service.pricing WHERE areacode = ${areacode}`;
  return client.execute(query).then((result) => {
    // console.log(result)
    var sumCount = result.rows[0]['system.sum(multiplier)'].toString();
    // console.log(sumCount);
    let query2 = `SELECT COUNT(*) from service.pricing WHERE areacode = ${areacode}`;
    return client.execute(query2).then((result) => {
      // console.log('sumcount + result', sumCount)
      
      result = result.rows[0]['count']
      // console.log(result);
      result = result.toString();
      // console.log(sumCount / Number(result));
      return sumCount / Number(result);
    })
  });
}

let insertRequest = function(params) {
  // console.log('PARAMS', params);
  // console.log(params.areacode)
  let query = `INSERT INTO service.pricing (areacode, date_time, multiplier, success, uid) VALUES (${params.areacode}, '${params.date_time}', ${params.multiplier}, ${params.success}, ${params.uid})`
  // console.log('post query is', query);
  // let query = `INSERT INTO nick.pricing2 (areacode, date_time, multiplier, success, uid) VALUES (${params.areacode}, '${params.date_time}', ${params.multiplier}, '${params.success}', ${params.uid})`

  return client.execute(query).then((result) => result);
}

module.exports = {

	getRequestsByAreaCode,
  getAverageSuccessByAreaCode,
  getAverageMultiplierByAreaCode,
  insertRequest

}
