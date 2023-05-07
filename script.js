const url = window.location.href;
const productKey = url.split('?');
const productsApi = 'https://my-json-server.typicode.com/MiguelMtz-Tv/nutri-fake-api/products/'
const product = productsApi + productKey[1];

const http = new XMLHttpRequest;

const nombre = document.getElementById('product-name');
const img = document.getElementById('product-img');
const clave = document.getElementById('clave');
const mundo = document.getElementById('mundo');
const submundo = document.getElementById('submundo');
const queEs = document.getElementById('que-es');
const beneficios = document.getElementById('beneficios');
const contraindicaciones = document.getElementById('contraindicaciones');
const idealPara = document.getElementById('ideal-para');
const pdiferenciador = document.getElementById('pdiferenciador');
const presentacion = document.getElementById('presentacion');
const modoDeUso = document.getElementById('modo-de-uso');
const ingredientes = document.getElementById('ingredientes');

http.onreadystatechange = function(){
    if(this.status === 200 & this.readyState === 4){
        let data = JSON.parse(this.responseText);
        
        nombre.innerText = data.nombre;
        img.src = data.fotourl;
        clave.innerText = 'Clave: ' + data.clave;
        mundo.innerText = 'Mundo: ' + data.mundo;
        submundo.innerText = 'Submundo: ' + data.submundo;
        queEs.innerText = data.quees;
        data.beneficios.forEach(element => {
            let beneficio = document.createElement('li');
            beneficio.innerText = element.beneficio;
            beneficios.appendChild(beneficio);
        });
        contraindicaciones.innerText = data.contraindicaciones;
        idealPara.innerText = data.idealpara;
        data.pdiferenciador.forEach(element => {
            let diferenciador = document.createElement('li');
            diferenciador.innerText = element.diferenciador;
            pdiferenciador.appendChild(diferenciador);
        })
        presentacion.innerText = data.presentacion;
        modoDeUso.innerText = data.modouso;
        data.ingredientes.forEach(element => {
            let ingrediente = document.createElement('li');
            ingrediente.innerText = element.ingrediente;
            ingredientes.appendChild(ingrediente);
        })

    }
}

http.open('GET', product);
http.send();