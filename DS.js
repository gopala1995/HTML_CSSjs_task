// 1.Write a spell check program which checks the complete sentence
// and check for the letter 'a' and if the next word is a vowel
// replace it with "an"
// Ex: Input: I ate a apple today	Output: I ate an apple today
//=> 2.Round up and round down for a given number to the nearest 50.
// Ex: Input: 1234		Output: 1250
//3. Write a program to determine whether two matrices are equal
//=> 4. Write a program to check if a given number is perfect cube

let num = 1234

const RoundUp = (num) => {
   return Math.round(num/50) * 50
}
console.log(RoundUp(num))




let matrix1 = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 7],
];
let matrix2 = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 7],
];

const Matrix = (M1, M2) => {};
// console.log(Matrix(matrix1, matrix2));

let inp = 27;

const CheckCube = (input) => {
  for (var i = 1; i <= input; i++) {
    const cube = i * i * i;

    if (cube === input) {
      return "cube";
    } else if (cube > input) {
      //if it is not a cube then it must be greater than input
      return "not cube";
    }
  }
};

console.log(CheckCube(inp));
