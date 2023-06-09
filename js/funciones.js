export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg-red-100');

    //Valida si no existe una alerta previa
    if(!alerta){
        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);


        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validarCamposVacios(objeto) {

    /* 
        Verifica si todos los campos no son string vacios

        Object.values(nombreOBjetoARevisarValores)
        .every(input => { ---> checa cada uno de los valores
            return input !==''; ---> Devuelve booleano si input es diferente de un '';
        })  
    */
   return !Object.values(objeto).every(input =>input !== '')
}