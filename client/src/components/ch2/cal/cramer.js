const math = require("mathjs");
const cramer = (A,B) => {
    var X = [];
    var detA = math.det(A);
    for (var i = 0; i < A.length; i++) {
      var temp = JSON.parse(JSON.stringify(A));
      for (var j = 0; j < A.length; j++) {
        temp[j][i] = B[j];
      }
      X.push((math.det(temp) / detA).toFixed(6));
    }
    return X
  }

  export default cramer
