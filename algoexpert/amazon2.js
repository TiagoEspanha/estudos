

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'findPasswordStrength' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING password as parameter.
 */

function calculateSubstringStrength(substring) {
    console.log('substring', substring)
    if (substring.length === 1)
        return 1;
    
    const charsVisited = {};
    let strength = 0;
    for ( let currentIndex = 0; currentIndex < substring.length; currentIndex++) {
        const currentChar = substring.charAt(currentIndex);
        if (!charsVisited.hasOwnProperty(currentChar)){
            charsVisited[currentChar] = true;
            strength += 1;
        }    
    }

    return strength;
}


function findPasswordStrength(password) {
    // Write your code here
    let passwordStrength = 0;
    for (let substringSize = 1; substringSize <= password.length; substringSize++) {
        for (let substringStartingAt = 0; substringStartingAt + substringSize <= password.length; substringStartingAt++) {
            const substring = password.substring(substringStartingAt, substringStartingAt + substringSize)            
            passwordStrength += calculateSubstringStrength(substring)
        } 
    }
    return passwordStrength;
}



exports.findPasswordStrength = findPasswordStrength;