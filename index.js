const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// Faire une ligne

// Couleur de la ligne
context.strokeStyle = 'blue';

// Commence le trajet
context.beginPath();

// Coordonnées x et y de départ
context.moveTo(30, 150);

// Prochaine coordonnées x et y
context.lineTo(75, 100);

// Ferme le chemin pour former un triangle
context.closePath();

// Dessiner la ligne
context.stroke();
