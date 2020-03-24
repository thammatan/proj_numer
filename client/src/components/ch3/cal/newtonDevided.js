const newtonDevided = (x, X, Y  ,...p) => {
    var memo = Array.from(Array(p.length), _ => Array(p.length).fill(0));
    var newX = []
    for (var i = 0; i < p.length; i++){
      memo[i][0] = JSON.parse(JSON.stringify(Y[p[i] - 1]));
      newX.push(X[p[i]-1])
    }
    var k = 0;
    for (var i = 1; i < p.length; i++) {
      for (var j = 0; j < p.length - i; j++) {
        memo[j][i] =
          (memo[j + 1][i - 1] - memo[j][i - 1]) / (newX[j + 1 + k] - newX[j]);
      }
      k++;
    }
    //console.log(memo);
    var temp = [1];
    var y = 0;
    for (var i = 0; i < p.length; i++) {
        if (i < p.length - 1) temp.push(temp[i] * (x - newX[i]));
        //console.log(temp[i] +' * '+ memo[0][i]);
        y += temp[i] * memo[0][i];
    }
    console.table(memo);
    console.log(y.toFixed(6));
    return y.toFixed(6);
};
export default newtonDevided