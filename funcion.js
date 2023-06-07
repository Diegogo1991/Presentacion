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

//VALIDACION FORMULARIOS

const expresiones = {
   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   password: /^.{4,12}$/, // 4 a 12 digitos.
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const form = document.getElementById('suscribeteform');
const inputs = document.querySelectorAll('#suscribeteform input');
const enviarForm = false;

const validarFormulario = (e) => {
   e.target.name;
   switch (e.target.name) {
      case "correo":
         if (expresiones.correo.test(e.target.value)) {
            console.log('funciona');
            document.getElementById('suscribeteform').style.border = ".2rem solid white";
            document.getElementById('correo').style.color = "aquamarine";
            document.getElementById('enviarcorreo').style.background = "white";
            enviarForm = true;
         } else {
            console.log('no funciona');
            document.getElementById('suscribeteform').style.border = ".2rem solid rgb(248, 75, 75)";
            document.getElementById('correo').style.color = "rgb(248, 75, 75)";
            document.getElementById('enviarcorreo').style.background = "rgb(248, 75, 75)";
            enviarForm = false;
         }
         break;
      case "enviarcorreo":

         break;

      default:
         break;
   }
}

inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario)
})

form.addEventListener('submit', (e) => {
   e.preventDefault();
   if (enviarForm == true) {

   }})