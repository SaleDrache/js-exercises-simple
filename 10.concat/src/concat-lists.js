/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {

  	var newList = list1;

  	for (var i = 0, list2Size = list2.length; i < list2Size; i++ ) {
  		newList.push(list2[i]);
  	}

  	return newList;

  }

  return {
    concatenate: concatenate
  };
};