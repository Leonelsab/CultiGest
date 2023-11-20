document.getElementById('cultivo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var siembra = document.getElementById('siembra').value;
    var agua = document.getElementById('agua').value;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Cultivo: ${nombre}<br>Fecha de Siembra: ${siembra}<br>Cantidad de Agua: ${agua} litros por semana`;
});


