// Esta linea de codigo asegura que la pagina esta cargada
$(document).on("ready", resta());

function resta() {

    // Paso 1 & 2
    var numero1 = document.getElementById("InputNumero1").value;

    var numero2 = document.getElementById("InputNumero2").value;

    var numero3 = document.getElementById("InputNumero3").value;

    // Paso 3
    var resultado = ( parseFloat(numero1) - parseFloat(numero2) - parseFloat(numero3) );

    // Paso 5.
    document.getElementById("LabelTotal").innerHTML = resultado

    window.alert("El resultado de la resta es : " + resultado);

}