const texto = document.getElementById('text');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;
const encriptacion = texto => {
    return texto
    .replace(/a/g, "aizx")
    .replace(/e/g, "enter")
    .replace(/i/g, "imess")
    .replace(/o/g, "oberq")
    .replace(/u/g, "ufata")
}
const desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imess/g, "i")
    .replace(/aizx/g, "a")
    .replace(/oberq/g, "o")
    .replace(/ufata/g, "u")
}
let  textoFinal = '';
function verAcentos( texto ) {
    let resultado = acentos.test( texto )
    if ( resultado != false ) {
        error.classList.add( "error" ); 
    } else {
        error.classList.remove( "error" );
    }
    return  resultado;
}

function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
})