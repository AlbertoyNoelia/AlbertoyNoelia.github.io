document.getElementById('ocultarSlide').addEventListener('click', function() {
    // Obtener referencia a la slide
    var slide = document.getElementById('slide');
    var slide2 = document.getElementById('slide2');
    
    // Ocultar la slide cambiando su estilo de visualización
    slide.style.display = 'none';
    slide2.style.display = 'block';
});