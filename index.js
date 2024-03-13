const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// -------------IMAGE----------------------
let img = new Image();
img.src = 'spaceship.png';

img.onload = () => {
  context.drawImage(img, 100, 100);
};
