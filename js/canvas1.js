/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas1');
const ctx = canvasElem.getContext('2d');

// rysuje kwadrat, pierwsze i drugie to x i y, trzecie iczwarte to szerokość i wysokość
ctx.fillRect(25, 25, 100, 100);
// to czyści obszar, współrzędne działają tak samo jak wyżej
ctx.clearRect(45, 45, 60, 60);

// for (var i = 0; 1 < 10; i++) {
// ctx.strokeRect(50 , 50 , 50 , 50 );
// }


// określanie czcionki
ctx.font = 'italic bold 30px arial';
// top, bottom
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w Canvas', 5, 145);

// określanie czcionki
ctx.font = 'italic bold 20px arial';
// top, bottom
ctx.textBaseline = 'middle';
ctx.textAlign = 'center'
ctx.fillText('Wstawiamy tekst', 80, 185);

//określenie koloru
ctx.fillStyle = "#0cff00";

ctx.beginPath();

ctx.arc(300, 100, 50, 0, 2*Math.PI);
ctx.stroke();

//pierwsz i druga to x i y środka koła, a 2 to pełny obrót promienia
ctx.arc(300, 100, 40, 0, 1.5*Math.PI);
ctx.fill();
