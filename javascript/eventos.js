// La función

	var gritar = function () {
		alert("¡Auch!");
	}

// La forma incorrecta

	document.body.onclick = gritar();

// La forma correcta

	document.body.onclick = gritar;