const formulario = document.getElementById('formulariosuscripcion');
const tabla = document.getElementById("bodytabla");

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;


    const lista = JSON.parse(localStorage.getItem('suscriptores')) || [];
    lista.push({ nombre, correo });
    localStorage.setItem('suscriptores', JSON.stringify(lista));

    tabla.innerHTML += `<tr><td>${nombre}</td><td>${correo}</td></tr>`;
});