{
    var glob = 10;
    let loc = 15;
    const post = 20;
}

glob = 20 
console.log(glob);
fun();

function fun(){
    console.log('function');
};

const arrow = (a = 0) => {
    console.log('arrow function',a);
}

arrow();

const mas = (...spreand) => {
    return spreand;
}
console.log(mas(1,5,3,9,10,12));

let m = [1,2,32,45,2];

const foo = ()=> {
    return [1,2,3]
}

let [a,b,c] = foo();
console.log(a + 1,b - 1,c * 3);



let mar = [1,3,5,7,9];

let [a1,a2,a3,a4,a5] = mar;

console.log(a1 + 1);
console.log(a2 - 3);
console.log(a3 * 5);
console.log(a4 / 7);
console.log(a5 % 9);

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
let { x: d, y: e, z: f } = bar();
console.log(d + 1,e - 2,f * 3); 

let obj ={fir: 1,sec: 2,therd: 3}
let {fir: fir1,sec: sec1,therd: therd1} = obj

console.log(fir + 1,sec - 1,third * 2);

let num = 10;

console.log('sadsa',num,'sadadsa');

console.log(`sadaf ${num}sasasac`);

