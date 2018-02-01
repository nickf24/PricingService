module.exports.generator = function() {
  var output = [];
  var bias = Math.random();
  var areaCode = Math.floor(bias * 201);
  if (areaCode === 0) {
    areaCode = 1;
  }
  if (bias > 0.8) {
    var multiplier = Number((Math.random() * 10).toFixed(1)); 
  } else if (bias > 0.6) {
    var multiplier = Number((Math.random() * 5).toFixed(1));
  } else {
    var multiplier = 1;
  }
  output.push(areaCode, multiplier)
  return output;
}
