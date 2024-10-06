const myFuncs = require("./func");

test("returns sum of two numbers", () => {
  expect(myFuncs.sum(1, 2)).toBe(3);
});

test("returns string with first character capitalized", () => {
  expect(myFuncs.capitalize("potato")).toBe("Potato");
});

test("returns string with characters reversed", () => {
  expect(myFuncs.reverseString("potato")).toBe("otatop");
  expect(myFuncs.reverseString("P")).toBe("P");
});

test("calculator object that has add, subtract, divide, multiply", () => {
  expect(myFuncs.calculator.add(2, 5)).toBe(7);
  expect(myFuncs.calculator.subtract(2, 5)).toBe(-3);
  expect(myFuncs.calculator.multiply(2, 5)).toBe(10);
  expect(myFuncs.calculator.divide(2, 5)).toBe(0.4);
});
