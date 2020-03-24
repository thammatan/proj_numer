
const gaussEliminate = (A,B) => {
    var X = [];
    var temp
    for (var k = 0; k < A.length - 1 ; k++) {
        for (var i = k; i < A.length - 1; i++) {
          temp = A[i + 1][k];
          for (var j = k; j < A.length; j++) {
            A[i + 1][j] = (A[i + 1][j] - (A[k][j] / A[k][k]) * temp)
          }
          B[i + 1] = (B[i + 1] - (B[k] / A[k][k]) * temp)
        }
      }
      for(var i=A.length-1;i>=0;i--){
          X[i] = (B[i] / A[i][i]).toFixed(6);
          for (j = i-1; j >= 0; j--) {
            B[j] -= A[j][i]*X[i] 
          }
      }
    return X
  }

  export default gaussEliminate
