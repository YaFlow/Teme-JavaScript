//1. verificati daca toate elementele unui array sunt numere pare folosind metoda every

// const sirpar = (sir) => sir % 2 == 0; //asa verificam daca sirul este sau nu par

// let elemente1 = [2, 4, 5, 7, 8, 9, "Florin", true, null];
// let elemente2 = [2, 4, 6, 8, 10];

// console.log(elemente1.every(sirpar));
// console.log(elemente2.every(sirpar));

// function isPar( numar)
// {
//     return numar % 2 == 0;
// }

// console.log(elemente2.every(isPar));


//2.folosind forEach, afisati toate elementele unui array
// let elemente1 = [2, 4, 5, 7, 8, 9, "Florin", true, null];
// let elemente2 = [2, 4, 6, 8, 10];

// elemente1.forEach(element => console.log(element));
// elemente2.forEach(element => console.log(element));

//3.folosind reduce, adunati toate numerele dintr-un array

// let elemente2 = [2, 4, 6, 8, 10];
// const valoareinitiala = 0;
// const sumWithInitial = elemente2.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     valoareinitiala
//   );
  
//   console.log(sumWithInitial);
