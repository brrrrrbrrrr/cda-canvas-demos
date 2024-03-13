const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// Carré remplie (x, y, width, height)
context.fillRect(100, 100, 100, 100);

// Efface la zone spécifiée
context.clearRect(120, 120, 60, 60);

// Dessiné un contour
context.strokeRect(125, 125, 50, 50);

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
