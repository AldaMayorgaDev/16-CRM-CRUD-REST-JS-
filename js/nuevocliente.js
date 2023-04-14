import { mostrarAlerta , validarCamposVacios} from './funciones.js'
import {nuevoCliente} from './API.js'

(function () {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit',validarCliente);



    //Funciones
    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente ={
            nombre, 
            email, 
            telefono, 
            empresa
        }

        if(validarCamposVacios(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        //Si se paso la validacion
        console.log('Si se paso la validacion');
        nuevoCliente(cliente);
    }




})();

