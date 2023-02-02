const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.texto');
const textoBlanco = document.querySelector('.pa-mono')

function botonEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  textoBlanco.textContent = "";
}

function encriptar(encriptado){  
  let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  encriptado = encriptado.toLowerCase()

  for(let i= 0; i<codigo.length; i++ ){
    if(encriptado.includes(codigo[i][0])){
      encriptado = encriptado.replaceAll(codigo[i][0],codigo[i][1])
    }
  }
  return encriptado
}

function botonDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";

}


function desencriptar(desencriptado){  
  let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  desencriptado = desencriptado.toLowerCase()

  for(let i= 0; i<codigo.length; i++ ){
    if(desencriptado.includes(codigo[i][1])){
      desencriptado = desencriptado.replaceAll(codigo[i][1],codigo[i][0])
    }
  }
  return desencriptado
}

function copiar(){
  let contenido = document.querySelector(".texto");
  contenido.select();
  document.execCommand("copy");
}

let botonCopiar = document.querySelector(".boton-copiar");
botonCopiar.onclick = copiar;
