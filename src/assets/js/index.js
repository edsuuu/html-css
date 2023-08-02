const titulo = document.querySelector('#header');
typeWrite(titulo);

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 150 * i)
  });
}


