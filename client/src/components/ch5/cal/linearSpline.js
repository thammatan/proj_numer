const linearSpline = (X,Y) =>{
    const findM = (x1,x2,y1,y2) => (y2-y1)/(x2-x1)
    var temp = []
    for(var i=0;i<X.length-1;i++){
            //console.log(`M:(${Y[i+1]}-${Y[i]}/(${X[i+1]}-${X[i]}))`);
            temp.push(`${Y[i]}+((${findM(X[i],X[i+1],Y[i],Y[i+1])})*(x-(${X[i]})))`)
            //console.log(`${Y[i]}+((${findM(X[i],X[i+1],Y[i],Y[i+1])})*(x-(${X[i]})))`);
    }
    return temp
}
module.exports = linearSpline