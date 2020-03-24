const lu = (A,B) =>{
      var X = new Array(A.length).fill(0);
      var L = Array.from(Array(A.length), _ => Array(A.length).fill(0));
      var U = Array.from(Array(A.length), _ => Array(A.length).fill(0));
      for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
          if (j > i) {
            U[i][j] = A[i][j];
          } else {
            if (i === j) U[i][j] = 1;
            L[i][j] = A[i][j];
          }
        }
      }
      for (var k = 0; k < A.length; k++) {
        for (var i = 0; i < A.length; i++) {
          for (var j = 0; j < A.length; j++) {
            if (i > k) {
              if (j !== k) {
                U[k][i] -= L[k][j] * U[j][i];
              }
            } else {
              if (j !== i) {
                L[k][i] -= L[k][j] * U[j][i];
              }
            }
          }
          if (k >= i) {
            L[k][i] /= U[i][i];
          } else {
            U[k][i] /= L[k][k];
          }
        }
      }
      for (var i = 0; i < A.length; i++) {
        X[i] = (B[i] / L[i][i]).toFixed(6);
        for (var j = i; j < A.length; j++) {
          B[j] -= L[j][i] * X[i];
        }
      }
      for (var i = A.length - 1; i >= 0; i--) {
        B[i] = (X[i] / U[i][i]).toFixed(6);
        for (var j = i - 1; j >= 0; j--) {
          X[j] -= U[j][i] * B[i];
        }
      }
     return B
}
export default lu