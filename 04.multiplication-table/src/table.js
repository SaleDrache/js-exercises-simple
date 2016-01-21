/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {

  	var n = 5;
  	var table = [];
  	for (var i = 0; i<=n ; i++) {
  		table[i] = [];
  	}

  	table[0][0] = 0;

  	for (var i = 1; i<=n ; i++) {

  		table[0][i] = i;
  		table[i][0] = i;

  		for (var j = 1 ; j<=i ; j++) {
  			table[i][j] = table[i][0] * table[0][j];
  			table[j][i] = table[i][j];
  		}
  	}

  	return table;

  }

  return {
    generate5: generate5
  };
};