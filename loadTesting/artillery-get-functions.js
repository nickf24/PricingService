module.exports = {
  generateRandomData
};

function generateRandomData(userContext, events, done) {
  var areacode = Math.floor(Math.random() * 201);
  userContext.vars.areacode = `/requests/${areacode}`;
  return done();
}