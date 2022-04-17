# Shopping cart övning

## Steg 1
*[Lektion 29 mars](https://github.com/F21-Frontendramverk/lektion-29-mars)*

I denna övning ska du göra en React-applikationen enligt designen som du kan på bilden nedanför (du kan skippa bilden på Sherlock). Denna sida kommer i denna övning vara statisk d.v.s. du kan hårdkoda all information och knapparna etc behöver inte göra något. Vi kommer återvända till denna övning och fixa det senare.

Följande komponenter bör finnas med:
* App
* Header
* Cart (som ligger i Header)
* Product

Komponenten **Product** ska ta följande som props:
* Boktitel
* Författare
* Kort text om boken (kan vara Lorem Ipsum)

---

## Steg 2
*[Lektion 4 april](https://github.com/F21-Frontendramverk/lektion-4-april)*

Gör om så din shopping cart loopar ut dina produkter. Du behöver lägga alla produkter i en array.

---

## Steg 3
*[Lektion 5 april](https://github.com/F21-Frontendramverk/lektion-5-april)*

lägg till funktionalitet så att när en användare klickar på **Add to cart** ska produkten läggas till och cart-ikonen uppdateras med 1.

Här behöver du använd React-hooken ```useState``` som håller ditt state med antal produkter.

### Level up

* Utöka cart-componenten så att den förutom visar antal produkter i varukorgen även visar vilka som är tillagda.
* Lägg till funktionalitet så det enbart går att lägga en produkt en gång.

--- 

## Skiss

![Screenshot](https://user-images.githubusercontent.com/54267140/108186450-aca5e980-710d-11eb-95cf-2a3e79ed3bcd.png)
