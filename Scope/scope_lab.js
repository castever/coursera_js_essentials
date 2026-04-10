// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
//Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const"
}

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

{
    var blockVar2 = "I'm a block-scoped var";
    let blockLet2 = "I'm a block-scoped let";
    const blockConst2 = "I'm a block-scoped const";

    blockVar2 = 1
    blockLet2 = "something different"
    // blockConst2 = "can't change"
}

blockVar2 = "var changed outside the block"; // implicit global variable in Sloppy Mode
blockLet2 = "let changed outside the block"; // implicit global variable in Sloppy Mode

console.log(blockLet2);
