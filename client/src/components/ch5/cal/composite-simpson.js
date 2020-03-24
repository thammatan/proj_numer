const { create, all } = require("mathjs");
const mathjs = create(all);
const mathInt = require('mathjs-simple-integral')
const newtonDevided = require('./newtonDevided')
mathjs.import(mathInt)
const simpson = (fx,a,b,n) =>{
    var A=[] , B = []
    var h = (b-a)/n
    var delta = h/2
    var N = (n*3) - (n-1)
    var sum=0
    const inf = mathjs.integral(fx, 'x');
    const f2 = inf.toString()
    var ans = mathjs.parse(f2).evaluate({x:b}) - mathjs.parse(f2).evaluate({x:a})
   for(var i=0;i<N;i++){
        A.push(a+(i*delta))
        B.push(mathjs.parse(fx).evaluate({x:A[i]}))
        if(i===0 || i===N-1){
            sum+=mathjs.parse(fx).evaluate({x:A[i]})
        }else if(i%2==1){
            sum+=4*(mathjs.parse(fx).evaluate({x:A[i]}))
        }else{
            sum+=2*(mathjs.parse(fx).evaluate({x:A[i]}))
        }
    }
    sum*=delta/3
    var fn = [{
        fn: fx.replace("e",mathjs.e),
        range: [a, b],
        closed: true,
        graphType: 'polyline'
      }]
    var temp =[]
    for(var i = 1; i < A.length ;i+=2){
         temp.push(newtonDevided(A, B, ...[i,i+1,i+2]))
    }
    console.table(temp);
    for(var i=0;i<n;i++){
       // console.log(`[${A[i*2]} - ${A[i*2+2]}]`);
      fn.push({fn:temp[i],range:[A[i*2],A[i*2+2]],skipTip:true,closed:true, graphType: 'polyline'})
    }
    return {fn:fn,a:a,b:b,realAns:ans,calAns:sum}
}
export default simpson