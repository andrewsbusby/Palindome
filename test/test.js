let assert = require("assert");
let phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        it("should return false for a non-palindrome", funciton() {
            let nonPalindrome = new Phrase("apple"),
            assert(!nonPalindrome.palindrome());
        });
        it("should return true for a plain palindrome", function() {
            let plaindPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });
        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new phrase("RaceCar");
            assert(mixedCase.palindrome());
        });
        it("should return true for a palindrome with punctuation", funtion() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam."),
            assert(_punctuatedPalindrome.palindrome());
        });
        
    });
});