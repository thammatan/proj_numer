const { parse } = require("mathjs")

const bisection = (fn, xl, xr) => {
  const Fn = (fn, value) => parse(fn).evaluate({ x: value });
  const FindM = (l, r) => (l + r) / 2;
  const eps = (a, b) => Math.abs((a - b) / a);
  const tempData = [];
  var e = 0.000001,
      ex = 1.0,
      temp = 0,
      i = 0;
  var xm = FindM(xl, xr);
  var fxl = Fn(fn, xl);
  var fxr = Fn(fn, xr);
  var fxm = Fn(fn, xm);
  tempData.push({
      iteration: i,
      x: xm.toFixed(6),
      y: fxm.toFixed(6),
      e: ex.toFixed(6)
  });
  temp = xm;
  while (ex > e) {
      if (fxm * fxl > 0) {
          xl = xm;
      } else {
          xr = xm;
      }
      xm = FindM(xl, xr);
      fxl = Fn(fn, xl);
      fxr = Fn(fn, xr);
      fxm = Fn(fn, xm);
      ex = eps(xm, temp);
      i++;
      tempData.push({
          iteration: i,
          x: xm.toFixed(6),
          y: fxm.toFixed(6),
          e: ex.toFixed(6)
      });
      temp = xm;
  } 
  return {
      fn: fn,
      answer: { x: xm, y: Fn(fn, xm) },
      iteration: tempData
  }
}

export default bisection