/*  
Feladatok:
1. Egy gombra kattintva kérd be a felhasználó nevét egy 
felugró ablakban, majd írd ki egy p tag-be, 
üdvözöllek + neve.

2. Illessz be egy tetszőleges képet, és hozz 
létre egy eseményt.
(HTML-ben)

3. Az oldal betöltését ellenőrizd, és üzenj a konzolon, 
ha betöltött.

4. Illessz be egy Lorem div-et és változtass 
meg 3 tulajdonságot JS-ből.
*/


// 1. feladat
function nevkiiras()
{
    var a = document.getElementById("result")
    let nev = prompt("Kérem adja meg a nevét!")
    a.innerHTML = "Üdvözöllek " + nev + "!" 
}

// 3. Feladat
function betoltott_e()
{
    console.log("Az oldal teljesen betőltött!")
}

