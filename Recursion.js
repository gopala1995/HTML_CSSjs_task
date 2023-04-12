const Facto = (e) =>{
   if(e==1){
    return 1
   }
   return e * Facto(e-1)
}

// console.log(Facto(5))

let money = 100
let totalApple = 0
const AddApple = (x) =>{
    if(x>0){
        buyMore(x)
    }else{
        console.log("money empty", totalApple);
    }
}

const buyMore = (x) =>{
    AddApple(x-10)
    // console.log(x);
}
AddApple(money)




let arr = [2,0,"3",4,0,0]
let outzro = []
let outnum = []

for (var i=0;i<arr.length;i++){
     if(arr[i]==0){
       outzro.push(arr[i])
     } else if (arr[i] !=0){
        outnum.push(arr[i])
     }
}

//  console.log(outnum.concat(outzro));

let arr1 = [2,4,1,1,4,7]
// arr:[2,3,2,8,5,3] output: 2
// 	arr: [2,4,1,1,4,7] output: 1
// 	arr: [2,3,4] output: undefined

  const Duplicate = (arr1) =>{
    let out1 = []
    for(var i=0;i<arr1.length;i++){
        for(var j=i+1;j<arr1.length;j++){
         if(arr1[i] == arr1[j]){  
            out1.push(arr1[i])
            return out1[0]
        }else{
            // return undefined
        }
        
      } 
    }
  }

console.log(Duplicate(arr1))