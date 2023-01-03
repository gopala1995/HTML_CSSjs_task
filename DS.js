// 1.Write a spell check program which checks the complete sentence
// and check for the letter 'a' and if the next word is a vowel
// replace it with "an"
// Ex: Input: I ate a apple today	Output: I ate an apple today
// 2.Round up and round down for a given number to the nearest 50.
// Ex: Input: 1234		Output: 1250
//3. Write a program to determine whether two matrices are equal
//4. Write a program to check if a given number is perfect cube

let matrix1 = [
  [1, 2, 3],
//00, 01, 02
  [5, 6, 7],
// 10, 11, 12
  [8, 9, 7],
//20, 21 ,22
];
let matrix2 = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 7],
];

const Matrix = (M1, M2) => {
  for (var i = 0; i < M1[0].length; i++) {
    console.log(M1);
    for (var j = 0; j < M2.length; j++) {
      if (M1[i] == M2[j]){
        return "Equal";
      } else {
        return "Not Equal";
      }
    }
  }
};
console.log(Matrix(matrix1, matrix2));

let inp = 27;

const SpellPRogram = (input) => {
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

// console.log(SpellPRogram(inp));
