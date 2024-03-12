const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// le canvas prend toute la taille disponible sur le navigateur
canvas.width = innerWidth;
canvas.height = innerHeight;

// // Carré remplie (x, y, largeur, hauteur)
// context.fillRect(25, 25, 100, 100);

// // Efface la zone spécifiée (x, y, largeur, hauteur)
// context.clearRect(45, 45, 60, 60);

// // Dessiné un contour (x, y, largeur, hauteur)
// context.strokeRect(50, 50, 50, 50);

// context.beginPath();
// // Points du triangle isocèle (x : horizontale, y : verticale)
// context.moveTo(30, 150);
// context.lineTo(75, 100);
// context.lineTo(120, 150);
// context.closePath(); // Ferme le chemin pour former un triangle
// context.fill();

// // context.fill();
// context.beginPath();
// context.arc(75, 200, 50, 0, Math.PI * 2, true); // Cercle extérieur
// context.moveTo(110, 200);
// context.arc(75, 200, 35, 0, Math.PI, false); // Bouche (sens horaire)
// context.moveTo(65, 190);
// context.arc(60, 190, 5, 0, Math.PI * 2, true); // Oeil gauche
// context.moveTo(95, 190);
// context.arc(90, 190, 5, 0, Math.PI * 2, true); // Oeil droite
// context.stroke();
// // Le premier argument (75) et le deuxième argument (200) sont les coordonnées du centre du cercle.
// // Le troisième argument (50) est le rayon du cercle.
// // Le quatrième argument (0) spécifie le point de départ de l'arc en radians (0 radians correspond à l'axe horizontal à droite du centre).
// // Le cinquième argument (Math.PI * 2) spécifie l'angle en radians jusqu'auquel l'arc doit être dessiné (dans ce cas, un cercle complet).

// // Ainsi, Math.PI * 2 est utilisé pour indiquer un angle de 360 degrés, ce qui signifie que l'arc couvre tout le cercle. Cela permet de dessiner un cercle complet avec context.arc.

// -------------TEXTE ------------------
context.strokeStyle = 'red';
context.font = '48px serif ';
context.fillStyle = 'blue';
context.strokeText('Hello world', 100, 100);
context.fillText('Hello world', 100, 100);
