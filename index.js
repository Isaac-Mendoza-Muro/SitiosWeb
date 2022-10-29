const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);
let sound = new Audio ('sonidotecla.mp3');

botonesNumeros.forEach(boton => 
{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    //sound.play();
});

botonesOperadores.forEach(boton => 
{
    boton.addEventListener('click', () => display.computar(boton.value))
});
btnop.addEventListener('click', ()=>
{
    sound.play();
});