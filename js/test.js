

const test = function () {
    let a = [1,2,3,4,5];
    a = a.map((value) => ++value)
    return function plus(){
        a = a.map((value) => ++value)
        console.log(a)
    }
}

let b = test();
b();
b();
b();
