var parametro
//Obtengo la fecha actual del sistema y se las envio a la funcion calcularFibonacci
document.getElementById("parametro").addEventListener("click", function(){
  
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  
  minutos = minutos < 10 ? `0${minutos}` : minutos;
  let primerMinuto = parseInt(minutos.toString().charAt(0));
  let segundoMinuto = parseInt(minutos.toString().charAt(1));
  segundos += 2;
  resultado = calcularfibonacci(primerMinuto,segundoMinuto,segundos);
  console.log(primerMinuto,segundoMinuto,segundos)
  document.getElementById("botonesInvisibles1").innerText = primerMinuto;
  document.getElementById("botonesInvisibles2").innerText = segundoMinuto;
  document.getElementById("botonesInvisibles1").style.display = "inline";
  document.getElementById("botonesInvisibles2").style.display = "inline";
  
 
});

//Funcion que me calcula la serie de fibonacci de acuerdo a los parametros y me crea los botones para ingresar en cada uno su valor
function calcularfibonacci(a, b, c) {
    limpiar()
    let resultado = [];
    resultado.push(a);
    resultado.push(b);
    var contenedor = document.getElementById("resultado");
  
    for (let i = 2; i < c; i++) {
      
      let proximo = a + b;
      resultado.push(proximo);
      a = b;
      b = proximo;
      var boton = document.createElement("button");
      boton.innerHTML =  resultado[i];
      boton.className = "btn btn-ligh";
      boton.style.marginRight = "30px";
      boton.style.marginTop = "30px";
      boton.style.width = "150px";
      boton.style.marginRight = "10px";
      boton.style.float = "left";
      contenedor.appendChild(boton);
  
    }
  return resultado;
  }


//Funcion que me mantiene actualizada la fecha actual del reloj
  function updateClock() {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const clock = document.getElementById("clock");
    clock.innerHTML = `${horas}:${minutos}:${segundos}`;
  }
  setInterval(updateClock, 1000);
  updateClock();


//funcion que limpia toda la pantalla cuando se quiere dejar esta en blanco 
  function limpiar() {
    var contenedor = document.getElementById("resultado");
    document.getElementById("botonesInvisibles1").style.display = "none";
    document.getElementById("botonesInvisibles2").style.display = "none";
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }