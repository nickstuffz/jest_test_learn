function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

function reverseString(string) {
  let n = string.length;
  let result = "";
  while (n > 0) {
    result = result + string.slice(n - 1, n);
    n--;
  }
  return result;
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function ceaserCipher(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const stringArray = string.split("");
  const stringArrayShifted = stringArray.map((value) => {
    let index = alphabet.indexOf(value);
    let shiftedIndex = (((index + shift) % 26) + 26) % 26;

    return (shiftedValue = alphabet[shiftedIndex]);
  });
  const stringShifted = stringArrayShifted.join("");
  return stringShifted;
}

module.exports = { sum, capitalize, reverseString, calculator, ceaserCipher };
