alert("hola")

var piedra = {
    nombre: "piedra",
    numero: 1
}
var papel = {
    nombre: "papel",
    numero: 2
}
var tijera = {
    nombre: "tijera",
    numero: 3
}




var jugador = (parseInt(prompt ("elige piedra = 1, papel = 2 o tijera = 3")));
var computadora = Math.floor(Math.random() * (3 - 1)) + 1;


    
     if (jugador == piedra && computadora == tijera ||
        jugador == papel && computadora == piedra||
        jugador == tijera && computadora == papel)
        {
            resultado = ", felicidades, ganaste";
        }
    else if (jugador == computadora)
        {
            resultado = ", empataste, no es tan malo, pero no es lo mejor";
        }
    else 
        {
            resultado = ", perdiste, suerte para la proxima";
        }
    
    
    document.write("jugaste contra " + computadora  + resultado );
