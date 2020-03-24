var gauss = require("./gauss");
const multiRegr = (x,Y,...X) =>{
    var n = X[0].length 
    var m = X.length +1
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
        B[i]=(!i)?sum(1,Y) : sum(1,X[i-1],Y) 
        for(var j=0;j<m;j++){
            if(!i&&!j){
                A[i][j]=n
            }else{
                if(!i){
                    A[i][j]=sum(1,X[j-1])
                }else if(!j){
                    A[i][j]=sum(1,X[i-1])
                }else{
                    A[i][j]=sum(1,X[i-1],X[j-1])
                }
               
            }
        }
    }
    console.table(X);
    console.table(Y);
    console.table(x);
    console.table(A);
    console.table(B);
    B = gauss(A,B)
    console.table(B);
    var ans =0;
    for(var i=0;i<m;i++){
        ans+=(!i)?B[i]:B[i]*x[i-1]
    }
    console.log(ans.toFixed(6));
    return ans.toFixed(6)
}
// X1 = [1,0,2,3,4,2,1]
// X2 = [0,1,4,2,1,3,6]
// X3 = [1,3,1,2,5,3,4]
// Y = [4,-5,-6,0,-1,-7,-20]
// x = [1,1,1]
export default multiRegr