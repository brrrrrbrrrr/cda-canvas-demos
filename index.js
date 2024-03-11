const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// Carré remplie
context.fillRect(25, 25, 100, 100);

// Efface la zone spécifiée
context.clearRect(45, 45, 60, 60);

// Dessiné un contour
context.strokeRect(50, 50, 50, 50);
