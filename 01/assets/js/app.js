const a = '4.2';
const b = 9;

console.log(a, b);

console.log("const a: " + typeof a);
console.log("const b: " + typeof b);

const sum  = parseFloat(a) + b; //zamieniamy zmienną a z typu string na typ number
console.log("b + a = " + sum);
console.log(typeof sum);

const subtract = a - b; //zajdzie konwersja niejawna -> string - number = number
console.log("a - b = " + subtract);
console.log(typeof subtract);

const multiply = a * b; //zajdzie konwersja niejawna -> string * number = number
console.log("a * b = " + multiply.toFixed(1)); //toFixed(1) - zaokrąglamy do jedenego miejsca po przecinku
console.log(typeof multiply);

const divide = a / b; //zajdzie konwersja niejawna -> string / number = number
console.log("a / b = " + divide);
console.log(typeof divide);

const modulo = a % b; //zajdzie konwersja niejawna -> string % number = number
console.log("a % b = " + modulo);
console.log(typeof modulo)

sum > 20 ? console.log('Wynik SUMY jest większy od 20.') : console.log ('Wynik SUMY jest mniejszy od 20.');
subtract > 20 ? console.log ('Wynik RÓŻNICY jest większy od 20.') : console.log ('Wynik RÓŻNICY jest mniejszy od 20.');
multiply > 20 ? console.log ('Wynik MNOŻENIA jest większy od 20.') : console.log ('Wynik MNOŻENIA jest mniejszy od 20.');
divide > 20 ? console.log ('Wynik DZIELENIA jest większy od 20.') : console.log ('Wynik DZIELENIA jest mniejszy od 20.');
modulo > 20 ? console.log ('Wynik MODULO jest większy od 20.') : console.log ('Wynik MODULO jest mniejszy od 20.');