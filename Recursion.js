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
    console.log(x);
}
AddApple(money)