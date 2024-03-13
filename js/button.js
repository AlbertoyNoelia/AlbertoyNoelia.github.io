document.getElementById('ocultarSlide').addEventListener('click', function() {
    // Obtener referencia a la slide
    var slide = document.getElementById('slide');
    var slide2 = document.getElementById('slide2');
    var myaudio = document.getElementById('myAudio');
    
    // Ocultar la slide cambiando su estilo de visualización
    slide.style.display = 'none';
    slide2.style.display = 'block';
    myaudio.style.display = 'block';
});