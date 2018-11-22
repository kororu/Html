//document.querySelector('#boton').addEventListener('click', guardar);
function guardar(){

var pat = document.getElementById("pat").value;
var mat = document.getElementById("mat").value;
var nom = document.getElementById("nom").value;
var n1 = document.getElementById("n1").value;
var n2 = document.getElementById("n2").value;
var n3 = document.getElementById("n3").value;
var n4 = document.getElementById("n4").value;
var promedio = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4;
var prom = promedio.toPrecision(2);
var estado ="";
var textcolor="";
if(prom>5.5){
estado ="Aprobado";
textcolor="color:#009D21"; //verde
}else if (prom<3.5){
estado="Reprobado";
textcolor="color:#ff0000"; //rojo
}else{
estado="pendiente"
textcolor="color:#DFF80C"; //amarillo
}
var colorota1="";
if(n1>=4){
  colornota1="color:#0000FF";
}else{
  colornota1="color:#ff0000";
}
var colornota2="";
if(n2>=4){
  colornota2="color:#0000FF";
}else{
  colornota2="color:#ff0000";
}
var colornota3="";
if(n3>=4){
  colornota3="color:#0000FF";
}else{
  colornota3="color:#ff0000";
}
var colornota4="";
if(n4>=4){
  colornota4="color:#0000FF";
}else{
  colornota4="color:#ff0000";
}
var colorprom="";
if(prom>=4){
  colorprom="color:#0000FF";
}else{
  colorprom="color:#ff0000";
}


var fila="<tr><td>"+pat+"</td><td>"+mat+"</td><td>"+nom+"</td><td style="+String.fromCharCode(34)+ colornota1 + String.fromCharCode(34) +">"+n1+"</td><td style="+String.fromCharCode(34)+ colornota2 + String.fromCharCode(34) +">"+n2+"</td><td style="+String.fromCharCode(34)+ colornota3 + String.fromCharCode(34) +">"+n3+"</td><td style="+String.fromCharCode(34)+ colornota4 + String.fromCharCode(34) +">"+n4+"</td><td style="+String.fromCharCode(34)+ colorprom + String.fromCharCode(34) +">"+prom+"</td><td style="+String.fromCharCode(34)+ textcolor + String.fromCharCode(34) +">"+estado+"</td></tr>";

var btn = document.createElement("TR");
btn.innerHTML=fila;
document.getElementById("tablita").appendChild(btn);
limpiar();
}

function limpiar(){
  document.getElementById("pat").value="";
  document.getElementById("mat").value="";
  document.getElementById("nom").value="";
  document.getElementById("n1").value="";
  document.getElementById("n2").value="";
  document.getElementById("n3").value="";
  document.getElementById("n4").value="";
}
