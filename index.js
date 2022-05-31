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

var a = [2, 4, 3, 5, 7, 1, 1, 9, 6];

function Short(a) {
  //  var output = ""
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  console.log(a);
}

Short(a);


