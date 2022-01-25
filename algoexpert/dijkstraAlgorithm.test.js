// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!
const path = require('path');
const  { getFileNameToTest } = require('./getFileNameToTest');
const program = require(`./${getFileNameToTest(path.basename(__filename))}`);
const chai = require('chai');


it('Test Case #1', function () {
  const start = 0;
  const edges = [
    [[1, 7]],
    [
      [2, 6],
      [3, 20],
      [4, 3],
    ],
    [[3, 14]],
    [[4, 2]],
    [],
    [],
  ];
  const expected = [0, 7, 13, 27, 10, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #2', function () {
  const start = 1;
  const edges = [
    [],
    [],
    [],
    []
  ]
  const expected = [-1, 0, -1, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #3', function () {
  const start = 7;
  const edges = [
    [[1, 1],[3, 1]],
    [[2, 1]],
    [[6, 1]],
    [[1, 3],[2, 4],[4, 2],[5, 3],[6, 5]],
    [[5, 1]],
    [[4, 1]],
    [[5, 2]],
    [[0, 7]]
  ]
  const expected = [7, 8, 9, 8, 10, 11, 10, 0];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #4', function () {
  const start = 4;
  const edges = [
    [
      [1, 3],
      [2, 2]
    ],
    [
      [3, 7]
    ],
    [
      [1, 2],
      [3, 4],
      [4, 1]
    ],
    [],
    [
      [0, 2],
      [1, 8],
      [3, 1]
    ]
  ]
  const expected = [-1, 0, -1, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #5', function () {
  const start = 1;
  const edges = [
    [
      [1, 2]
    ],
    [
      [0, 1]
    ],
    [
      [3, 1]
    ],
    [
      [2, 2]
    ]
  ]
  const expected = [1, 0, -1, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});


