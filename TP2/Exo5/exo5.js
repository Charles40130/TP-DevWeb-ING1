// 1. Tableau des notes et fonctions associées
const notes = [12, 8, 15, 9, 20, 14, 7, 10, 18, 6];

function afficherNotes() {
    document.getElementById("result").innerHTML = `<p>Notes : ${notes.join(", ")}</p>`;
}

function compter10Plus() {
    return notes.filter(note => note >= 10).length;
}

function calculerMoyenne() {
    return notes.reduce((acc, note) => acc + note, 0) / notes.length;
}

function noteMax() {
    return Math.max(...notes);
}

// Affichage des résultats
afficherNotes();
document.getElementById("result").innerHTML += `<p>Étudiants ayant 10+ : ${compter10Plus()}</p>`;
document.getElementById("result").innerHTML += `<p>Moyenne des notes : ${calculerMoyenne().toFixed(2)}</p>`;
document.getElementById("result").innerHTML += `<p>Note maximale : ${noteMax()}</p>`;

// 2. Tableau de prénoms
const prenoms = ["Alice", "Bob", "Charlie", "David"];

function afficherListePrenoms() {
    const ul = document.createElement("ul");
    prenoms.forEach(prenom => {
        const li = document.createElement("li");
        li.textContent = prenom;
        ul.appendChild(li);
    });
    document.getElementById("result").appendChild(ul);
}

function afficherPrenomsInverse() {
    const ul = document.createElement("ul");
    [...prenoms].reverse().forEach(prenom => {
        const li = document.createElement("li");
        li.textContent = prenom;
        ul.appendChild(li);
    });
    document.getElementById("result").appendChild(ul);
}

afficherListePrenoms();
afficherPrenomsInverse();

// 3. Tableau d'images et affichage
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

function afficherImages(horizontal = true) {
    const table = document.createElement("table");
    const row = document.createElement("tr");

    images.forEach(src => {
        const cell = document.createElement(horizontal ? "td" : "tr");
        const img = document.createElement("img");
        img.src = src;
        img.width = 100;
        img.alt = "Image";
        cell.appendChild(img);
        row.appendChild(cell);
    });

    table.appendChild(row);
    document.getElementById("result").appendChild(table);
}

afficherImages();
