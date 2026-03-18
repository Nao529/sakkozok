import { tablazatMegjelenit } from "./tablazatMegjelenit.js";

export function rendezesEsemenykezelok(lista, TABLAZATELEM) {
    let nevNo = document.getElementById("nev-no");
    let nevCsokk = document.getElementById("nev-csokk");
    let nemzetNo = document.getElementById("nemzet-no");
    let nemzetCsokk = document.getElementById("nemzet-csokk");
    let gyozNo = document.getElementById("gyoz-no");
    let gyozCsokk = document.getElementById("gyoz-csokk");

    nevNo.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
           return a.nev < b.nev ? -1 : +1;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
    nevCsokk.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
            return a.nev > b.nev ? -1 : +1;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
    nemzetNo.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
           return a.nemzetiseg < b.nemzetiseg ? -1 : +1;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
    nemzetCsokk.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
            return a.nemzetiseg > b.nemzetiseg ? -1 : +1;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
    gyozNo.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
            return a.gyozelmek_szama - b.gyozelmek_szama;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
    gyozCsokk.addEventListener("click", function (event) {
        lista.sort(function (a, b) {
            return b.gyozelmek_szama - a.gyozelmek_szama;
        });
        tablazatMegjelenit(lista, TABLAZATELEM);
    });
}

export function sakkPoziciok() {
    let pozicio1 = document.querySelector("#pozicio1");
    let pozicio2 = document.querySelector("#pozicio2");
    let okGomb = document.querySelector("#ok");

    okGomb.addEventListener("click", function (event) {
        let lep1 = pozicio1.value;
        let lep2 = pozicio2.value;
        
        let o1 = lep1[0];
        let s1 = lep1[1];
        let o2 = lep2[0];
        let s2 = lep2[1];
        
        let eredmeny = utesEllenorzes(o1, s1, o2, s2);
        console.log(eredmeny);
    });
}

export function utesEllenorzes(o1, s1, o2, s2) {
    switch (o1) {
        case "a":
            o1 = 1;
            break;
        case "b":
            o1 = 2;
            break;
        case "c":
            o1 = 3;
            break;
        case "d":
            o1 = 4;
            break;
        case "e":
            o1 = 5;
            break;
        case "f":
            o1 = 6;
            break;
        case "g":
            o1 = 7;
            break;
        case "h":
            o1 = 8;
            break;
        default:
            break;
    }
    
    switch (o2) {
        case "a":
            o2 = 1;
            break;
        case "b":
            o2 = 2;
            break;
        case "c":
            o2 = 3;
            break;
        case "d":
            o2 = 4;
            break;
        case "e":
            o2 = 5;
            break;
        case "f":
            o2 = 6;
            break;
        case "g":
            o2 = 7;
            break;
        case "h":
            o2 = 8;
            break;
        default:
            break;
    }

    if (o1 === o2) {
        return true;
    } else if (s1 === s2) {
        return true;
    } else if (Math.abs(o1 - o2) === Math.abs(s1 - s2)) {
        return true;
    }
    return false;
}
