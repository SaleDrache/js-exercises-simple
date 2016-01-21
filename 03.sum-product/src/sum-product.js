/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';

  function calculate(n, opts) {

  	if ( (opts.mode !== "sum") && (opts.mode !== "product") ) {
  		throw 'Invalid calculation mode.'; 
  	}

  	if (opts.mode === "sum") {
  		
  		for (var i = 1, sum = 0; i <= n; i++) {
  			sum += i;
  		}
  		return sum;

  	} else {

  		for (var i = 1, prod = 1; i <= n; i++) {
  			prod *= i;
  		}
  		return prod;

  	}

  }

  return {
    calculate: calculate
  };
};