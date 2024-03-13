const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// -------------TEXTE ------------------
context.strokeStyle = 'red';
context.font = '48px Georgia ';
context.fillStyle = 'blue';
context.strokeText('Hello world', 100, 100);
context.fillText('Hello world', 100, 100);
