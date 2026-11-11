document.querySelectorAll('.btn-nav').forEach(boton => {
    boton.addEventListener('click', () => {
        // 1. Quitar la clase 'activa' de todas las secciones
        document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));

        // 2. Quitar la clase 'activo' de todos los botones para apagar el verde anterior
        document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('activo'));

        // 3. Obtener el id de la sección que queremos mostrar
        const targetId = boton.getAttribute('data-target');

        // 4. Mostrar la sección seleccionada y encender en verde el botón cliqueado
        const seccionObjetivo = document.getElementById(targetId);
        if (seccionObjetivo) {
            seccionObjetivo.classList.add('activa');
            boton.classList.add('activo');
        }
    });
});