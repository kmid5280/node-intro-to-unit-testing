const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    it('should take a number and return \'fizz\' if number is divisible by 3, \'buzz\' if number is divisible by 5, and \'fizz-buzz\' if number is divisible by both 3 and 5', function() {
        const normalCases = [
            {a: 3, expected: 'fizz'},
            {a: 5, expected: 'buzz'},
            {a: 15, expected: 'fizz-buzz'}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect answer.to.equal(input.expected);
        })
    })
})

it ('should raise error if input not number', function () {
    const badInputs = ['a', '$', '!']
    badInputs.forEach(function(input) {
        expect(function() {
            fizzBuzzer(input);
        }).to.throw(Error);
    })
})