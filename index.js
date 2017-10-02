function rurple(){

	var h1Titulo= document.createElement("h1");
	var titulo = document.createTextNode("Rurple");
	h1Titulo.appendChild(titulo);
	h1Titulo.className="titulo"
	var divJuego= document.createElement("div");
	divJuego.className= "juego";
	var divTablero= document.createElement("div");
	divTablero.className= "tablero";
	var divCargar= document.createElement("div");
	divCargar.className= "TCargar";
	var Cargar= document.createElement("input");
	Cargar.className= "cargar";
	Cargar.type="Text";
	Cargar.class="text1";
	var divTCargar= document.createElement("div");
	divTCargar.className= "TituloCargar";
	var botonCargar=document.createElement("button");
	botonCargar.className="botoncargar";
	var textoB = document.createTextNode("CARGAR");
	botonCargar.appendChild(textoB);
	divCargar.appendChild(Cargar);

	divJuego.appendChild(h1Titulo);
	divJuego.appendChild(divTablero);
	divJuego.appendChild(divCargar);
	divJuego.appendChild(botonCargar);

	var app= document.createElement("div");
	app.className= "app";
	app.appendChild(divJuego);
	

	return app;

}

function render(mountPoint, component){
	mountPoint.innerHTML= "";
	mountPoint.appendChild(component());}


var root= document.getElementById("root");

render(root, rurple);

