console.log("************** DELIVERABLE 03 *********************");
console.log("*     CLONE/MERGE     *");

/*     Clone     */
/* Implementa una función clone que devuelva un objeto clonado a partir de otro: */

function clone(source) {
    return [...source]
}

console.log("function clone");
const arrA = ["Hey", "Ho", "Let`s go!"];
const arrB = clone(arrA);
console.log("---------------------------------");

/*     Merge     */
/* Dados dos objetos cualesquiera, implementa una función merge 
que mezcle uno sobre otro.El objeto resultante debe ser la mezcla 
de las propiedades del objeto source sobre las del objeto target. */

function merge(source, target) {
    return { ...target, ...source }
}

// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log("function merge");
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log("---------------------------------");