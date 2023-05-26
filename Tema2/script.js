
let vehicul = prompt("Te rog introduce tipul autovehiculului.(masina/motocicleta/camion/autobuz");
let capacitate = prompt("Te rog introduce capacitatea cilindrica al autovehiculului.");
// let a=Math.floor(999);
// let b=Math.floor(1200);
// switch(true){
//     case capacitate>100 && capacitate<1000:{
//         alert("Capacitatea ta cilindrica este intre 900 si 1000: Ai de platit 40 de lei!");
//         break;
//     }
//     case capacitate>1001&& capacitate<1200:{
//         console.log("ai de platit 1000 de lei");
//         break;
//}

//     default:{

//         console.log(capacitate);
//     }

// }

switch (vehicul) {
    case "masina": {
        if (capacitate > 900 && capacitate <= 1000) {
            console.log("Trebuie sa platesti 40 de lei pentru impozitul anual");
        }
        else if (capacitate > 1001 && capacitate <= 1600) {
            console.log("Trebuie sa platesti intre 48 si 64 de lei pentru impozitul anual");
        }
        else if (capacitate > 1601 && capacitate <= 2000) {
            console.log("Trebuie sa platesti intre 180 si 200 de lei pentru impozitul anual");
        }
        else if (capacitate > 2001 && capacitate <= 2600) {
            console.log("Trebuie sa platesti intre 869 si 1027 de lei pentru impozitul anual");
        }
        else if (capacitate > 2601 && capacitate <= 3000) {
            console.log("Trebuie sa platesti intre 2226 si 2385 de lei pentru impozitul anual");
        }
        else if (capacitate > 3001) {
            console.log("Trebuie sa platesti intre 5120 si 6400 de lei pentru impozitul anual");
            break;
        }
    }
    case "motocicleta": {
        if (capacitate > 50 && capacitate <= 500) {
            console.log("Trebuie sa platesti intre 2 si 20  de lei pentru impozitul anual");
        }
        else if (capacitate > 501 && capacitate <= 1000) {
            console.log("Trebuie sa platesti intre 20 si 40 de lei pentru impozitul anual");
        }
        else if (capacitate > 1001 && capacitate <= 1600) {
            console.log("Trebuie sa platesti intre 48 si 64 de lei pentru impozitul anual");
            break;
        }
    }
    case "camion": {
        if (capacitate > 10000 && capacitate <= 13000) {
            console.log("Trebuie sa platesti intre 1500 si 1950  de lei pentru impozitul anual");
        }
        else if (capacitate > 13001 && capacitate <= 15000) {
            console.log("Trebuie sa platesti intre 1950 si 2250 de lei pentru impozitul anual");
            break;
        }
    }
    case "autobuz": {
        if (capacitate > 2001 && capacitate <= 2200) {
            console.log("Trebuie sa platesti 319 de lei pentru impozitul anual");
        }
        else if (capacitate > 2201 && capacitate <= 2400) {
            console.log("Trebuie sa platesti 348 de lei pentru impozitul anual");
        }
        else if (capacitate > 2401 && capacitate <= 2600) {
            console.log("Trebuie sa platesti 377 de lei pentru impozitul anual");
        }
        else if (capacitate > 2601 && capacitate <= 2800) {
            console.log("Trebuie sa platesti 406 de lei pentru impozitul anual");
        }
        else if (capacitate > 2801 && capacitate <= 3000) {
            console.log("Trebuie sa platesti 435 de lei pentru impozitul anual");
        }
        else if (capacitate > 3001 && capacitate <= 6000) {
            console.log("Trebuie sa platesti intre 464 si 870 de lei pentru impozitul anual");
            break;
        }
    }
}








