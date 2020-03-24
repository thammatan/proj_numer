const { create, all } = require("mathjs");
const mathjs = create(all);
const mathInt = require('mathjs-simple-integral')
const linearSpline = require('./linearSpline')
mathjs.import(mathInt)
const trapezoidal = (fx,a,b,n) =>{
    var A=[] , B = [] , x = []
    var h = (b-a)
    var delta = h/n
    var N = n +1
    var sum=0
    const inf = mathjs.integral(fx, 'x');
    const f2 = inf.toString()
    var ans = mathjs.parse(f2).evaluate({x:b}) - mathjs.parse(f2).evaluate({x:a})
    console.table(B);
   for(var i=0;i<N;i++){
        A.push(a+(i*delta))
        B.push(mathjs.parse(fx).evaluate({x:A[i]}))
        console.log(mathjs.parse(fx).evaluate({x:A[i]}));
        sum+=(i===0||i===N-1)?B[i]:2*B[i]
    }
    console.table(B);
    sum*=delta/2
    var fn = [{
        fn: fx.replace("e",mathjs.e),
        range: [a, b],
        closed: true,
        graphType: 'polyline'
      }]
    var temp = linearSpline(A,B)
    for(var i=0;i<N-1;i++){
        fn.push({fn:temp[i],range:[A[i],A[i+1]],skipTip:true,closed:true, graphType: 'polyline'})
    }
    console.table(fn);
    return {fn:fn,a:a,b:b,realAns:ans,calAns:sum}
}

export default trapezoidal