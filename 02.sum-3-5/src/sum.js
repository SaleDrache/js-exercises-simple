/**
 * Write a function that sums the numbers from 1 to n, but only multiples
 * of three or five are considered in the sum,
 * e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
 *
 * n cannot be negative in this excersise.
 */
var Sum = function() {
  'use strict';

  function sumNumbers35(n) {

  	if (n < 0) {
  		throw 'No negative numbers allowed';
  	}

  	for (var i = 0, sum = 0; i <= n; i++) {
  		if (i % 3 === 0 || i % 5 === 0) {
  			sum += i;
  		}
  	}

  	return sum ;

  }

  return {
    sumNumbers: sumNumbers35
  };
};