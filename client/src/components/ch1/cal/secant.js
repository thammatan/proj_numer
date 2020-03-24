const { parse } = require('mathjs')

const secant = (fn,x1,x2) => {
const eps = (a, b) => Math.abs((a - b) / a)
const findX = (fn,x1, x2 ) => x2 - (parse(fn).evaluate({x:x2})*(x1-x2)/(parse(fn).evaluate({x:x1})-parse(fn).evaluate({x:x2})))
var  i = 1, ex = 1, e = 0.000001 ,temp
const tempData = [];
while ( ex > e) {
    temp = x2
    x2 = findX(fn,x1, x2)
    x1 = temp
    ex = eps(x2, x1)
    tempData.push({
        iteration: i,
        x: x2.toFixed(6),
        y: parse(fn).evaluate({ x: x2 }).toFixed(6),
        e: ex.toFixed(6)
      })
    i++;
}
return {
    fn: fn,
    answer: { x: x2, y: parse(fn).evaluate({ x: x2 }).toFixed(6) },
    iteration: tempData
}
}
export default secant