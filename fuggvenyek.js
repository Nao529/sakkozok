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