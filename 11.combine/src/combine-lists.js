/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {

  	var newList = [];
  	var longerListSize;

  	(list1.length > list2.length) ? longerListSize = list1.length : longerListSize = list2.length;

  	for (var i = 0; i < longerListSize; i++ ) {
  		
  		if (list1.length > i) {
  			newList.push(list1[i]);
  		}
  		if (list2.length > i) {
  			newList.push(list2[i]);
  		}
  	}

  	return newList;


  }

  return {
    combine: combine
  };
};