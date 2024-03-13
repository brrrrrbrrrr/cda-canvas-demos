const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// Faire une ligne

// Couleur de la ligne
context.strokeStyle = 'black';

// Commence le trajet
context.beginPath();

// Coordonnées x et y de départ
context.moveTo(100, 150);

// Prochaine coordonnées x et y
context.lineTo(150, 100);

// Ferme le chemin pour former un triangle
context.closePath();

// Dessiner la ligne
context.stroke();

// AXES X ET Y
context.beginPath();
context.moveTo(40, 40);
context.lineTo(innerWidth, 40);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(300, 25);
context.lineTo(350, 40);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(300, 55);
context.lineTo(350, 40);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(25, 300);
context.lineTo(40, 350);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(55, 300);
context.lineTo(40, 350);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(40, 40);
context.lineTo(40, innerHeight);
context.closePath();
context.stroke();

context.font = '25px serif';
context.strokeText('X', 200, 25);

context.font = '25px serif';
context.strokeText('Y', 10, 250);

context.font = '25px serif';
context.strokeText('0', 50, 35);

context.font = '25px serif';
context.strokeText('0', 20, 70);
