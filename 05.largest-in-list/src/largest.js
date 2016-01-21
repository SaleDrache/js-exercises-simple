/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {

  	if (list.length === 0) {
  		throw 'List cannot be empty.' ;
  	}

  	var maxNum = list[0];

  	for (var i = 0, listSize = list.length; i < listSize; i++) {
  		if (list[i] > maxNum) {
  			maxNum = list[i];
  		}
  	}

  	return maxNum;

  }

  return {
    findLargest: findLargest
  };
};