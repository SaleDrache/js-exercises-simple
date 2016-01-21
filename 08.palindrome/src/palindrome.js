/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {
  'use strict';

  function is(word) {
  	
  	for (var i = 0, wordSize = word.length; i < wordSize; i++ ) {

  		if ( word.charAt(i) !== word.charAt(wordSize-i-1) ) {
  			return false ;
  		}
  		
	}

	return true;

  }

  return {
    is: is
  };
};