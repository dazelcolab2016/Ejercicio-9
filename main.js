
function loroA()
{
	var img = document.getElementById("loro");
	var checkA = document.getElementById("loro_a");

	if(checkA.checked)
	{
		img.innerHTML = '<img  src="img/loro-cantor.jpg">';
	}else{
		img.innerHTML = '<img src="img/loro-blue.jpg">';
	}
}

function evaluar()
{
	var aTalking = document.getElementById("loro_a").checked;
	var parrotTrouble = document.getElementById("salida");
    var hora = document.getElementById("hora").value;

	if(aTalking == true && (hora < 7 || hora > 20))
	{
		//problemas
		parrotTrouble.innerHTML = "1";
	}else{
		//NO hay problema
		parrotTrouble.innerHTML = "0";
	}
}
       
       
    
