console.log(module);                // Shows the module object for this file
console.log(__filename);            // Full path + filename of the current file
console.log(__dirname);             // Directory path of the current file
console.log(exports === module.exports); // true (they point to the same object by default)

const mod=require('./test');
mod.direSalut();