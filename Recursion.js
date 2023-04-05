const Facto = (e) =>{
   if(e==1){
    return 1
   }
   return e * Facto(e-1)
}

console.log(Facto(5))