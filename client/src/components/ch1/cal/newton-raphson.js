const { derivative , parse } = require('mathjs')

const newtonRaphson = (fn,x1) =>{
const eps = (a, b) => Math.abs((a - b) / a)
const findX = (x,fn,dfn) => x-(fn/dfn)
var  x2,i=1, ex = 1 , e = 0.000001
const tempData = [];
while ( ex > e ){
console.log('iteration '+i);
console.log('x1 ' + x1.toFixed(6));
x2 = findX(x1, parse(fn).evaluate({ x: x1 }), derivative(parse(fn), 'x').evaluate({ x: x1 }));
ex = eps(x2,x1)
x1 = x2
tempData.push({
    iteration: i,
    x: x2.toFixed(6),
    y: parse(fn).evaluate({ x: x2 }).toFixed(6),
    e: ex.toFixed(6)
  })
    i++;
}
return{
    fn: fn,
    answer: { x: x2, y: parse(fn).evaluate({ x: x2 }).toFixed(6) },
    iteration: tempData
}
}
export default newtonRaphson