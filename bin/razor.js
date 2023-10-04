#! /usr/bin/env node

'use strict';

let [...cmd] = process.argv.slice(2);


let options = cmd.filter(isFlag)

function isFlag([ch]){
    return ch == '-'    
}

console.log(options)