/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {

  	if (n < 0) {
  		n = -n;
  		var negativeNum = true;
  	}

  	for (var i = 0, sum = 0; i <= n; i++) {
  		sum += i;
  	}

  	if (negativeNum) {
  		return -sum ;
  	} else {
  		return sum ;
  	}


  }

  return {
    sumNumbers: sumNumbers
  };
};