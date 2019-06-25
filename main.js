let inp1 = document.querySelector('.input1');
let inp2 = document.querySelector('.input2');
let outRez = document.querySelector('.out');
let plusBut = document.querySelector('.plus');
let minusBut = document.querySelector('.minus');
let divlsBut = document.querySelector('.divls');
let multBut = document.querySelector('.mult');

let calc = {
    value1: inp1,
    value2: inp2,
    plus: funcPlus,
    minus: funcMinus,
    mult: funcMult,
    divls: funcDivls
};

function funcPlus() {
    return outRez.value = Number(this.value1.value) + Number(this.value2.value);
};

function funcMinus() {
    return outRez.value = Number(this.value1.value) - Number(this.value2.value);
};

function funcMult() {
    return outRez.value = Number(this.value1.value) * Number(this.value2.value);
};

function funcDivls() {
    if (Number(this.value1.value) >= Number(this.value2.value)) {
        return outRez.value = Number(this.value1.value) / Number(this.value2.value);
    } else {
        return outRez.value = Number(this.value2.value) / Number(this.value1.value);
    }
};

plusBut.addEventListener('click', function() {
    calc.plus();
    inp1.value = calc.plus();
    inp2.value = ''
});
minusBut.addEventListener('click', function() {
    calc.minus();
    inp1.value = calc.minus();
    inp2.value = ''
});
multBut.addEventListener('click', function() {
    calc.mult();
    inp1.value = calc.mult();
    inp2.value = ''
});
divlsBut.addEventListener('click', function() {
    calc.divls();
    inp1.value = calc.divls();
    inp2.value = ''
});


// let inp = document.querySelector('input');
// let but = document.querySelector('button');

// but.addEventListener('click', function() {

//     let bod = document.querySelector('body');
//     let div2 = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let ol = document.createElement('ol');
//     let li = document.createElement('li');
//     let but1 = document.createElement("button");
//     let alldiv = document.querySelectorAll('div');


//     but1.value = "-";
//     but1.innerHTML = but1.value;
//     div2.className = 'inrow';
//     h2.className = 'h2';
//     h2.innerHTML = inp.value;
//     for (let i = 1; i <= alldiv.length; i++) {
//         li[i] = i + 1;
//         console.log(li[i]);
//     }
//     bod.appendChild(ol);
//     ol.appendChild(li);
//     li.appendChild(div2);
//     div2.appendChild(h2);
//     div2.appendChild(but1);
//     but1.addEventListener('click', function() {
//         div2.remove();
//         li.remove();
//     })
// })

// CW
// var a = 6;
// let b = 5;
// for (var i = 0; i > 2; i++) {}
// if (true) {
//     console.log(a);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i, j);
//     }
// }

// let kachok = {
//         name: 'Serega',
//         surname: 'Car',
//         fullname: function() {
//             console.log(this.name, this.surname);
//         }
//     }
//     // kachok.fullname();
// let a = kachok;
// kachok.name = 123;
// kachok = null;
// console.log(a.name);
// // kachok = null;
// // a.fullname();