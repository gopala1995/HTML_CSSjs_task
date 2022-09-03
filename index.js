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

function addData(num) {
  let N = String(num)
    .split("")
    .map((num) => Number(num));
  // let Num = String(num).split("").map((num)=>Number(num))

  let finalData = N.reduce((a, b) => a + b);

  if (finalData > 10) {
    addData(finalData);
  } else {
    // console.log(finalData)
  }
}

addData(54321);

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
let b = 15
let c = b.toString(2)
// console.log(c);

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
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  //   console.log(a);
}

Short(a);

////////-----MAx accuring element------/////

let arrr = [0, 2, 2, 2, 2, 0, 6, 9];

function maximumOccuringElement(A) {
  var rev = 1;
  var value = 0;
  var Newkey = 0;
  var obj = {};
  for (var i = 0; i < A.length; i++) {
    //var n = A[i]
    //console.log(n)
    if (obj[A[i]] == undefined) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  //console.log(obj)
  for (key in obj) {
    if (value < obj[key]) {
      value = obj[key];
      Newkey = key;
    }
  }
  // console.log(Newkey)
}

maximumOccuringElement(arrr);

// let a = 2, b = 2, $c = 3
// console.log(a,b,$c)

let str = "hellooleh";

function CheckPalinderom(str) {
  let L = 0,
    R = str.length - 1;
  while (L < R) {
    if (str[L] != str[R]) {
      return false;
    }
    L++;
    R--;
  }
  return true;
}
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
    if (i == 10) {
      output += "*";
    } else {
      if (j == 1 || j == 10) {
        output += "*";
      } else {
        output += " ";
      }
    }
  }
  // console.log(output)
}

//////--------o-----////////

for (var i = 1; i <= 10; i++) {
  var output = "";
  for (var j = 1; j <= 10; j++) {
    if (i == 1 || i == 10) {
      output += "*";
    } else {
      if (j == 1 || j == 10) {
        output += "*";
      } else {
        output += " ";
      }
    }
  }
  // console.log(output)
}

//////---------------------////////////////

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var sum = 0;
for (var i = 0; i < 4; i++) {
  sum += arr[i];
}
// console.log(sum);

//////////---------------////////

const ar = ["You", "are", "an", "amazing", "engineer"];

const sortByLength = (ar) => {
  // console.log( ar.sort((a,b)=> a.length - b.length))
};
// sortByLength(ar)

///////////------------------/////////

const MakeDouble = (N) => {
  // console.log(2*N);
};

MakeDouble(4);

///////////-------------//////

const ReverceName = (nam) => {
  let newStr = "";
  for (let i = nam.length - 1; i >= 0; i--) {
    if (
      nam[i] != "a" &&
      nam[i] != "e" &&
      nam[i] != "i" &&
      nam[i] != "o" &&
      nam[i] != "u"
    ) {
      newStr += nam[i];
    }
  }
  return newStr;
};
// console.log(ReverceName("Gopala"));

const set = new Set([0, 1, 1, 2, 3, 3, 9, 9, 3, 7, 5]);
// console.log(set);

const months = ["Jan", "March", "April", "June", "July"];
months.splice(1, 0, "Feb");

// console.log(months);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Chhiku"];
let citrus = fruits.slice(1, 3);
// console.log(citrus);

////////////////---------------/////

// const fetchUrl = async () => {
//   let url = `https://fakestoreapi.com/users`;
//   const res = await fetch(url);
//   const data1 = await res.json();
//   console.log(data1);
// };
// fetchUrl();

/////////----------------///////////

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    // console.log(i)
  }, 000);
}

let rrr = [2, 3, 4, 5, 6, 7];

const ReverceArray = (arr) => {
  let str = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    str.push(arr[i]);
  }
  // console.log(str);
};
ReverceArray(rrr);

let N = [1, 2, 3, 4, 5];

const Narr = N.reduce((a, b) => a * b);

// console.log(Narr);

let inpt = [2, 1, 1, 2, 3, 4, 5, 2, 1, 2, 3, 4, 5];

const findRandom = (N) => {
  let score = [10, 11, 12, 13, 14, 15];

  for (let i = 0; i < score.length; i++) {
    // console.log(score[i]);
    if (N == score[i]) {
      return score[i];
    } else {
      return "";
    }
  }
};

// console.log(findRandom());

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomArbitrary(9, 16));



let m = [1,2,3,5,4,5,6,4,15,9,16,15,]

  //  m.forEach((el,index)=> console.log(el+10))
   const F = m.filter((el,index)=> el>5)
  //  console.log(F);
   const  M = m.map((el,index)=>el*2)
  //  console.log(M);
  const R = m.reduce((pre,cur)=> pre +cur)
  // console.log(R);

       
    let max = 0
    for(var i=0;i<m.length;i++){
      // console.log(m[i]);
       if(max < m[i]){
        max = m[i]
       }
    }
  // console.log(max);

  var arraye = ["A", "Good", "Problem"]

  function Odd(el){
    return el.length 
  }
   function ev(el){
     return el  % 2 == 1
   }
   function Sum(el,ac){
     return el + ac
   }
  var stri = arraye.map(Odd).filter(ev).reduce(Sum);
  console.log(stri)

//   const z = [1, 2, 3,5,9,0,-10];
// // const ma = Math.max(...z);
// const ma = z.reduce((a, b) => Math.max(a, b));
// console.log(ma);




