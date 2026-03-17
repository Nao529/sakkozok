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
}