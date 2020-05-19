/*
PROBLEM:
Write a function to check whether an input string is a valid IPv4 address or
IPv6 address or neither.

INPUT: string
OUTPUT: The string value 'IPv4', 'IPv6', or 'Neither'

RULES:
- IPv4 consist of 4 decimal numbers sperated by '.' ranging from 0-255
- Leading 0's in the decimal are invalid in IPv4
- IPv6 consist of 8 groups of 4 hexadecimal digits seperated by ':'
- Can include upper-case letters and leading zeros in IPv6

ASSUMPTIONS: there is no extra space or special characters in the input string.

TEST CASES:
console.log(validIPAddress('172.16.254.01') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'Neither');

ALGORITHM:
1. Define isValidIPv4 function with a parameter
   a. split string along the delimiter "."
   b. If argument includes alphabet return 'Neither'
   c. IF length of split string !== 4, return 'Neither'
   d. ITERATE through the split string
       i. IF current substring > 255 OR includes leading 0 return 'Neither'
   e. return ''IPv4"

2. Define isValidIPv6 function with a parameter
   a. split string along the delimiter ":"
   b. IF length of split string !== 8, return 'Neither'
   c. ITERATE through the split string
       i. IF current substring length > 4 return 'Neither'
   d. return ''IPv4"

3. IF string includes both "." && ':', return 'Neither'
   ELSE IF string includes ".", invoke isValidIPv4 function with the string as an argument
   ELSE IF if string includes ":" invoke isValidIPv6 function with the string as an argument
   ELSE return 'Neither'
*/

function validIPAddress(IP) {
  if (IP.indexOf('.') !== -1 && IP.indexOf(':') !== -1) {
    return 'Neither';
  } else if (IP.indexOf('.') !== -1) {
    return isValidIPv4(IP);
  } else if (IP.indexOf(':') !== -1) {
    return isValidIPv6(IP);
  } else {
    return 'Neither';
  }
}

function isValidIPv4(IP) {
  let decimals = IP.split('.');

  if (/[a-z]/gi.test(IP)) { return 'Neither' };
  if (decimals.length !== 4) {return 'Neither'};

  for (let i = 0; i < decimals.length; i += 1) {
    if (!decimals[i] || decimals[i] > 255 || decimals[i].indexOf('0') === 0) { return 'Neither'; }
  }

  return 'IPv4';
}

function isValidIPv6(IP) {
  let hexadecimals = IP.split(':');

  if (hexadecimals.length !== 8) {return 'Neither'}

  for (let i = 0; i < hexadecimals.length; i += 1) {
    if (!hexadecimals[i] || hexadecimals[i].length > 4) {return 'Neither'}
  }

  return 'IPv6';
}

console.log(validIPAddress('172.16.254.01') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334') === 'Neither');
console.log(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'Neither');
