//A// Anonymous function
const oddNumbers = function(numbers) {
    numbers.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  }
  
  // Usage
  oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // IIFE  

  (function(numbers) {
    numbers.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  //B// Anonymous

  const titleCaps = function(strings) {
    const capitalizedStrings = strings.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(capitalizedStrings);
  }
  
  // Usage
  titleCaps(['this', 'is', 'a', 'test']);

  //IIFE
  (function(strings) {
    const capitalizedStrings = strings.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(capitalizedStrings);
  })(['this', 'is', 'a', 'test']);

  //c//
  //anonymous

  const sum = function(numbers) {
    let total = 0;
    numbers.forEach(function(num) {
      total += num;
    });
    console.log(total);
  }
  
  // Usage
  sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //IIFE

  (function(numbers) {
    let total = 0;
    numbers.forEach(function(num) {
      total += num;
    });
    console.log(total);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //d//
  //anonymous

  const getPrimes = function(numbers) {
  const primes = [];
  numbers.forEach(function(num) {
    let isPrime = true;
    if (num === 1) {
      isPrime = false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  });
  console.log(primes);
}

// Usage
getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//IIFE

(function(numbers) {
    const primes = [];
    numbers.forEach(function(num) {
      let isPrime = true;
      if (num === 1) {
        isPrime = false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
    });
    console.log(primes);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  
  //e
//Anonymous
const medianOfSortedArrays = function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    const midIndex = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
      return (mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2;
    } else {
      return mergedArr[midIndex];
    }
  }
  
  // Usage
  console.log(medianOfSortedArrays([1, 3, 5], [2, 4, 6]));
//IIFE

(function(arr1, arr2) {
  const mergedArr = arr1.concat(arr2).sort(function(a, b) { return a - b; });
  const midIndex = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    console.log((mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2);
  } else {
    console.log(mergedArr[midIndex]);
  }
})([1, 3, 5], [2, 4, 6]);
//f
//amomymous
const medianOfSortedArrays = function(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 === 0
      ? (mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2
      : mergedArr[midIndex];
  };
  
  // Usage
  console.log(medianOfSortedArrays([1, 3, 5], [2, 4, 6])); // Output: 3.5
//IIFE
const medianOfSortedArrays = (function() {
    return function(arr1, arr2) {
      const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
      const midIndex = Math.floor(mergedArr.length / 2);
      return mergedArr.length % 2 === 0
        ? (mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2
        : mergedArr[midIndex];
    };
  })();
  
  // Usage
  console.log(medianOfSortedArrays([1, 3, 5], [2, 4, 6])); // Output: 3.5
  

//g
//anonymous
const removeDuplicates = function(arr) {
    const uniqueArr = [];
    arr.forEach(function(elem) {
      if (uniqueArr.indexOf(elem) === -1) {
        uniqueArr.push(elem);
      }
    });
    console.log(uniqueArr);
  }
  
  // Usage
  removeDuplicates([1, 2, 3, 3, 4, 5, 5, 6]);
//IIFE
(function(arr) {
    const uniqueArr = [];
    arr.forEach(function(elem) {
      if (uniqueArr.indexOf(elem) === -1) {
        uniqueArr.push(elem);
      }
    });
    console.log(uniqueArr);
  })([1, 2, 3, 3, 4, 5, 5, 6]);

  //h
  //anonymous
  const rotateArray = function(arr, k) {
    const rotatedArr = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArr);
  }
  
  // Usage
  rotateArray([1, 2, 3, 4, 5], 2);
//IIFE
(function(arr, k) {
    const rotatedArr = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArr);
  })([1, 2, 3, 4, 5], 2);
  
  
//do the following in arrow funtions
//print odd numbers
const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  }
//Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
    return arr.map(str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  }
//sum of all numbers in array
const sumArray = (arr) => {
    return arr.reduce((total, num) => total + num);
  }
//Return all the prime numbers
const isPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0) return false;
    }
    return num > 1;
  }
  
  const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
  }
//Return all the palindromes in an array
const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const getPalindromes = (arr) => {
    return arr.filter(str => isPalindrome(str));
  }
  