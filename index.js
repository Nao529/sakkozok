import { SAKKOZOKLISTA } from "./adatok.js";
import { rendezesEsemenykezelok, sakkPoziciok } from "./fuggvenyek.js";
import { tablazatMegjelenit } from "./tablazatMegjelenit.js";

const TABLAZATELEM = document.querySelector("#tablazat");

tablazatMegjelenit(SAKKOZOKLISTA, TABLAZATELEM);
rendezesEsemenykezelok(SAKKOZOKLISTA, TABLAZATELEM);

sakkPoziciok()