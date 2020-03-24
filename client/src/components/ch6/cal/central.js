const { derivative , parse ,factorial} = require('mathjs')
const central = (fn,x,h,order) =>{
    var fn2 = fn
    for(var i =0;i<order;i++){
        fn2 = derivative(parse(fn2), 'x').toString()
    }
    var realAns =  parse(fn2).evaluate({x:x})
    var calAns = 0 ,fcal = ""
    const FindH = (i,h) => ((order%2===1)?(order/2-i>0)?order/2-i+0.5:order/2-i-0.5:order/2-i)*h
    for(var i=0;i<=order;i++){
        fcal+=`[(${Math.pow(-1,i)})(${((factorial(order)/(factorial(order-i)*factorial(i))))})f(${x+FindH(i,h)})]`
        fcal+=(i===order)?"":"+"
        calAns+=Math.pow(-1,i)*((factorial(order)/(factorial(order-i)*factorial(i))))* parse(fn).evaluate({x:x+FindH(i,h)})
    }
    fcal+=`/${h}^${order}`
    console.log(fcal);
    calAns/=Math.pow(h,order)
    console.log(realAns);
    console.log(calAns);
    return {fn:fn,fn2:fn2,x:x,realAns:realAns,calAns:calAns}
}
export default central;