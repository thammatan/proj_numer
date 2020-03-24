const math = require("mathjs");

const onePoint = (fn, xold) => {
  console.log(fn);
  var xnew ,e = 0.000001, ex = 1, i = 1
  const tempData = [];
  const Fn = (fn, value) => math.parse(fn).evaluate({ x: value });
  const eps = (a, b) => Math.abs((a - b) / a)
  while (ex > e) {
    xnew = Fn(fn, xold)
    ex = eps(xnew, xold)
    xold = xnew
    tempData.push({
      iteration: i,
      x: xnew.toFixed(6),
      y: Fn(fn, xnew).toFixed(6),
      e: ex.toFixed(6)
    })
    i++
  }
  return {
    fn: fn,
    answer: { x: xnew, y: Fn(fn, xnew) },
    iteration: tempData
  }
}

export default onePoint
