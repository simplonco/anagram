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
    var result = [];
    var res = this.word.split("").sort();
    for (var ii = 0; ii < words.length; ii++) {
        var elements = words[ii].split("").sort();
        if (elements.join() === res.join()) {
            result.push(words[ii]);
        } else {
           return "No Match";
        }

    }

};

module.exports = Anagram;
