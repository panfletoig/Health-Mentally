var texto = [];

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
texto [1] = document.getElementById("texto1").innerHTML;
texto [2] = document.getElementById("texto2").innerHTML;
texto [3] = document.getElementById("texto3").innerHTML;
texto [4] = document.getElementById("texto4").innerHTML;

boton1.addEventListener("click", ()=>{
    document.getElementById("texto1").innerHTML = "La pandemia para los adolescentes trajo consigo una nueva realidad en muchos casos es la enseñanza en clases virtuales, falta de contacto físico con familiares, amigos y conocidos. Adaptarse a este cambio de vida que surgió de repente no es fácil, además deben enfrentarse al temor de que alguien de casa se contagie y no pueda recuperarse. Los adolescentes tienden a preocuparse demasiado que su estabilidad emocional se desequilibra, esto sucede porque dejan de cuidar de ellos mismo teniendo malos hábitos hasta que no pueden más y se sienten mal física, emocional y mentalmente.";
})

boton2.addEventListener("click", ()=>{
    document.getElementById("texto2").innerHTML = '<img src="img/Malasaludmental.jpeg "id="Malasaludmental">'+"<br>"+
    '<img src="img/Buenasaludmental.jpeg "id="Buenasaludmental">';
})

boton3.addEventListener("click", ()=>{
    document.getElementById("texto3").innerHTML = 
    "-Tener un horario o una rutina ayuda a no quedarse en cama, y trae organización en la vida cotidiana." + "<br>" +"<br>" +
    "-Dormir las 8 horas diarias producirá eficiencia en el día a día y mejorará tu autodeterminación."+ "<br>" +"<br>" +
    "-Hacer ejercicios ayudara a sentirte bien consigo mismo."+"<br>" +"<br>" +
    "-Mantenerse en contacto con su familia y amigos porque tener a alguien con quien hablar sobre sus necesidades y sentimientos es vital para la salud mental."+ "<br>" +"<br>" +
    "-Tener un pasatiempo como leer, pintar o crear cosas nuevas ayudara a explotar tu creatividad y también tendrás una mente saludable.";

})
boton4.addEventListener("click", ()=>{
    document.getElementById("texto4").innerHTML = '<a target="_blank" href="https://feelhealthy.goodbarber.app/adolescentes/c/0/i/58152060/adolescentes-durante-el-covid-19">App: Health Mentally</a>'+ "<br>" +
    "•	Esta app está diseñada para adolescentes que quieren informarse más acerca de la pandemia Covid-19, sobre la salud mental y como tener una mente sana. Es una aplicación muy completa cuenta con videos, cuestionarios e información importante.";

})

var num = texto.length
var volver = document.getElementById("volver");
volver.addEventListener("click", ()=>{
    for(var i=1; i<=num; i++){
        document.getElementById("texto" + i).innerHTML = "";
        console.log(i)
    }
})
