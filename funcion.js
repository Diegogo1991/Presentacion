//FUNCION IMAGENES DIBUJOS
var dibujo = 0;

var camAnimals = document.getElementById('camAnimals');
var dibujosAnimales = 4;
function camAnimales() {
   dibujo = dibujo + 1;
   if (dibujo > dibujosAnimales) {
      dibujo = 0;
   }
   document.getElementById('animales').src = `./img/amls/${dibujo}.jpg`;
}
camAnimals.addEventListener('click', camAnimales);

var camAutos = document.getElementById('camAutos');
var dibujosCarros = 3;
function camAautos() {
   dibujo = dibujo + 1;
   if (dibujo > dibujosCarros) {
      dibujo = 0;
   }
   document.getElementById('autos').src = `./img/crrs/${dibujo}.jpg`;
}
camAutos.addEventListener('click', camAautos);


var camVarios = document.getElementById('camVarios');
var dibujosVarios = 7;
function camVarioos() {
   dibujo = dibujo + 1;
   if (dibujo > dibujosVarios) {
      dibujo = 0;
   }
   document.getElementById('varios').src = `./img/vrdo/${dibujo}.jpg`;
}
camVarios.addEventListener('click', camVarioos);

/*fondeador1.addEventListener('click', cambiarFondo);
fondeador2.addEventListener('click', cambiarFondo);*/

/*var padre = document.getElementById('padre');

function crearElemento() {
   const nuevo = document.createElement('a');
   nuevo.className = 'nuevoa';
   nuevo.id = 'ele';
   nuevo.textContent = "Elemento";
   nuevo.setAttribute('href', '#');
   padre.appendChild(nuevo);
}

var creador = document.getElementById('creador');

creador.addEventListener('click', crearElemento);*/