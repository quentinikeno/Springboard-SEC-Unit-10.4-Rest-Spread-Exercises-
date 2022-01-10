/* Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor it to use the rest operator & an arrow function:Write an ES2015 Version */

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

//findMin
const findMin = (...values) => Math.min(...values);

//mergeObjects
const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });

//doubleAndReturnArgs
const doubleAndReturnArgs = (array, ...restArgs) => [
	...array,
	...restArgs.map((val) => val * 2),
];

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	const removeIndex = Math.floor(Math.random() * items.length);
	return [...items.slice(0, removeIndex), ...items.slice(removeIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	let myObj = { ...obj };
	myObj[key] = val;
	return myObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	let myObj = { ...obj };
	delete myObj[key];
	return myObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	let myObj = { ...obj };
	myObj[key] = val;
	return myObj;
};
