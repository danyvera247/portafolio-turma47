document.addEventListener('DOMContentLoaded', function(){
// creamos objeto paso 11
    const info = {
        nome:'',
        email:'',
        contacto: '',
        mensaje:''
    }

    


// seleccionar elementos paso 1
let formulario = document.querySelector('#form');
let nome = document.querySelector('#form-nome');
let email = document.querySelector('#form-email');
let contacto = document.querySelector('#form-contacto');
let mensaje = document.querySelector('#form-mensaje');
let botonEnviar = document.querySelector('#enviar');

// asignar eventos paso 2


nome.addEventListener( 'input', validar);
email.addEventListener( 'input', validar);
contacto.addEventListener( 'input', validar);
mensaje.addEventListener( 'input', validar);
botonEnviar.addEventListener( 'input', validar);

//validamos paso 3

function validar(e){
   
    if(e.target.value.trim() == ""){
        mostrarAlerta(`Este campo é obrigatório`, e.target.parentElement);
        info[e.target.name] = '';
        comprabarInfo();
        return; // return para detener la ejecución del codigo
    }

    if(e.target.id === 'form-email' && !ValidaEmail(e.target.value)){
        mostrarAlerta(`Email invalido`, e.target.parentElement);
        info[e.target.name] = '';
        comprabarInfo();
        return;
    }

    if(e.target.id === 'form-contacto' && !validarContact(e.target.value)){
        mostrarAlerta(`Contacto invalido`, e.target.parentElement);
        info[e.target.name] = '';
        comprabarInfo();
        return;
    }

    limpiarAlerta(e.target.parentElement);

//agregar valores en el objeto info paso 12

info[e.target.name] = e.target.value.trim().toLowerCase();

// comprobar info paso 13

comprabarInfo();

}
// general alerta paso 4

function mostrarAlerta(mensaje, referencia){
  // comprueba si ya existe una alerta paso 7
  const alerta = referencia.querySelector('.bg-red-600');
    
  if(alerta){
      alerta.remove();
  }

    // Generar alerta en HTML paso 5
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');


    //ingresar error al formulario paso 6
    referencia.appendChild(error);

    // tiempo para que aparezca el mensaje de error
    setInterval(function(){
        referencia.querySelector('.bg-red-600').textContent = ''; 
    }, 6000);
  
    
}
//limpiamos la alerta si ya el campo esta completo paso paso 8
function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.bg-red-600');
    
  if(alerta){
      alerta.remove();
  }
}

//validar email paso 09

function ValidaEmail(email){
    const valida =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
    const resultado = valida.test(email);
    return resultado;


}

// validar contacto paso 10

function validarContact(contacto){
    const plant = /[02468]$/;
    const resultado = plant.test(contacto);
    return resultado;
}

//funcion para ver los valores ingresados al objeto paso 14
function comprabarInfo(){
    
    if(Object.values(info).includes('')){
        botonEnviar.disabled = true;
    }else{
        botonEnviar.disabled = false;
    }
}

})















