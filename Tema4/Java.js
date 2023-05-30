alert("Salut, asta este tema 4");
console.log("aici este tema 4");


let firstSentence = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.';
let secondSentence = 'Mihai castiga 5000 euro/luna din salariu, 10000 lei/an bonus si 500 usd/luna din freelancing.';
function suma(text) {
    let curent = 0;
    let culegere = 0;
    let strArr = text.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        if (!isNaN(strArr[i])) {

            if (strArr[i + 1].includes('euro')) {
                curent = parseInt((strArr[i]) / 4.7);
            }
            else if (strArr[i + 1].includes('usd')) {

                curent = parseInt((strArr[i]) / 4.2);
            }
            else if (strArr[i + 1].includes('gbp')) {

                curent = parseInt((strArr[i]) / 5.5);
            }
            else {
                curent = parseInt(strArr[i]);
            }

            if (strArr[i + 1].includes('luna')) {
                culegere = curent * 12 + culegere;
            }
            else {
                culegere = curent + culegere;
            }

        }
    }
    console.log(strArr);
    return culegere;
}

console.log(suma(firstSentence));
console.log(suma(secondSentence));

