// Changer la couleur de fond au chargement
window.onload = function () {
    document.body.style.backgroundColor = "#f0f0f0";
};

// Changer la couleur de fond en cliquant sur un bouton
function changerCouleurFond() {
    document.body.style.backgroundColor = "#d1c4e9";
}

// Réinitialiser la couleur de fond
function reset() {
    document.body.style.backgroundColor = "white";
}

// Changer d'image au survol
function changerImage() {
    document.getElementById("imageTest").src = "image2.webp";
}

// Remettre l'image originale
function remettreImage() {
    document.getElementById("imageTest").src = "image.png";
}

// Document.write test
function documentWriteTest() {
    document.write("Ceci remplace tout le contenu de la page !");
}
