function Copiar(){
    var textocopiado;
    textocopiado= document.getElementById("traduccion");
    textocopiado.select();
    navigator.clipboard.writeText(textocopiado.value);
    alert("Se ha copiado " + textocopiado.value);
}

function Codificar(){
    var textoacodificar = document.getElementById("Texto").value.toLowerCase();

    var textocodificado = textoacodificar.replace(/e/img,"enter");
    var textocodificado = textocodificado.replace(/o/igm,"ober");
    var textocodificado = textocodificado.replace(/i/igm,"imes");
    var textocodificado = textocodificado.replace(/a/igm,"ai");
    var textocodificado = textocodificado.replace(/u/igm,"ufat");

    document.getElementById("Texto").style.display = "show";
    document.getElementById("Texto").value="";
    document.getElementById("traduccion").style.display = "none";
    document.getElementById("traduccion").style.display = "show";
    document.getElementById("traduccion").style.display = "inherit";
    document.getElementById("traduccion").innerHTML = textocodificado;

}



function Decodificar(){
    var textoadecodificar = document.getElementById("Texto").value.toLowerCase();

    var textodecodificado = textoadecodificar.replace(/enter/img,"e");
    var textodecodificado = textodecodificado.replace(/ober/igm,"o");
    var textodecodificado = textodecodificado.replace(/imes/igm,"i");
    var textodecodificado = textodecodificado.replace(/ai/igm,"a");
    var textodecodificado = textodecodificado.replace(/ufat/igm,"u");

    document.getElementById("Texto").style.display = "show";
    document.getElementById("Texto").value="";
    document.getElementById("traduccion").style.display = "none";
    document.getElementById("traduccion").style.display = "show";
    document.getElementById("traduccion").style.display = "inherit";
    document.getElementById("traduccion").innerHTML = textodecodificado;
}