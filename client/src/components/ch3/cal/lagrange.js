const lagrange=(x,X,Y)=>{
    const L = (i,j) => (X[j]-x)/(X[j]-X[i])
        var ans = 0;
        var temp;
        for(var i=0;i<X.length;i++){
            temp=1;
            for(var j=0;j<X.length;j++){
                if(i!==j){
                    temp*=L(i,j)
                }
            }
            temp*=Y[i]
            ans+=temp
        }
        return ans.toFixed(6)
    }
export default lagrange