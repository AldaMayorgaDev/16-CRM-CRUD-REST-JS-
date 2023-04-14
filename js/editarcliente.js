import {obtenerClientePorID, actualizarCliente } from './API.js';
import {mostrarAlerta, validarCamposVacios} from './funciones.js'
(function () {

    //campos del formulario

    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmpresa = document.querySelector('#empresa');
    const inputId = document.querySelector('#id');
    
    document.addEventListener('DOMContentLoaded', async ()=>{


        //Identificar que cliente quiero editar por medio del id que viene en la url

        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        //console.log('idCliente', idCliente);

        const cliente = await obtenerClientePorID(idCliente);
        //console.log('cliente', cliente)


        //mostrar cliente en el formulario
        mostrarCliente(cliente);


        //submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente)
    });

    //mostrar datos de cliente en formulario
    function mostrarCliente(cliente) {
        const {nombre, empresa, id, telefono, email} = cliente;

        inputNombre.value = nombre;
        inputEmail.value = email;
        inputTelefono.value = telefono;
        inputEmpresa.value = empresa;
        inputId.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();


        const cliente ={
            nombre: inputNombre.value, 
            email:  inputEmail.value, 
            telefono: inputTelefono.value, 
            empresa: inputEmpresa.value, 
            id:  parseInt(inputId.value)
        }
        console.log('cliente', cliente)

        if(validarCamposVacios(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        //Si se paso la validacion reescribe el objeto
        actualizarCliente(cliente);
        
    }


})();