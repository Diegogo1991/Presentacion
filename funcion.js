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

//VALIDACION FORMULARIO SUSCRIBIRSE

const expresiones = {
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   Nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{7,10}$/ // 7 a 14 numeros.
}

const formSuscri = document.getElementById('suscribeteform');
const inputs = document.querySelectorAll('#suscribeteform input');
const enviarFormSuscri = false;

const validarFormularioSuscribirse = (e) => {
   e.target.name;
   switch (e.target.name) {
      case "correo":
         if (expresiones.correo.test(e.target.value)) {
            console.log('funciona');
            document.getElementById('suscribeteform').style.border = ".2rem solid white";
            document.getElementById('correo').style.color = "aquamarine";
            document.getElementById('enviarcorreo').style.background = "white";
            enviarFormSuscri = true;
         } else {
            console.log('no funciona');
            document.getElementById('suscribeteform').style.border = ".2rem solid rgb(248, 75, 75)";
            document.getElementById('correo').style.color = "rgb(248, 75, 75)";
            document.getElementById('enviarcorreo').style.background = "rgb(248, 75, 75)";
            enviarFormSuscri = false;
         }
         break;
      case "enviarcorreo":

         break;

      default:
         break;
   }
}

inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormularioSuscribirse);
   input.addEventListener('blur', validarFormularioSuscribirse)
})

formSuscri.addEventListener('submit', (e) => {
   e.preventDefault();
   if (enviarFormSuscri == true) {

   }
})

/*VALIDACIÓN FORMULARIO CONTACTO*/
const formContact = document.getElementById('contactForm');
const inputsContact = document.querySelectorAll('#contactForm input');

const enviarFormContact = {
   Nombre: false,
   Email: false,
   Telefono: false
}

const validarFormularioContact = (e) => {
   e.target.name;
   switch (e.target.name) {
      case "Nombre":
         validarCampo(expresiones.Nombre, e.target, 'Nombre')
         break;
      case "Email":
         validarCampo(expresiones.Email, e.target, 'Email')
         break;
      case "Telefono":
         validarCampo(expresiones.telefono, e.target, 'Telefono')
         break;
      default:
         break;
   }
}

const validarCampo = (expresion, input, campo) => {
   if (expresion.test(input.value)) {
      console.log('funciona');
      document.getElementById(campo).style.display = 'none';
      document.querySelector(`#contactForm .p${campo}`).style.display = 'none';
      document.getElementById(`input${campo}`).style.borderBottom = '.1rem solid rgba(0, 0, 0, 0.2)';
      enviarFormContact[campo] = true;
   } else {
      console.log('no funciona');
      document.getElementById(campo).style.display = 'flex';
      document.querySelector(`#contactForm .p${campo}`).style.display = 'flex';
      document.getElementById(`input${campo}`).style.borderBottom = '.2rem solid rgba(255, 0, 0, 0.5)';
      enviarFormContact[campo] = false;
   }
}

inputsContact.forEach((input) => {
   input.addEventListener('keyup', validarFormularioContact);
   input.addEventListener('blur', validarFormularioContact)
})

formContact.addEventListener('submit', (e) => {
   e.preventDefault();
   if (enviarFormContact.Nombre &&
      enviarFormContact.Email &&
      enviarFormContact.Telefono) {

   }
})