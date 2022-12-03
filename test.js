let arr = [4, 5, 8];

const output = arr.reduce((acc, curr) => {
  return (acc += curr);
});

// console.log(output);

let a = "hello";

let obj = {};

for (var i = 0; i < a.length; i++) {
  if (obj[a[i]] === undefined) {
    obj[a[i]] = 1;
  } else {
    obj[a[i]]++;
  }
}
console.log(obj)

// useEffect(()=>{
//   // maounting
// },[])

// useEffect(()=>{
//    //updating
// },[user])

// useEffect(()=>{
//     return(()=>{

//     })
//   //unmounting
// },[])

// console.log(1<2<3);
// console.log(3>2>1);

// Print a no of 100 to 1,00,000 series in
// ascending order only palindrome no will be printe
// 11 121 12321

// let ar = ["Gopala", "Gupta"]

// let ar1 = [1,2,3, ...ar , 1,2,3]

// // console.log(ar1);

// var s = {1:"b"}
// var d = {1:"b"}
// console.log(s==d);

// let A = [1, 2, 3, 4, 5];

let Data = [
  {
    name: "Gopala",
    add: "Saharsa",
    mobile: 12457893,
  },
  {
    name: "Rajesh",
    add: "Patna",
    mobile: 1222893,
  },
  {
    name: "Rohan",
    add: "Nauhatta",
    mobile: 1333893,
  },
];

// const Name = Data.map((el)=> el.name)

// console.log(Name.join(" "))

//  a &&  b && c {
//     return true
//  }
//   A || b || c {
//     return true
//   }

//  7 == "7"  true tyrpeof

//  npx create-react-app newReactApp

//  npm start

let nums = [2,7,11,15], target = 22
var twoSum = function(nums, target) {
  //let sum = []
  for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
      if(nums[i] + nums[j] === target){
         return[i,j]
      }
    }
    
  }

};

// console.log(twoSum(nums, target))
