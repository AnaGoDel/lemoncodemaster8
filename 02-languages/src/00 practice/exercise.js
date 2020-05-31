console.log("************** PRACTICE *********************");
// console.log("Use folder 00 practice to practice with homework exercises");
// console.log("You can add new files as long as they are imported from index.ts");
/*     Biggest Word     */
/* Crea una función que reciba una frase en formato string y 
devuelva la palabra más larga.En caso de haber varias con longitud 
máxima que devuelva siempre la primera.Ten en cuenta que consideramos 
una palabra a aquello que esté separado por espacios. */

function biggestWord(phrase) {
    const words = phrase.split(' ');
    return words.reduce((acc, word) => {
        return (word.length > acc.length) ? word : acc;
    }, "");
}

// Ejemplo:
console.log(" function biggestWord:")
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
console.log("---------------------------------")

/*     Values     */
/* Escribe una función que devuelva una lista de valores de todas 
las propiedades de un objeto: */

function values(obj) {
    const arr = [];
    for (const key in obj) {
        if (typeof (obj[key]) !== "function") arr.push(obj[key]);
    }
    return arr;
}

// Ejemplo:
console.log("function values:")
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john));
console.log("---------------------------------")


/*     Califications     */
/*Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:
Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4 */

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const calculateAvarage = (classResults) => {
    const resultsArray = values(classResults);
    const sum = resultsArray.reduce((acc, mark) => acc + mark, 0);
    return sum / resultsArray.length;
}

function printAverage(classResults) {
    return console.log(calculateAvarage(classResults));
}

console.log("function printAverage:")
printAverage(eso2o);
console.log("---------------------------------");

/*     Check Arguments     */
/* Resumir la siguiente función: 
function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
}*/
function f(input) {
    return ((input != undefined) || (input != null)) ? input : ((input === null) ? "" : "Unknown");
}

console.log("function null??undefine??");
console.log("Undefined: " + f(undefined));
console.log("Null: " + f(null));
console.log("Soy un string guay: " + f("Soy un string guay"));
console.log("---------------------------------");

/*     Dices     */
/*Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto
a estos datos, métodos que implementen la siguiente funcionalidad:
    * Hacer reset, poner a undefined o null ambos resultados.
    * Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
    * Imprimir el resultado por consola. Ten en cuenta lo siguiente:
        - Informa al usuario que debe tirar primero cuando corresponda.
        - Si saca doble 6, ¡dale un premio! */

function dices() {
    var diceA = undefined;
    var diceB = undefined;
    return {
        reset: function () {
            diceA = undefined;
            diceB = undefined;
        },
        roll: function () {
            diceA = Math.floor((Math.random() * 6) + 1);
            diceB = Math.floor((Math.random() * 6) + 1);
        },
        print: function () {
            if ((diceA === undefined) || (diceB === undefined)) {
                console.log("You may roll the dices first!");
            } else if ((diceA == 6) && (diceB == 6)) {
                console.log("Double 6!! HURRA! YOU WON!!");
            } else {
                console.log(`${diceA} and ${diceB}... Try again!`);
            }
        }
    }
}

console.log("function dices");
var game = dices();
game.roll();
game.print();
game.reset();
game.print();
console.log("---------------------------------");

/*     Includes     */
/*En ES7 ya existe una función de manejo de arrays llamada 
Array.includes() que indica si un determinado valor figura 
entre los items de un array dado. Crea una función en ES5 
con el mismo comportamiento, es decir, una función que reciba 
un array y un valor y devuelva un boolean indicando si el 
valor está dentro del array. */

function includes(array, value) {
    return array.indexOf(value) >= 0 ? true : false;
}

// Ejemplo:
console.log("function includes");
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
console.log("---------------------------------");

/*     Reverse Text     */
/* Dado un texto cualquiera, invierte el orden de las palabras*/

function reverseText(text) {
    return text.split(' ').reverse().join(' ');
}

console.log("function reverseText");
console.log(reverseText("Uno dos tres"));
console.log(reverseText("Soy Ana Gomez y estoy estudiando"));
console.log("---------------------------------");

/*     Subsets     */
/* Escribe una función que acepte un string como argumento y 
devuelva todas las partes finales de dicha palabra*/

function subsets(word) {
    let result = [];
    for (let i = 1; i < word.length; i++) {
        result.push(word.slice(i, word.length));
    }
    return result;
}

// Ejemplo
console.log("function subsets");
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
console.log("---------------------------------");

function subsetsChallenge(word) {
    // return word.map((letter, i) => console.log(""));
}

// Ejemplo
console.log("function subsetsChallenge");
console.log(subsetsChallenge("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
console.log("---------------------------------");

/*     ZZCrypt     */
// Descifra el siguiente secreto:
var secret =
    "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    var decryptedWord = "";
    for (let i = 0; i < secret.length; i++) {
        decryptedWord += plain.charAt(cipher.indexOf(secret[i]));
    }
    return decryptedWord;
}

// Ejemplo
console.log("function decrypt");
console.log(decrypt(secret));
console.log("---------------------------------");

/*     Zip     */
/*Crea una función zipObject tal que acepte un array de 
claves como primer argumento y un array de valores como 
segundo argumento y cuyo objetivo sea crear un objeto 
uniendo las claves con sus valores. Asumir que el array 
de claves tiene como mínimo la misma longitud que el de valores: */

function zipObject(keys, values) {
    let obj = {};
    values.map((value, i) => { obj[keys[i]] = value });
    return obj;
}

// Ejemplo
console.log("function Zip");
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"]));
console.log(zipObject(["spanish", "english", "french"], ["hola"]));
console.log("---------------------------------");

