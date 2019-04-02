// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });



//HOF 
function higherOrderFunction(arr, cb) {
  return cb(arr);
}


//test
function test(arr, cb) {
  return "testing";
}
console.log(higherOrderFunction(items,test));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return arr.length;
}
console.log(higherOrderFunction(items,getLength));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return arr[arr.length - 1];
}
console.log(higherOrderFunction(items,last))



//HOF Math
function higherOrderFunctionMath(x, y, cb) {
  return cb(x,y);
}


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x + y;
}
console.log(higherOrderFunctionMath(1,2,sumNums));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y;
}
console.log(higherOrderFunctionMath(5,5,multiplyNums));


//HOF Contains
function higherOrderFunctionContains(item, list, cb) {
  return cb(item,list);
}

let myList = ['testing', '1', 'two', 'three']


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.forEach(function(x) {
    if (x === item) {
      console.log(x)
      return true;
    }
  });
}
console.log(higherOrderFunctionContains('two',myList,contains))



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
