 // Obtenemos el elemento span del año
 const yearSpan = document.getElementById("year");

 // Obtenemos el año actual
 const currentYear = new Date().getFullYear();

 // Actualizamos el contenido del span con el año actual
 yearSpan.textContent = currentYear;