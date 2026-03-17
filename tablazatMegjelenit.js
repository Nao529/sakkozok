function megjelenit(adat={nev,nemzetiseg,gyozelmek_szama}, TABLAZATELEM) {
    let kod = ` <tr>
                    <td>${adat.nev}</td>
                    <td>${adat.nemzetiseg}</td>
                    <td>${adat.gyozelmek_szama}</td>
                </tr>`;
    TABLAZATELEM.innerHTML += kod;
}

export function tablazatMegjelenit(adat, TABLAZATELEM) {
    TABLAZATELEM.innerHTML = "";
    for (let i = 0; i < adat.length; i++) {
        megjelenit(adat[i], TABLAZATELEM);
    }
}