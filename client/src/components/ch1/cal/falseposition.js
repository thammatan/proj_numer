const { parse } = require("mathjs")

const falsePosition = (fn,xl,xr) =>{
  const Fx = (fn, value) => parse(fn).evaluate({ x: value });
  const FindM = (xl, xr ,fn) => (xl * Fx(fn,xr) - xr * Fx(fn,xl)) / (Fx(fn,xr) - Fx(fn,xl));
  const eps =  (a, b) => Math.abs((a - b) / a)
  var temp = 0, e = 0.000001, ex = 1.0,i=0
  const tempData = [];
  var xm = FindM(xl, xr, fn)
  var fxl = Fx(xl, fn)
  var fxr = Fx(xr, fn)
  var fxm = Fx(xm, fn)
  var ex = eps(xm, temp)
  tempData.push({
      iteration: i,
      x: xm.toFixed(6),
      fn: fxm.toFixed(6),
      y: fxm.toFixed(6),
      e: ex.toFixed(6)
  });
  temp = xm
  while (ex > e) {
      if (fxl * fxm > 0) {
          xl = xm
      } else {
          xr = xm
      }
      xm = FindM(xl, xr, fn)
      fxl = Fx(xl, fn)
      fxr = Fx(xr, fn)
      fxm = Fx(xm, fn)
      ex = eps(xm, temp)
      i++
      tempData.push({
          iteration: i,
          x: xm.toFixed(6),
          y: fxm.toFixed(6),
          e: ex.toFixed(6)
      });
      temp = xm
  }
  return {
      fn: fn,
      answer: { x: xm, y: Fx(fn, xm) },
      iteration: tempData
  }
}

export default falsePosition