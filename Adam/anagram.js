//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
    this.word = word;
}

Anagram.prototype.matches = function(words) {
    var matches = [];

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];

        if (currentWord.length == this.word.length && currentWord != this.word) {
            var currentWordLetters = currentWord.split('').sort();
            var matchingWordLetters = this.word.split('').sort();

            var isMatch = true;

            for (var j = 0; j < currentWordLetters.length; j++) {
                if (currentWordLetters[j] != matchingWordLetters[j]) {
                    isMatch = false;
                }
            }

            if (isMatch) {
                matches.push(currentWord);
            }
        }

    }
    return matches;
};


module.exports = Anagram;
