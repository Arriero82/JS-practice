//plusMinus([-5,0,0,1,2,3]);

function miniMaxSum(arr) {
  // Write your code here
  arr.sort()
  let maxArray = arr.slice()
  let minArray = arr.slice()
  maxArray.shift()
  const maxSum = maxArray.reduce((a, b) => a + b)
  minArray.pop()
  const minSum = minArray.reduce((a, b) => a + b)
  console.log(minSum + ' ' + maxSum)
}

//miniMaxSum([5,3,2,4,1]);

function timeConversion(s) {
  // Write your code here
  let amPm = s.slice(8, 10)
  let time = s.slice(0, 2)
  let time24 = s.slice(2)
  time24 = time24.slice(0, 6)
  if (amPm == 'PM') {
    if (time < 12) {
      time = parseInt(time) + 12
    }
  } else if (amPm == 'AM') {
    if (time == 12) {
      time = '00'
    }
  }
  s = time + time24
  return s
}

//timeConversion("07:05:45PM");

function fizzBuzz(n) {
  // Write your code here
  let i
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
  return i
}

//fizzBuzz(20);

function findMedian(arr) {
  // Write your code here
  function order(a, b) {
    return a - b
  }
  arr.sort(order)
  console.log(arr)
  let median = arr.length / 2 - 0.5
  let solution = arr.slice(median, median + 1)
  return solution
}

//console.log(findMedian([0,1,2,8,7,5,9,10,50,1000,2000,1003,5005]));

function lonelyinteger(a) {
  // Write your code here
  function order(a, b) {
    return a - b
  }
  a.sort(order)
  const pairs = []
  const lonely = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      pairs.push(a[i])
    } else {
      lonely.push(a[i])
    }
  }
  for (i = 0; i < lonely.length; i++) {
    if (pairs[i] != lonely[i]) {
      return lonely[i]
    }
  }
}

//console.log(lonelyinteger([1,2,3,4,4,3,2,1,8]));

function diagonalDifference(arr) {
  let leftToRight = 0
  let rightToLeft = 0
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i]
    rightToLeft += arr[i][arr.length - 1 - i]
  }

  return Math.abs(leftToRight - rightToLeft)
}

//console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

//not solved by me
function countingSort(arr) {
    let counterArray = Array(100).fill(0);
    
    for (let number of arr) {
        counterArray[number]++
    }
    return counterArray;
}

const stg =
  '63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33'

  const arr = stg.split(" ");
  //console.log(countingSort(arr));

function arrayGen(){
const array =[];
    for(i=0;i<100;i++){
        let number = Math.round(Math.random()*100);
        array.push(number);
    }
    //return array;
    return array.sort((a,b) =>a-b);
}

//console.log(countingSort(arrayGen()));

//Mock Test Day 2 - Flipping the matrix


/*
function flippingMatrix(matrix) {
    // Write your code here
    let arrayCol = [];
    let arrayRow = [];
    let arrayQ1 = [];
    for(let i=0; i<matrix.length; i++){
        arrayCol.push(matrix[matrix.length-1-i][2]);
    }
    for(let i=0; i<matrix.length; i++){
        matrix[i][2] = arrayCol[i];
    }
    for(let j=0; j<matrix.length; j++){
        arrayRow.push(matrix[0][matrix.length-1-j]);
    }
    for(let j=0; j<matrix.length; j++){
        matrix[0][j] = arrayRow[j];
    }
    for(let i=0; i<2; i++){
        for(let j=0; j<2; j++){
            arrayQ1.push(matrix[i][j]);
        }
    }
    let sumArrayQ1 = arrayQ1.reduce((a,b)=>a+b);
    return sumArrayQ1;
}   


//para despues

function flippingMatrix(matrix) {
    let n = (matrix.length/2)*(matrix.length/2);
    let q1 = [];
    for(i=0; i<matrix.length; i++){
        for(){

        }
    }
}


const matrix = [[112, 42, 83, 119], 
                [56, 125, 56, 49],
                [15, 78, 101, 43], 
                [62, 98, 114, 108]];

const matrix2 = [[107, 54, 128, 15],
                [12, 75, 110, 138],
                [100, 96, 34, 85],
                [75, 15, 28, 112]]

console.log(flippingMatrix(matrix)); //414
console.log(flippingMatrix(matrix2)); //488
*/

//funcionan en los primeros tests, falla en el resto
function towerBreakers(n, m) {
    // Write your code here
  let j = 0;
  let i = 0;
  let x = 2;
  const towers = Array(n).fill(m);

  while((towers[0]) > 1){
    j++;
    for(n=1; n<towers[0]; n++){
      if((towers[0]-x>=1)||(towers[0] % n == 0)){
        x = n;
      }
      else{
        continue;
      }
    }
    towers[0] = towers[0]-x;
    towers.sort((a,b) => b-a);
    console.log(towers);
  } 
  if(j % 2 != 0){
    return 1
  }else{
    return 2
  }
}

//console.log(towerBreakers(3,7));


function caesarCipher(s, k) {
  // Write your code here
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const text = s.split('');
  console.log(text);
  const index = [];
  const encripted = [];
  for(let i=0; i<text.length; i++){
    if(alphabet.indexOf(text[i])!=-1){
      let letter = (alphabet.indexOf(text[i])+k);
      index.push(letter);
    }else{
      index.push(text[i])
    }
  }
  console.log(index);
  for(i=0; i<index.length; i++){
    encripted.push(alphabet[index[i]])
  }
  return encripted;
}

console.log(caesarCipher('middle-Outz',2));




