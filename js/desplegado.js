function Mostrar(){
  document.getElementById("despleTacos").style.display = "none";
}

function Ocultar(){
  document.getElementById("despleTacos").style.display = "block";
}


function mostrar_ocultar(){
  var caja = document.getElementById("despleTacos");

  if (caja.style.display == "none"){
    Mostrar();
  } else{
    Ocultar();
  }

}
