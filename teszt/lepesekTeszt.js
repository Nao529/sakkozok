import { utesEllenorzes } from "../fuggvenyek.js";

lepesTesztesetek();

function lepesTesztesetek() {
    const TESZTESETEK = [
        {
            betuMezo1: "",
            szamMezo1:"",
            betuMezo2: "",
            szamMezo2: "",
            vart: true,
            uzenet: "Üres mezők",
        },
        {
            betuMezo1: "a",
            szamMezo1: 1,
            betuMezo2: "a",
            szamMezo2: 1,
            vart: true,
            uzenet: "Két mező azonos",
        },
        {
            betuMezo1: "a",
            szamMezo1: 1,
            betuMezo2: "b",
            szamMezo2: 3,
            vart: true,
            uzenet: "Nincs ütés",
        },
        {
            betuMezo1: "a",
            szamMezo1: 1,
            betuMezo2: "a",
            szamMezo2: 7,
            vart: true,
            uzenet: "Oszlop azonos",
        },
        {
            betuMezo1: "a",
            szamMezo1: 1,
            betuMezo2: "h",
            szamMezo2: 1,
            vart: true,
            uzenet: "Sor azonos",
        },
        {
            betuMezo1: "a",
            szamMezo1: 1,
            betuMezo2: "h",
            szamMezo2: 8,
            vart: true,
            uzenet: "Balról jobbra átló",
        },
        {
            betuMezo1: "h",
            szamMezo1: 8,
            betuMezo2: "a",
            szamMezo2: 1,
            vart: true,
            uzenet: "Balról jobbra fordítva átló",
        },
        {
            betuMezo1: "a",
            szamMezo1: 8,
            betuMezo2: "h",
            szamMezo2: 1,
            vart: true,
            uzenet: "Jobbról balra átló",
        },
        {
            betuMezo1: "h",
            szamMezo1: 1,
            betuMezo2: "a",
            szamMezo2: 8,
            vart: true,
            uzenet: "Jobbról balra átló fordítva",
        },
        {
            betuMezo1: "x123",
            szamMezo1: 111,
            betuMezo2: "y456",
            szamMezo2: 222,
            vart: true,
            uzenet: "Nem létező sakktábla mező",
        }
    ];

    for (let index = 0; index < TESZTESETEK.length; index++) {
        console.assert(
            utesEllenorzes(TESZTESETEK[index].betuMezo1, TESZTESETEK[index].szamMezo1,
                TESZTESETEK[index].betuMezo2, TESZTESETEK[index].szamMezo2,
            ) === TESZTESETEK[index].vart, TESZTESETEK[index].uzenet,
        );
    }
    console.log("A teszt lefutott");
}