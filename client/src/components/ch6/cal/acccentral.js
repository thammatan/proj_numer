const { derivative , parse } = require('mathjs')
const acccentral = (fn,x,h,order) =>{
    var fn2 = fn
    for(var i =0;i<order;i++){
        fn2 = derivative(parse(fn2), 'x').toString()
    }
    var realAns =  parse(fn2).evaluate({x:x})
    const Fx = (i) => parse(fn).evaluate({x:i*h+x})
    var calAns = 0 
    switch (order) {
        case 1:
            calAns+=((-1*Fx(2))+(8*Fx(1))+(-8*Fx(-1))+(Fx(-2)))/(12*h)
            break;
        case 2:
            calAns+=((-1*Fx(2))+(16*Fx(1))+(-30*Fx(0))+(16*Fx(-1))+(-1*Fx(-2)))/(12*(h**2))
            break;
        case 3:
            calAns+=((-1*Fx(3))+(8*Fx(2))+(-13*Fx(1))+(13*Fx(-1))+(-8*Fx(-2))+(Fx(-3)))/(8*(h**3))
           break;
        case 4:
            calAns+=((-1*Fx(3))+(12*Fx(2))+(-39*Fx(1))+(56*Fx(0))+(-39*Fx(-1))+(12*Fx(-2))+(-1*Fx(-3)))/(6*(h**4))
            break;
        default:
            break;
    }
    console.log(realAns);
    console.log(calAns);
    return {fn:fn,fn2:fn2,x:x,realAns:realAns,calAns:calAns}
}
export default acccentral;