/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {

  	var newList = [];

  	for (var i = 0, listSize = list.length; i < listSize; i++ ) {
  		newList[i] = f(list[i]);
  	}

  	return newList;

  }

  return {
    applyFunction: applyFunction
  };
};