console.log("************** DELIVERABLE 01 *********************");
console.log("*     ARRAY APERATIONS     *");

/*     head     */
/*Implementa una función llamada head tal que, dado un array como 
entrada, devuelva el primer elemento. */

function head<T>(arr: T[]) {
    const [first, ...rest] = arr;
    return first;
}

// Ejemplo
console.log("function head");
console.log(head(["dog", "cat", "rabbit"]));
console.log("---------------------------------");

/*     tail     */
/*Implementa una función llamada tail tal que, dado un array como 
entrada, devuelva un nuevo array con todos los elementos menos 
el primero.*/

function tail<T>(arr: T[]) {
    const [first, ...tailItems] = arr;
    return tailItems;
}

// Ejemplo
console.log("function tail");
console.log(tail(["Spain", "Portugal", "France", "United Kingdom"]));
console.log("---------------------------------");

/*     init     */
/* Implementa una función init (inmutable), tal que, dado un 
array como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype. */

const init = <T>(arr: T[]) => {
    return arr.slice(0, arr.length - 1);
};

console.log("function init");
console.log(init(["Uno", "Dos", "Tres"]));
console.log("---------------------------------");

/*     last     */
/* Implementa una función last (inmutable), tal que, dado un array 
como entrada devuelva el último elemento. */
const last = <T>(arr: T[]) => {
    // return arr.reduceRight(acc => acc);
    // return arr.slice(arr.length - 1);
    return arr[arr.length - 1];
};

console.log("function last ");
console.log(last(["spanish", "english", "french"]));
console.log("---------------------------------");