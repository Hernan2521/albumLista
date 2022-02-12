
const mensaje = document.getElementById("mensaje")
const contenedor = document.querySelector(".container");

//promesa mensaje con retraso 3 segundos
const getData = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            setTexto("**Información Enviada");
            resolve(true);
        }, 3000);
    });
};
const setTexto = (datos) => {
    mensaje.innerHTML = datos;
};



// funcion asincrona de llamado de 20 titles de album
let boton = document.getElementById("boton");
boton.addEventListener('click', async () => {

    const url = 'https://jsonplaceholder.typicode.com/photos';  
    try {
        const response = await fetch(url);
        const datos = await response.json();
        datos.slice(0,20).forEach(element => { 
            const p = document.createElement('p');
             p.innerHTML= element.title;
                contenedor.appendChild(p)
         
        });
        const promesa = getData();
       
     
    } catch (err) {
        console.log(err);
    }
});
