const math = require("mathjs");
const conjugateGradient = (A, B) => {
    const cross = (A, B) => {
        var temp = new Array(B.length).fill(0);
        for (var i = 0; i < A.length; i++) {
            for (var j = 0; j < A.length; j++) {
                temp[i] += A[j][i] * B[j];
            }
        }
        return temp;
    }
    const eps = R => math.sqrt(math.sum(math.dotPow(R, 2)))
    const findLamda = (A, R, D) => -(math.dot(D, R) / math.dot(cross(A, D), D));
    const findAlpha = (A, R, D) => math.dot(cross(A, R), D) / math.dot(cross(A, D), D);
    var X = new Array(B.length).fill(0);
    var e = 0.000001, iteration = 0, R, D
    while (true) {
        R = math.subtract(cross(A, X), B);
        if (eps(R) < e) break;
        D = iteration <= 0 ? math.multiply(R, -1) : math.add(math.multiply(R, -1), math.multiply(D, findAlpha(A, R, D)));
        X = math.add(X, math.multiply(D, findLamda(A, R, D)));
        iteration++;
    }
    for (var i = 0; i < A.length; i++) X[i] = X[i].toFixed(6);
    return X
}
export default conjugateGradient