var papel = "Papel" 
var piedra = "Piedra" 
var tijera = "Tijera"

var player1 = prompt(" juagador 1 piedra, papel o tijera")
var player2 = prompt("jugador 2 piedra, papel o tijera")
 
 if((player1 == tijera)&&(player2 == tijera)){
 	alert("empate")
 }
if((player1 == tijera)&&(player2 == papel)){
	alert("gana player 1")
 }
 if((player1 == tijera)&&(player2 == piedra)){
	alert("gana player 2")
 }
 if((player1 == papel)&&(player2 == papel)){
	alert("empate")
 }
 if((player1 == papel)&&(player2 == tijera)){
	alert("gana player 2")
 }
 if((player1 == papel)&&(player2 == piedra)){
	alert("gana player 1")
 }
 if((player1 == piedra)&&(player2 == piedra)){
	alert("empate")
 }
 if((player1 == piedra)&&(player2 == papel)){
	alert("gana player 2")
 }
 if((player1 == piedra)&&(player2 == tijera)){
	alert("gana player1")
 }


