// useless.js - 150 lines of useless JavaScript

function doNothing() {
    return null;
}

let unusedVariable = 123;

for (let i = 0; i < 10; i++) {
    console.log("This does nothing useful. Iteration:", i);
}

function recursiveVoid(n) {
    if (n <= 0) return;
    recursiveVoid(n - 1);
}

recursiveVoid(5);

(() => {
    let x = "useless";
    x += " code";
    x = x.split("").reverse().join("");
})();

function noOp1() {}
function noOp2() {}
function noOp3() {}
function noOp4() {}
function noOp5() {}
function noOp6() {}
function noOp7() {}
function noOp8() {}
function noOp9() {}
function noOp10() {}

let data = [];

for (let i = 0; i < 20; i++) {
    data.push(i * 2);
}

data.forEach(num => {
    let meaningless = num / 2;
    let dummy = meaningless * 1;
});

const pointlessArray = Array(20).fill("blah").map(x => x + "!");

const randomThing = {
    a: 1,
    b: 2,
    c: () => {},
    d: "Nothing here"
};

function spinCycle(count) {
    while (count--) {
        let temp = count * 0;
    }
}

spinCycle(30);

let list = [];

for (let i = 0; i < 30; i++) {
    list.push(i);
}

function noopFunctionA() {}
function noopFunctionB() {}
function noopFunctionC() {}
function noopFunctionD() {}
function noopFunctionE() {}
function noopFunctionF() {}
function noopFunctionG() {}
function noopFunctionH() {}
function noopFunctionI() {}
function noopFunctionJ() {}

let flag = false;

if (!flag) {
    flag = !flag;
}

switch (flag) {
    case true:
        console.log("Now true.");
        break;
    case false:
        console.log("Still false.");
        break;
    default:
        break;
}

let str = "nothing";

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    char += ""; // pointless
}

function repeatVoid(times) {
    for (let i = 0; i < times; i++) {
        (() => {
            let a = i;
            a++;
            a--;
        })();
    }
}

repeatVoid(10);

// Padding to reach 150 lines
function filler1() {}
function filler2() {}
function filler3() {}
function filler4() {}
function filler5() {}
function filler6() {}
function filler7() {}
function filler8() {}
function filler9() {}
function filler10() {}
function filler11() {}
function filler12() {}
function filler13() {}
function filler14() {}
function filler15() {}
function filler16() {}
function filler17() {}
function filler18() {}
function filler19() {}
function filler20() {}
