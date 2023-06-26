// alert("Aici incep exercitiile de JS");
// console.log("Exercitii Javascript.")
//1.Folosid for scrieti un program care logheaza la consola toate numerele de la 1 la 100.Modificati l astfel incat sa logheze doar numerele pare.

// for (let i = 0; i < 100; i++) {

//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//2.Folosid while scrieti un program care logheaza la consola toate numerele de la 1 la 100.Modificati l astfel incat sa logheze doar numerele impare.

// let i = 1;
// while (i < 100) {
//     console.log(i);
//     i=i+2;
// }

//3.Folosid do-while scrieti un program care logheaza la consola toate numerele de la 1 la 100.Modificati l astfel incat sa sa logheze mesaje diferite pentru numerele pare si mesaje diferite pentru numerele impare.
// let i=0;
// do{
//     if(i%2==0){
//         console.log("numarul este par");
//         console.log(i);
//     }
//     else{
//         console.log("numarul este impar");
//         console.log(i);
//     }
//     i++;
// }while(i<100);


// FUNCTII!!


//4.Creati o functie care printeaza "Hello world!" la consola.Modificati o astfel incat acest mesaj sa fie configurabil.

// function salut(name) {
//     console.log(`Hello ${name}!`);
// }
// salut("world!");
// salut("Tuturor!");
// salut(prompt("Please enter your name"));
// console.log("Merge");

//5.Creati o functie care calculeaza si returneaza media aritmetica a doua numere.

// function medieFn(a, b) {
//     return (a + b) / 2;
// }
// let medie = medieFn(7, 8);
// console.log(medie);

//6.Creati o functie care primeste ca argumente 2 numere naturale si il returneaza pe cel mai mic dintre ele

// function minFn(a, b) {
//     if (a < b) {
//         console.log(a);
//     }
//     else if (a > b) {
//         console.log(b);
//     }
//     else {
//         console.log("Numerele sunt egale");
//     }
//     return (a >= 0.0 && b >= 0.0) && (Math.floor(a) === a && Math.floor(b) === b ) && a !== Infinity  && b !== Infinity;
// }
// let mic = minFn(1, 4);
// console.log(mic);

//7. Creati o functie care primeste baza si exponentul  ca argumente si returneaza rezulatul ridicarii bazei la puterea specifica.

// function ridicare(a, b) {

//     return console.log(Math.pow(a, b));
// }

// ridicare(prompt("introdu primul numar"), prompt("introdu al doilea numar"));

//8.Creati o functie care are 2 parametri.Primul parametru este un sir de caractere , iar cel de al doilea  este un caracter.Numarati de cate ori 
//apare al doilea parametru in string-ul din primul parametru.

// let primulcaracter = "FlorinFlorinFlorinFlorin";
// let aldoileacaracter = "i";

// function aparitie(nume) {
//     let curent = 0;
//     for (let i = 0; i < nume.length; i++) {
//         if (nume[i].includes('i')) {
//             curent = curent + 1;
//         }
//     }
//     // console.log(primulcaracter.search(aldoileacaracter));
//     console.log(curent);
//     return curent;

// }
// aparitie(primulcaracter);

//9.Creati o functie care converteste temperatura din grade celsius in grade Fahrenheit. Modificati o astfel incat sa suporte si conversia inversa.
// function temperatura(grade) {
//     if (grade.includes("c")) {
//         const singur = grade.slice(0, -1);
//         let Fah = (singur * 9 / 5) + 32;
//         return Fah + "°F";
//     }
//     else if (grade.includes("f")) {
//         const singur = grade.slice(0, -1);
//         let Cel = (singur - 32) * 5 / 9;
//         return Cel + "°C";
//     }
// }
// // console.log(Fah + "°F");
// // console.log(Cel + "°C");
// let afis=temperatura(prompt());
// console.log(afis);


//10.Creati o functie care primeste ca argument un numar.Verificati daca acesta este palindrom.


// function Palindrome(numar) {
//     let str = numar.toString();
//     let invers = str.split('').reverse().join('');
//     if (str === invers) {
//         return "Este palindrom";
//     } else {
//         return "Nu este palindrom";
//     }
// }
// console.log(Palindrome(prompt("introdu numarul")));

// 11.Creati o functie care primeste ca argument in sir de caractere.Returnati un nou sir in care fiecare cuvant este scris cu prima litera majuscula.

// function majuscula(cuvant) {
//     return cuvant.charAt(0).toUpperCase() + cuvant.slice(1);
// }
// function sir(propozitie) {
//     let cuvinte = propozitie.split(" ");
//     let rezultat = "";
//     for (let i = 0; i < cuvinte.length; i++) {
//         rezultat = rezultat + " " + majuscula(cuvinte[i]);
//     }
//     return rezultat;
// }
// console.log(sir(prompt("introdu cuvantul")));

// function insertElementIntoDOM(tag, id, text) {
//     const element = document.createElement(tag); 
//     element.id = id; 
//     element.textContent = text; 
  
//     const target = document.getElementById('targetElement'); 
//     target.appendChild(element);
//   }
//   insertElementIntoDOM('parola', 'myParagraph', 'Hello, World!!!');