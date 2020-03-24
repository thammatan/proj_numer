var gauss = require("./gauss");

const linearRegr = (x,m,X,Y)=> {
    if(X.length===0 || Y.length===0)
    return 0
    var n = X.length 
    m++
    var A = Array.from(Array(m), _ => Array(m).fill(0));
    var B = Array(m).fill(0)
    const sum = (m,...X) =>{
        var sum=0,temp
        if(X.length===1){
        for(var i=0;i<X[0].length;i++){
            sum+=Math.pow(X[0][i],m)
        }
        }else{
            for(var i=0;i<X[0].length;i++){
                sum+=(Math.pow(X[0][i],m)*X[1][i])
            }
        }
        return sum
    }
    for(var i=0;i<m;i++){
        B[i]=(!i)?sum(1,Y) : sum(i,X,Y)
        for(var j=0;j<m;j++){
            if(!i&&!j){
                A[i][j]=n
            }else{
                  A[i][j]=sum((i+j),X)
            }
        }
    }
    console.table(X);
    console.table(Y);
    console.table(A);
    console.table(B);
    B = gauss(A,B)
    console.table(B);
    var ans =0;
    for(var i=0;i<m;i++){
        ans+=B[i]*Math.pow(x,i)
    }
    console.log(ans.toFixed(6));
    return ans.toFixed(6)
}
//X=[10,15,20,30,40,50,60,70,80],Y=[5,9,15,18,22,30,35,38,43]


export default linearRegr