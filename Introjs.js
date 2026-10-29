// Comentaire dans JS
console.log("hello, world!")
console.log(5+3);
//definir variable et apres assigner
// Regles des variables
/*Un identifiant est le nom que vous donnez à une variable.

Règles pour les identifiants :
- Doivent commencer par une lettre, _ ou $.
- Peuvent contenir des chiffres après le premier caractère.
- Ne peuvent pas être un mot-clé réservé (let, const, if, etc.).
- Sont sensibles à la casse (majuscules et minuscules sont considérées comme différentes).*/
let x;
x = 6

let name = "Ayla";
let age = 18;
let country = "Lebanon"; // String double quotes
let city = 'Beirut'; // String single quotes

console.log(name);
console.log(age);
console.log(city);
// Mathematique
let prix = 25;
let quantite = 5;
console.log(prix + quantite);
console.log(prix * quantite);
console.log(prix / quantite);

let johndoe = "John" +" "+ "Doe"
console.log(johndoe);
// Decimals
let deimale = 55.6;

// If statements conditionels
let ageofConsent = 18;

if (ageofConsent >=18){
    console.log("tu est un adult.")

    }else {
    console.log("Tu est un mineur");
}
if (grade >= 90){
    console.log("Excellent! Grade A");
}else if(grade >=80){
    console.log("Good! Grade B")
}else if(grade>=70){
    console.log("Fine. Grade C")
}else if(grade>=60){
    console.log("Could be better. Grade D")
}else {
    console.log("You failed. Grade F")
}
// For loops
for (let i = 1; i <= 5; i++) {
    console.log("Hello " + i);
}

/*Exercice 1 — Positif, négatif ou zéro
Objectif : Utiliser if, else if et else.

Écrivez un programme qui vérifie si un nombre est positif, négatif ou égal à zéro.

Consignes :
- Créez une variable appelée number.
- Si le nombre est supérieur à zéro, affichez "Positif".
- Si le nombre est inférieur à zéro, affichez "Négatif".
- Sinon, affichez "Zéro".*/

let nummber = -5;

if (number >= 0){
    console.log(number, "Positif")
}else if(number = 0){
    console.log("Zéro")
}else if(number<=0){
    console.log("Positif")
}
