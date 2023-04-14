const url = 'http://localhost:4000/clientes';

//Cuando se crea un nuevo cliente
export const nuevoCliente = async (cliente)=>{
    console.log('cliente', cliente)

    try {
        //A fetch() Se puede pasar ademas de la url, un objeto de configuracion 
        await fetch(url, { 
            method: 'POST', //Metodo http (Puede ser GET, POST, PATCH, DELETE)
            body: JSON.stringify(cliente), /* body: el cuerpo/contenido de la peticion (lo que se manda al sevidor) 
                IMPORTANTE: body se envia de dos formas como String o como objeto, por eso en este caso se ocupa JSON.stringify(objetoAconvertir) para que se conviarta a String
            */
            headers:{/* los headers son informacion de que tipo de datos estamos enviando*/
                'Content-Type': 'application/json' //Tipo de conteido, varia de acuerod a lo que se envia
            } 
        } );
        window.location.href = 'index.html' //Una ves terminado el await redirige al suaurio a index.html
    } catch (error) {
        console.log('error', error)
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async()=>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log('error', error)
    }
}