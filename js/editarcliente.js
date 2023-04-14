import {obtenerClientePorID} from './API.js'
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


})();