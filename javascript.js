function myFunction() {
  document.getElementById("texto").innerHTML = "WOW! El texto a cambiado";
  
  document.getElementById('boton_color').addEventListener('click', function(){
        document.body.style.backgroundColor='#111';
    });
    
    document.getElementById('boton_ocultar').addEventListener('click', function(){
        document.getElementById("texto_oculto").style.display='none';
    });
}
