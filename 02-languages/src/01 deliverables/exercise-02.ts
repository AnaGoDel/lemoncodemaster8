console.log("************** DELIVERABLE 02 *********************");
console.log("*     CONCAT     *");

/*     Concat Simple    */
/* Implementa una función concat, tal que, dados 2 arrays 
como entrada, devuelva la concatenación de ambos. Utiliza rest / spread. */

const concat = <T, G>(a: T[], b: G[]) => [...a, ...b];

console.log("function concat");
console.log(concat([1, 2, 3], ["let's", "go!"]));
console.log("---------------------------------");

/*     concatMulti     */
/* Repite el ejercicio anterior suponiendo cualesquiera arrays de 
entrada (no te limites solamente a 2). */

const concatMulti = (...arr: any[][]) => arr.reduce((acc: any[], el: any[]) => concat(acc, el), []);

console.log("function concatMulti");
console.log(concatMulti(["hey", "you"], [1, 2, 3], ["let's", "go!"]));
console.log("---------------------------------");
