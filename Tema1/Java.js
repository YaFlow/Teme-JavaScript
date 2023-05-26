

const varsta = 25;
const cantitate = "25kg";
let initialValues = ["Florin", "Bogdan", 12, 15, true, false, true, false, undefined, varsta];
const otherValues = ["Avioane", "Masini", 100, 1234, true, undefined, cantitate, [24, 25, 29]];
initialValues.push(otherValues);

console.log(initialValues);//am afisat in consola cele 2 tipuri de valori pe care le am construit
console.log(otherValues);//am afisat in consola cele 2 tipuri de valori pe care le am construit

const primul = initialValues.find((Element) => Element === 12);//am selectat elementul numar din sir
 
const aldoilea = initialValues.find((Element) => Element === 15);//am selectat elementul numar din sir 
console.log(primul);//am afisat numarul selectat
console.log(aldoilea);//am afisat numarul selectat

let a = primul;//m-am complicat asa, mi am dat seama ca puteam sa nu mai scriu cele 2 let-uri si la suma doar sa fac suma dintre primul si al doilea.
let b = aldoilea;
let sum = a + b;    //am facut suma celor 2 numerele selectate mai sus
console.log(sum);//am afisat suma celor 2 numerele selectate mai sus din sir

console.log(Math.pow(a, b));//am facut ridicarea la putere dintre cele 2 numere si am si afisat-o in acelasi timp

let inmultire = (a + 5) * b;//am facut un mic cacul folosit cele 2 numere
console.log(inmultire);//am afisat valoarea inmultirii

console.log(Math.exp(a));//am facut ridicarea la putere a exponentului cu valoarea lui a

initialValues[2] = sum;//am schimbat valoarea din sir a primului numar cu valoarea sumei mentionate mai sus
initialValues[3] = inmultire;//am schimbat valoarea din sir al numarului secund cu valoarea inmultirii mentionate mai sus

const concatenare1 = initialValues[0].concat(" Happy Coding");
const concatenare2 = initialValues[1].concat(" Happy Coding");
console.log(concatenare1);
console.log(concatenare2);

initialValues[4] = !initialValues[4];
initialValues[5] = !initialValues[5];
initialValues[6] = !initialValues[6];
initialValues[7] = !initialValues[7];


console.log(initialValues);
console.log(otherValues);




