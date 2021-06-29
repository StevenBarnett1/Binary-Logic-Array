const findMinimum = (arr) => {
  if (!arr.length) return undefined;
  let smallest = Infinity;
  for (let num of arr) {
    if (num < smallest) smallest = num;
  }
  return smallest;
};

const runningSum = (arr) => {
  let sum = 0;
  let res = [];
  for (let num of arr) {
    sum += num;
    res.push(sum);
  }
  return res;
};

const evenNumOfChars = (arr) => {
  return arr.filter((word) => word.length % 2 === 0).length;
};

const smallerThanCurr = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      arr[j] < arr[i] ? count++ : null;
    }
    res.push(count);
  }
  return res;
};

const twoSum = (arr, target) => {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
    if (hash[target - arr[i]] !== undefined) return true;
  }
  return false;
};

const secondLargest = (arr) => {
  if (arr.length < 2) return undefined;
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) secondLargest = arr[i];
  }

  return secondLargest;
};

const shuffle = (arr) => {
  let obj = {};
  let newArr = [];
  let valid = false;
  let ind;
  for (let i = 0; i < arr.length; i++) {
    while (!valid) {
      ind = Math.floor(Math.random() * arr.length);
      if (!obj[ind]) {
        valid = true;
        obj[ind] = true;
      }
    }
    newArr[ind] = arr[i];
    valid = false;
  }
  return newArr;
};

// const shuffle = (arr) => {
//   let newArr = []
//   for(let i =0;i< arr.length;i++){
//     newArr.push
//   }
// }

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
