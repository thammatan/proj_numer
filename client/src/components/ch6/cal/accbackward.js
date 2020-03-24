const { derivative , parse } = require('mathjs')
const accbackward = (fn,x,h,order) =>{
    var fn2 = fn
    for(var i =0;i<order;i++){
        fn2 = derivative(parse(fn2), 'x').toString()
    }
    var realAns =  parse(fn2).evaluate({x:x})

    const Fx = (i) => parse(fn).evaluate({x:i*h+x})

    var calAns = 0 
    switch (order) {
        case 1:
            calAns+=((3*Fx(0)+(-4*Fx(-1))+(1*Fx(-2))))/(2*h)
            break;
        case 2:
            calAns+=((2*Fx(0))+(-5*Fx(-1))+(4*Fx(-2))+(-1*Fx(-3)))/(h**2)
            break;
        case 3:
            calAns+=((5*Fx(0))+(-18*Fx(-1))+(24*Fx(-2))+(-14*Fx(-3))+(3*Fx(-4)))/(2*(h**3))
           break;
        case 4:
            calAns+=((3*Fx(0))+(-14*Fx(-1))+(26*Fx(-2))+(-24*Fx(-3))+(11*Fx(-4))+(-2*Fx(-5)))/(h**4)
            break;
        default:
            break;
    }
    console.log(realAns);
    console.log(calAns);
    return {fn:fn,fn2:fn2,x:x,realAns:realAns,calAns:calAns}
}
export default accbackward;