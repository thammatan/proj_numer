const gaussSeidel = (A,B) =>{
    const eps = (a, b, e) => {
        var bool = new Array(a.length).fill(false);
        for (var i = 0; i < a.length; i++) {
          bool[i] = Math.abs((a[i] - b[i]) / a[i]) > e ? true : false;
          console.log(
            "e" + (i + 1) + " " + Math.abs((a[i] - b[i]) / a[i]).toFixed(6)
          );
        }
        for (var i = 0; i < a.length; i++) {
          if (bool[i] == true) {
            console.log('true');
            return true;
          }
        }
        console.log('false');
        return false;
      };
      var temp;
      var X = new Array(B.length).fill(0);
      var Y = new Array(B.length).fill(0);
      var ex = true;
      const e = 0.000001;
      while (ex) {
          temp = JSON.parse(JSON.stringify(X));
        Y = JSON.parse(JSON.stringify(B));
        for (var i = 0; i < B.length; i++) {
          for (var j = 0; j < B.length; j++) {
            if (j !== i) {
              Y[i] -= A[i][j] * X[j];
            }
          }
          Y[i] /= A[i][i];
          Y[i] = Y[i].toFixed(6);
          X[i] = JSON.parse(JSON.stringify(Y[i]));
        }
        ex = eps(X, temp, e);
      }  
      return Y
}
export default gaussSeidel