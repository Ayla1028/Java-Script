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

let grade=76;

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

let number = -5;

if (number >= 0){
    console.log(number, "Positif")
}else if(number = 0){
    console.log("Zéro")
}else if(number<=0){
    console.log("Négatif")
}

let numberex2 = 3

if (numberex2%2===0){
    console.log(numberex2, "Pair")
}else{
    console.log(numberex2, "Impair")
}

//Exercice 3

let username = "teacher"
let password = "abc123"

if (username == "student" & password == "abc123"){
    console.log ("Connexion réussie!")
}else{
    console.log ("Conenexion échoué.")
}
for (let j=1; j <= 10;){
    if (j%2==0){
        console.log(j)
    }
    j=j+1
}
for (let k=10; k>=1;){
    if (k%2==0){
        console.log(k)
    }
    k=k-1
}

const fname = "John";
//fname = "Ayla"
/* commentaire multi ligne */
// commentaire une ligne
/* commentaire multi ligne 
Ligne 2
Ligne 3*/


let age2 = 16;
let country2 = "USA"
let text = "You cannot drive!";

if (country2 == "USA") {
    if(age2 >= 16) {
        text = "You can drive!";
        console.log(text);
    }
}

if (country2 == "USA" && age >=16){
    text="You can drive!";
    console.log(text);
}

let username2 = "student"
let password2= "abc123"

if (username2="student"){
    if(password2="abc123"){
        console.log ("Connexion réussie!")
    }
}
if (username2 == "student" && password == "abc123"){
    console.log("Connexion réussie!")
}

for (let number3=1 ; number3 <= 100; number3++){
    if (number3%3==0 && number3%5 ==0){
        console.log("FizzBuzz")
    } else if (number3%3==0){
        console.log("Fizz")
    }else if (number3%5==0){
        console.log("Buzz")
    }else{
        console.log(number3)
    }
}

let nbr1=10
let nbr2=25
let nbr3=7
let nbr4=89
let nbr5=15

for ()
