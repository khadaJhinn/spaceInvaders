// Déclaration des variables
var largeur = 9;
var hauteur = 5;
var plateau = [];

// Fonction pour initialiser le plateau
function initPlateau() {
    var contenuDiv = document.getElementById('contenu');
    var tableau = document.createElement('table');

    // Création des lignes et des cellules
    for (var i = 0; i < hauteur; i++) {
        var ligne = document.createElement('tr');
        plateau[i] = [];
        for (var j = 0; j < largeur; j++) {
            var cellule = document.createElement('td');
            var img = document.createElement('img');
            img.src = 'fondb.jpg'; 
            cellule.appendChild(img);
            ligne.appendChild(cellule);
            plateau[i][j] = img;
        }
        tableau.appendChild(ligne);
    }

    // Ajout du tableau à la div
    contenuDiv.appendChild(tableau);
}

// Événement au chargement de la page pour lancer initPlateau
window.addEventListener('load', initPlateau);