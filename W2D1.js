//*****  Functions  ******//

// task one
const sum = function (a, b) {
  let sum = a + b;
  return sum;
};

// task two

const average = function (a, b) {
  let av = a + b;

  return av / 2;
};
// third task

const findFactorial = function (num) {
  let xx = 1;
  for (let findFactorial = 1; findFactorial <= num; findFactorial++) {
    xx = xx * findFactorial;
  }
  console.log(xx);
};
// forth task
const round = function (number) {
  let number1 = Math.round(number);
  return number1;
};
// fifth task
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
// sixth task

const randomNumber2 = function () {
  return Math.random() * (1 - 0) + 0;
};

// seventh task
const randomNumber = function () {
  return Math.round(Math.random() * (1 - 0) + 0);
};

// eghth task
const randomRange = function (x) {
  return Math.floor(Math.random() * (x - 0) + 0);
};

// ninth task
const includeOf1 = function (string, character) {
  return string.includes(string, character);
};

//******  Array  ******//

// first task
const addToArray = function (array, string) {
  array.push(string);

  return array;
};
// second task
const convertToString = function (array) {
  return array.join(" ");
};

// third task

const updateOrCreate = function (array, value, index) {
  if (index <= array.length) {
    array[index] = value;
    return array;
  } else return "there is no element to updated in this index";
};

// forth task

const sliceArray = function (array) {
  let str = [];
  for (let i = 0; i < array.length; i++)
    if (typeof array[i] === "string") {
      str.push(array[i]);
    } else return str;
};
//fifth task ^^ advanced code ==>
const users = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const login = function (username, password) {
  if (
    (username === "Jane" && password === "123456") ||
    (username === "admin" && password === "abc123")
  ) {
    console.log("login successfuly");
  } else {
    console.log("login failed");
  }
};
// sixth task
const maximumNumber = function (numbers) {
  return Math.max.apply(Math, numbers);
};
//seventh task
const reversString = function (string) {
  return string.split("").reverse().join("");
};

// Extra Task
const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  if (username === "admin" && "Jane") {
    console.log("That username not avaliable");
  } else {
    allUsers.push(username), allUsers.push(password);
    console.log("registration successfully");
  }
};
