
const math = require("mathjs");
var abs = Math.abs;

const quadaticSpline = (x, X, Y) => {
    if(X.length===1){
        return Y[0]
    }else if(X.length===0){
        return 0
    }
    var n = (X.length - 2) * 2 + 2 + (X.length - 2) 
    var N = n - X.length + 2
    var A = Array.from(Array(n), _ => Array(n).fill(0));
    var ans = Array(n).fill(1);
    var B = Array(n).fill(0)
    var temp = 0
    
    //gauss
    function array_fill(i, n, v) {
        var a = [];
        for (; i < n; i++) {
          a.push(v);
        }
        return a;
      }
      function gauss(A, x) {
        var i, k, j;
      
        // Just make a single matrix
        for (i = 0; i < A.length; i++) {
          A[i].push(x[i]);
        }
        var n = A.length;
      
        for (i = 0; i < n; i++) {
          // Search for maximum in this column
          var maxEl = abs(A[i][i]),
            maxRow = i;
          for (k = i + 1; k < n; k++) {
            if (abs(A[k][i]) > maxEl) {
              maxEl = abs(A[k][i]);
              maxRow = k;
            }
          }
      
          // Swap maximum row with current row (column by column)
          for (k = i; k < n + 1; k++) {
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
          }
      
          // Make all rows below this one 0 in current column
          for (k = i + 1; k < n; k++) {
            var c = -A[k][i] / A[i][i];
            for (j = i; j < n + 1; j++) {
              if (i === j) {
                A[k][j] = 0;
              } else {
                A[k][j] += c * A[i][j];
              }
            }
          }
        }
      
        // Solve equation Ax=b for an upper triangular matrix A
        x = array_fill(0, n, 0);
        for (i = n - 1; i > -1; i--) {
          x[i] = A[i][n] / A[i][i];
          for (k = i - 1; k > -1; k--) {
            A[k][n] -= A[k][i] * x[i];
          }
        }
      
        return x;
      }


    //quardatic
    for (var i = 0; i < N; i++) {
        if (i % 2 == 1) {
            temp++
        }
       B[i]=Y[temp]
       
    }
    var check;
    for (var k = 0; k < X.length; k++) {
        for (var i = 0; i < n; i++) {
            check = 1;
            for (var j = 0; j < n; j++) {
                if (i < ((k+1) * 2 ) && j < ((k) * 3)+2 && i >= (k ) * 2  && j >= (k*3)-1) {
                    if (j % 3 == 2) {
                        A[i][j] = (i % 2 == 0) ? X[k] * X[k] : X[k+1] * X[k+1]
                    } else if (j % 3 == 0) {
                        A[i][j] = (i % 2 == 0) ?   X[k]:X[k+1]
                    } else {
                        A[i][j] = 1
                    }
                } else if ((N + k ) === i && j < (k * 3) + 5 && j >= (k*3)-1) {
                    if (j % 3 == 2) {
                        A[i][j] = (check < 3) ? 2 * X[k + 1] : -2 * X[k + 1]
                    } else if (j % 3 == 0) {
                        A[i][j] = (check < 3) ? 1 : -1
                    } else  {
                        A[i][j] = 0
                    }
                    check++
                }
            }
        }
    }

console.table(A);
console.table(B);
B = gauss(A,B)
console.table(B);

const f = "a*(x^2)+(b*x)+c"
for(var i=0;i<X.length-1;i++){
    if(x<=X[0]){
       //console.log(math.parse(f).evaluate({x:x,a:0,b:B[0],c:B[1]}));
       return (math.parse(f).evaluate({x:x,a:0,b:B[0],c:B[1]})).toFixed(6)
    }else if(x >= X[X.length-1]){
        //console.log(math.parse(f).evaluate({x:x,a:B[B.length-3],b:B[B.length-2],c:B[B.length-1]}));
        return (math.parse(f).evaluate({x:x,a:B[B.length-3],b:B[B.length-2],c:B[B.length-1]})).toFixed(6)
    }else if(x < X[i+1] && x>=X[i]){
        //console.log(math.parse(f).evaluate({x:x,a:(i===0)?0:B[i*3-1],b:B[i*3],c:B[i*3+1]}));
        return (math.parse(f).evaluate({x:x,a:(i===0)?0:B[i*3-1],b:B[i*3],c:B[i*3+1]})).toFixed(6)
    }
}
}
export default quadaticSpline
