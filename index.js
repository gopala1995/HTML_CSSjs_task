// // document.getElementById("btn").addEventListener("click",()=> {

// //     console.log("hello")
// //   });
// ///////-----------------------------------////////

// // console.log(1)
// // setTimeout(()=> console.log(2),1000)
// // setTimeout(()=> console.log(3),0)
// // console.log(4)

// ////////----------------------------///////

// // function x() {
// //   var i = 1;
// //   setTimeout(function () {
// //     console.log(i);
// //   }, 1000);
// // }
// // x();

// ////////----------------------------//////

// ////---V V V V V V V I I I I I I -----/////

// function addData(num){

//     let N = String(num).split("").map((num)=> Number(num))
//     let Num = String(num).split("").map((num)=>Number(num))

//     let finalData = N.reduce((a,b)=> a+b)

//     if(finalData > 10){
//         addData(finalData)
//     }else console.log(finalData)
// }
// addData(54321)

// /////-------/////

// // const msg = "Hello World \n";

// // console.log(`${msg.repeat(3)}`);

// ///----------------------/////

// // console.log(`This is line one
// // This is line two.`);

// /////--------------------------/////

// // let foo = 'foo';
// // foo = 'bar';
// // console.log(foo);

// ////-----------------////

// // var isAuthenticated = true;

// // console.log(isAuthenticated ? 'Hello, welcome' : 'Sorry, you are not authenticated');

// ////////-------------------///////

// // var object = {
// //     "k1": "value1",
// //     "k2": "value2",
// //     "k3": "value3"
// // };

// // for(var key in object){
// //     console.log(key +" "+ object[key])
// // }

// /////////-------------------------//////////////////

// // let a = 54321
// // let b = ""+a
// // let c = b.split("").map((a)=>parseInt(a))
// // let d = c.reduce((a,b)=>a+b)
// // console.log(d)

// let arr = [1,2,3,4,5,6]
// // let NewArr = arr.reduce((a,b)=>a+b)

// console.log(arr.map((a)=>a*3));

// ///Convert into Binary
// console.log(arr.map((a)=>a.toString(2)))

// console.log(arr.filter((a)=> a % 2 !==0));

// // Input: S = "free"
// // Output:"eefr"

// // Input: s = "Aabb"
// // Output:"bbAa"

// //   function ferquency(str){
// //       var obj = {}

// //       for(var i=0;i<str.length;i++){

// //          if(obj[str[i]] === undefined){
// //             obj[str[i]] ++
// //         }
// //          console.log(obj)

// //       }
// //   }

// //   ferquency("free")

// var a = [2, 4, 3, 5, 7, 1, 1, 9, 6];

// function Short(a) {
//   for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < a.length - i - 1; j++) {
//       if (a[j] > a[j + 1]) {
//         var temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;
//       }
//     }
//   }
//   console.log(a);
// }

// Short(a);

////////-----MAx accuring element------/////

// let arr = [0, 2,2,2,2, 0, 6, 9]

// function maximumOccuringElement(A){
//   var rev = 1;
// var value = 0;
// var Newkey = 0;
// var obj = {};
// for(var i=0;i<A.length;i++){
// //var n = A[i]
//   //console.log(n)
//   if(obj[A[i]]==undefined){
//     obj[A[i]]=1
//     }else{

//        obj[A[i]]++
//   }
// }
// //console.log(obj)
// for(key in obj){

// if(value < obj[key]){
//   value=obj[key]
//   Newkey=key
//  }
// }
// console.log(Newkey)
// }

// maximumOccuringElement(arr)

// let a = 2, b = 2, $c = 3
// console.log(a,b,$c)

// let str = "hellooleh";

// function CheckPalinderom (str) {
//  let L = 0, R = str.length-1
//  while(L<R){
//    if(str[L]!= str[R]){
//      return false
//    }
//    L++
//    R--
//  }
//  return true
// };
// let out = CheckPalinderom(str);
// if (out == true) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

///////-------U--------////////

for (var i = 1; i <= 10; i++) {
  var output = "";
  for (var j = 1; j <= 10; j++) {
    if ( i == 10) {
      output += "*";
    } else {
      if (j == 1 || j == 10) {
        output += "*";
      } else {
        output += " ";
      }
    }
  }
  console.log(output)
}

//////--------o-----////////


for (var i = 1; i <= 10; i++) {
  var output = "";
  for (var j = 1; j <= 10; j++) {
    if ( i==1 || i == 10) {
      output += "*";
    } else {
      if (j == 1 || j == 10) {
        output += "*";
      } else {
        output += " ";
      }
    }
  }
  console.log(output)
}
