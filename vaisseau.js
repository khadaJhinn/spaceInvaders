var posShipY = hauteur - 1; // Position en Y (ligne)
var posShipX = Math.floor((largeur - 1) / 2); // Position en X (colonne)

// Fonction pour lancer la partie en plaçant le vaisseau sur le plateau
function lancerPartie() {
    plateau[posShipY][posShipX].src = 'vaisseau.jpg'; 
}


function effaceShip() {
    plateau[posShipY][posShipX].src = 'fondb.jpg'; // Remplace l'image du vaisseau par l'image vide
}

// Fonction pour afficher l'image du vaisseau à sa nouvelle position
function afficheShip() {
    plateau[posShipY][posShipX].src = 'vaisseau.jpg'; // Remplace l'image vide par l'image du vaisseau
}

// Fonction pour déplacer le vaisseau en fonction de la touche pressée
function deplacerVaisseau(event) {
    // Gestion des déplacements
    switch (event.code) {
        case "ArrowLeft":
            effaceShip();
            if (posShipX > 0) {
                posShipX--;
            }
            afficheShip();
            break;
        case "ArrowRight":
            effaceShip();
            if (posShipX < largeur - 1) {
                posShipX++;
            }
            afficheShip();
            break;
        case "ArrowUp":
            // Tir du missile vers le haut
            pewPew();
            break;
    }
}

// Attache la fonction de déplacement du vaisseau aux événements du clavier
window.addEventListener("keydown", deplacerVaisseau);