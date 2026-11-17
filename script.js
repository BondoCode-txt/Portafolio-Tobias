const btnFlotante = document.querySelector('.btn-flotante');

// Lógica de navegación entre secciones
document.querySelectorAll('.btn-nav').forEach(boton => {
    boton.addEventListener('click', () => {
        // 1. Quitar la clase 'activa' de todas las secciones
        document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));

        // 2. Quitar la clase 'activo' de todos los botones
        document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('activo'));

        // 3. Obtener el id de la sección objetivo
        const targetId = boton.getAttribute('data-target');
        const seccionObjetivo = document.getElementById(targetId);

        if (seccionObjetivo) {
            seccionObjetivo.classList.add('activa');
            boton.classList.add('activo');
            
            // Subir al tope superior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Asegurar que el botón flotante vuelva a aparecer al cambiar de sección
            if (btnFlotante) {
                btnFlotante.classList.remove('oculto');
            }
        }
    });
});

// Detectar cuando el usuario baja o sube en la página
window.addEventListener('scroll', () => {
    if (!btnFlotante) return;

    // Si bajó más de 50 píxeles desde arriba, ocultamos el botón
    if (window.scrollY > 50) {
        btnFlotante.classList.add('oculto');
    } else {
        // Si volvió arriba del todo (menos de 50px), vuelve a aparecer
        btnFlotante.classList.remove('oculto');
    }
});