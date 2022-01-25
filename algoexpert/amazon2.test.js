const path = require('path');
const  { getFileNameToTest } = require('./getFileNameToTest');
const program = require(`./${getFileNameToTest(path.basename(__filename))}`);
const chai = require('chai');

it('Test Case #3', function () {
    const expected = 19;
    const actual = program.findPasswordStrength('test');
    chai.expect(actual).to.deep.equal(expected);
});