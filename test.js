let arr = [4,5,8]

const output = arr.reduce((acc,curr)=>{
    return acc+=curr
})

console.log(output);

let a = "hello"

let obj = {}

for(var i=0;i<a.length;i++){

   if(obj[a[i]]===undefined){
    obj[a[i]]=1
   }else{
    obj[a[i]] ++
   }

}
console.log(obj)

useEffect(()=>{
  // maounting
},[])

useEffect(()=>{
   //updating
},[user])

useEffect(()=>{
    return(()=>{

    })
  //unmounting
},[])

