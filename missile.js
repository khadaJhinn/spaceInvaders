var posMissileX;
var posMissileY;

function pewPew() {
    // Initialisation de l'emplacement du missile juste au-dessus du vaisseau
    posMissileX = posShipX;
    posMissileY = posShipY - 1;

    // Affichage du missile sur le plateau
    plateau[posMissileY][posMissileX].src = 'missile.jpg';
    setTimeout(function() {
        deplacementMissile(posMissileY, posMissileX);
    }, 500);
}

function deplacementMissile(y, x) {
    // Efface l'image du missile des coordonnées actuelles
    plateau[y][x].src = 'fondb.jpg';

    // Détermine les nouvelles coordonnées du missile
    var newY = y - 1;
    var newX = x;

    // Vérifie si le missile est sorti du plateau
    if (newY < 0) {
        return; // Sort de la fonction si le missile est sorti du plateau
    }

    // Affiche l'image du missile aux nouvelles coordonnées
    plateau[newY][newX].src = 'missile.jpg';

    // Appelle récursivement la fonction deplacementMissile avec un délai de 200ms
    setTimeout(function() {
        deplacementMissile(newY, newX);
    }, 500);}