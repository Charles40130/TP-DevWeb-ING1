// Sélection de la div où insérer le contenu
const div = document.getElementById("divTP2");

// Création des éléments
const p = document.createElement("p");
p.textContent = "Langages basés sur ECMAScript :";

const ul = document.createElement("ul");
const languages = ["JavaScript", "JScript", "ActionScript", "EX4"];

languages.forEach(lang => {
    const li = document.createElement("li");
    li.textContent = lang;
    ul.appendChild(li);
});

// Ajout des éléments à la div
div.appendChild(p);
div.appendChild(ul);
