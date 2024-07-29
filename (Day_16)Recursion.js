// Day 16: Recursion
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Basic Recursion
// . Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function fact(num) {
    if (num === 0 || num === 1) return 1;
    else return num * fact(num - 1);
}
console.log(fact(5));
console.log(fact(9));
console.log(fact(10));

// . Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fib(num) {
    if (num === 0) return 0;
    else if (num === 1) return 1;
    return fib(num-1) + fib(num-2)
}
console.log(fib(12));
console.log(fib(5));
console.log(fib(10));

// Activity 2: Recursion with Arrays
// . Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function arraySum(arr) {
    // Base case: if the array is empty, sum is 0
    if (arr.length === 0) {
        return 0;
    } else {
        // Recursive case: sum of first element + sum of rest of the elements
        return arr[0] + arraySum(arr.slice(1));
    }
}

// Testing the function
console.log(arraySum([1, 2, 3])); // Output: 6
console.log(arraySum([5, 5, 5])); // Output: 15
console.log(arraySum([10])); // Output: 10
console.log(arraySum([])); // Output: 0

// . Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function max(arr) {
    // Base case: if the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0];
    }
    
    // Recursive case: find the maximum in the rest of the array
    const restMax = max(arr.slice(1));
    
    // Compare the first element with the maximum of the rest
    return arr[0] > restMax ? arr[0] : restMax;
}

// Testing the function
console.log(max([2, 6, 4, 3, 5, 8, 2, 4, 9]));  // Output: 9
console.log(max([7, 3, 5, 1, 0]));             // Output: 7
console.log(max([-1, -2, -3, -4]));            // Output: -1
console.log(max([10]));                        // Output: 10
console.log(max([5, 5, 5, 5, 5]));             // Output: 5

// Activity 3: String Manipulation with Recursion
// . Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str.length <= 1) {
        return str;
    }
    
    // Recursive case: reverse the rest of the string and append the first character to the end
    return reverseString(str.slice(1)) + str[0];
}

// Testing the function with a few test cases
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("world"));  // Output: "dlrow"
console.log(reverseString("recursion")); // Output: "noisrucer"
console.log(reverseString("a"));      // Output: "a"
console.log(reverseString(""));       // Output: ""
console.log(reverseString("abcdef")); // Output: "fedcba"

// . Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    
    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// Testing the function with a few test cases
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("level"));    // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("a"));        // Output: true
console.log(isPalindrome(""));         // Output: true
console.log(isPalindrome("madam"));    // Output: true
console.log(isPalindrome("noon"));     // Output: true
console.log(isPalindrome("robot"));    // Output: false

// Activity 4: Recursive Search
// . Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index exceeds the right index, the target is not in the array
    if (left > right) {
        return -1;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is smaller than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is larger than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Testing the function with a few test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));  // Output: 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));  // Output: 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));  // Output: 8
console.log(binarySearch([], 5));                          // Output: -1
console.log(binarySearch([5], 5));                         // Output: 0
console.log(binarySearch([2, 4, 6, 8, 10, 12], 6));        // Output: 2


// . Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0) {
    // Base case: if the index is equal to the array length, return 0
    if (index === arr.length) {
        return 0;
    }

    // Check if the current element is equal to the target
    const countForThisElement = arr[index] === target ? 1 : 0;

    // Recursive case: count occurrences in the rest of the array
    return countForThisElement + countOccurrences(arr, target, index + 1);
}

// Testing the function with a few test cases
console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3, 6], 3));  // Output: 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6));          // Output: 0
console.log(countOccurrences([7, 7, 7, 7, 7], 7));          // Output: 5
console.log(countOccurrences([], 5));                       // Output: 0
console.log(countOccurrences([2, 4, 6, 8, 10, 4], 4));      // Output: 2
console.log(countOccurrences([3, 3, 3, 3, 3, 3], 3));       // Output: 6
console.log(countOccurrences([1, 3, 5, 7, 9], 1));          // Output: 1

// Activity 5: Tree Traversal (Optional)
// . Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// . Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// function fact(num) {
//     if (num === 0 || num === 1) return 1;
//     else return num * fact(num - 1);
// }
// console.log(fact(5));
// console.log(fact(9));
// console.log(fact(10));

// function fib(num) {
//     if (num === 0) return 0;
//     else if (num === 1) return 1;
//     return fib(num-1) + fib(num-2)
// }
// console.log(fib(12));
// console.log(fib(5));
// console.log(fib(10));

// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// function arraySum(arr) {
//     // Base case: if the array is empty, sum is 0
//     if (arr.length === 0) {
//         return 0;
//     } else {
//         // Recursive case: sum of first element + sum of rest of the elements
//         return arr[0] + arraySum(arr.slice(1));
//     }
// }

// // Testing the function
// console.log(arraySum([1, 2, 3])); // Output: 6
// console.log(arraySum([5, 5, 5])); // Output: 15
// console.log(arraySum([10])); // Output: 10
// console.log(arraySum([])); // Output: 0

// function max(arr) {
//     // Base case: if the array has only one element, return that element
//     if (arr.length === 1) {
//         return arr[0];
//     }
    
//     // Recursive case: find the maximum in the rest of the array
//     const restMax = max(arr.slice(1));
    
//     // Compare the first element with the maximum of the rest
//     return arr[0] > restMax ? arr[0] : restMax;
// }

// // Testing the function
// console.log(max([2, 6, 4, 3, 5, 8, 2, 4, 9]));  // Output: 9
// console.log(max([7, 3, 5, 1, 0]));             // Output: 7
// console.log(max([-1, -2, -3, -4]));            // Output: -1
// console.log(max([10]));                        // Output: 10
// console.log(max([5, 5, 5, 5, 5]));             // Output: 5

// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// function reverseString(str) {
//     // Base case: if the string is empty or has only one character, return it
//     if (str.length <= 1) {
//         return str;
//     }
    
//     // Recursive case: reverse the rest of the string and append the first character to the end
//     return reverseString(str.slice(1)) + str[0];
// }

// // Testing the function with a few test cases
// console.log(reverseString("hello"));  // Output: "olleh"
// console.log(reverseString("world"));  // Output: "dlrow"
// console.log(reverseString("recursion")); // Output: "noisrucer"
// console.log(reverseString("a"));      // Output: "a"
// console.log(reverseString(""));       // Output: ""
// console.log(reverseString("abcdef")); // Output: "fedcba"

// function isPalindrome(str) {
//     // Base case: if the string is empty or has one character, it's a palindrome
//     if (str.length <= 1) {
//         return true;
//     }
    
//     // Check if the first and last characters are the same
//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }
    
//     // Recursive case: check the substring without the first and last characters
//     return isPalindrome(str.slice(1, str.length - 1));
// }

// // Testing the function with a few test cases
// console.log(isPalindrome("racecar"));  // Output: true
// console.log(isPalindrome("level"));    // Output: true
// console.log(isPalindrome("hello"));    // Output: false
// console.log(isPalindrome("a"));        // Output: true
// console.log(isPalindrome(""));         // Output: true
// console.log(isPalindrome("madam"));    // Output: true
// console.log(isPalindrome("noon"));     // Output: true
// console.log(isPalindrome("robot"));    // Output: false

// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//     // Base case: if the left index exceeds the right index, the target is not in the array
//     if (left > right) {
//         return -1;
//     }

//     // Find the middle index
//     const mid = Math.floor((left + right) / 2);

//     // Check if the middle element is the target
//     if (arr[mid] === target) {
//         return mid;
//     }

//     // If the target is smaller than the middle element, search in the left half
//     if (target < arr[mid]) {
//         return binarySearch(arr, target, left, mid - 1);
//     }

//     // If the target is larger than the middle element, search in the right half
//     return binarySearch(arr, target, mid + 1, right);
// }

// // Testing the function with a few test cases
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));  // Output: 4
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));  // Output: 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));  // Output: 8
// console.log(binarySearch([], 5));                          // Output: -1
// console.log(binarySearch([5], 5));                         // Output: 0
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 6));        // Output: 2

// function countOccurrences(arr, target, index = 0) {
//     // Base case: if the index is equal to the array length, return 0
//     if (index === arr.length) {
//         return 0;
//     }

//     // Check if the current element is equal to the target
//     const countForThisElement = arr[index] === target ? 1 : 0;

//     // Recursive case: count occurrences in the rest of the array
//     return countForThisElement + countOccurrences(arr, target, index + 1);
// }

// // Testing the function with a few test cases
// console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3, 6], 3));  // Output: 3
// console.log(countOccurrences([1, 2, 3, 4, 5], 6));          // Output: 0
// console.log(countOccurrences([7, 7, 7, 7, 7], 7));          // Output: 5
// console.log(countOccurrences([], 5));                       // Output: 0
// console.log(countOccurrences([2, 4, 6, 8, 10, 4], 4));      // Output: 2
// console.log(countOccurrences([3, 3, 3, 3, 3, 3], 3));       // Output: 6
// console.log(countOccurrences([1, 3, 5, 7, 9], 1));          // Output: 1

// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

// Achievement:
// By the end of these activities, students will:

// · Understand and implement basic recursion.
// . Apply recursion to solve problems with arrays and strings.
// · Use recursion for searching and counting elements in arrays.
// · Perform tree traversal and calculate tree depth using recursion (optional).
console.log("/-----------------------------/");