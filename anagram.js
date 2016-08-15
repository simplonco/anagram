//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
  if(typeof(words) === "string") {
  	// areAnagrams(words, this.word) ? return words: return '';
  	if(areAnagrams(words, this.word)) {
  		console.log(this.word);
  		console.log(words);
  		console.log(areAnagrams(words, this.word));
  		return [words];
  	}
  }
  else {
  	return words.filter(function(word) {
    return areAnagrams(this.word, word);
  }, this);	
  }
  return words.filter(function(word) {
    return areAnagrams(this.word, word);
  }, this);
};

function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  return word1 !== word2 && haveSameLetters(word1, word2);
}

function haveSameLetters(word1, word2) {
  return sorted(word1) == sorted(word2);
}

function sorted(str) {
  return str.split('').sort().join('');
}

module.exports = Anagram;
