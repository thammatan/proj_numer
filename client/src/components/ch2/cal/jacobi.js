const jacobi = (A,B) => {
    const eps = (a,b,e) =>{
        var temp 
        var bool = new Array(a.length).fill(false);
        for (i=0;i<a.length;i++){
          bool[i] = (Math.abs((a[i]-b[i])/a[i]) > e )? true : false
        }
        for(i=0;i<a.length;i++){
          if(bool[i]==true) return true
        }
        return false
      } 
      var X = new Array(B.length).fill(0);
      var Y = new Array(B.length).fill(0)
      var ex = true
      const e = 0.000001
      while (ex ) {
         X = JSON.parse(JSON.stringify(Y));
         Y = JSON.parse(JSON.stringify(B));
        for (var i = 0; i < B.length; i++) {
          for (var j = 0; j < B.length; j++) {
            if ( j !== i) {
              Y[i] -= A[i][j] * X[j];
            }
          }
          Y[i] /= A[i][i];
          Y[i] = Y[i].toFixed(6)
        }
        ex = eps(Y,X,e)
      }
      return Y
}
export default jacobi