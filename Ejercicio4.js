let tiempo;
function reloj(){
    if (!tiempo){
        tiempo = setInterval(actualizarReloj, 1000);
    }
    actualizarReloj();
}