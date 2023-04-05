/////////----TWO---SUM---////////

let nums = [2, 7, 11, 15],
  target = 22;
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum(nums, target));

const user = { name: "Gopala", age: 23 };
const admin = { admin: true, ...user };
const user2 = [1, 2, 3, 4, 5],
  user3 = [6, 7, 8, 9, 10];

// console.log(admin);
// console.log(...user2,...user3);

const arr = [2,5,6,4,7,8,1,2,45,3,6,36,25,14,95]

for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr.length;j++){
     if(arr[j]>arr[j+1]){
      let temp = arr[j]
       arr[j]=arr[j+1]
       arr[j+1] = temp
     }
  }
}
// console.log(arr);


const DayofWeek = (d,m,y) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(y,m-1,d).getDay()]
};
console.log(DayofWeek(18,7,1999))
