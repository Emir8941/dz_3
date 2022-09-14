// const num1 = prompt('Введите число');
// const num2 = prompt('Введите второе число');

function f1(num1, num2){
    if (num1 < num2){
        alert(num1 + ' меньше');
    } else if (num2 < num1){
        alert(num2 + ' меньше');
    } else {
        alert('равны');
    }
}

// f1(num1,num2);

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5, 6];

function toMass (a, b) {
    if (a.length >= b.length) {
        console.log(' меньше');
    } else if (a.length <= b.length){
        console.log( 'больше');
    }
}

toMass(a,b);

function countChar(){
    let text = 'nestle';
    console.log(text.length);
}
countChar();