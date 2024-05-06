//In order to help us create more flexible functions, ES6 introduces default parameters for functions.

//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (number, value = 1) => number + value;
console.log(increment(5,1));
console.log(increment);

