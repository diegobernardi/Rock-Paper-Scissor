

var papel = "Papel" 
var piedra = "Piedra" 
var tijera = "Tijera"

var usuario = prompt("piedra, papel o tijera")
var compu = Math.random()

if (compu < .33){
	compu = "Tijera"
}
else if (compu < .66){
	compu = "Piedra"
}
else (compu = "Papel")




if ((usuario == papel) && (compu == papel)){
	alert("empate")
}
if ((usuario == papel) && (compu == piedra)){
	alert("ganaste")
}
if ((usuario == papel) && (compu == tijera)){
	alert("pierdes")
}
if ((usuario == piedra) && (compu == piedra)){
	alert("empate")
}
if ((usuario == piedra) && (compu == papel)){
	alert("ganaste")
}
if ((usuario == piedra) && (compu == tijera)){
	alert("pierdes")
}
if ((usuario == tijera) && (compu == tijera)){
	alert("empate")
}
if ((usuario == tijera) && (compu == papel)){
	alert("ganaste")
}
if ((usuario == tijera) && (compu == piedra)){
	alert("piedres")
}


