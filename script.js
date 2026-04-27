// Esperamos a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const leadForm = document.getElementById('leadForm');

    leadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitamos que la página se recargue
        
        // Obtenemos los valores ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        const interes = document.getElementById('interes').value;
        const cantidad = document.getElementById('cantidad').value;
        
        // Número de contacto extraído de tu banner de Seven Servicios (Código 549 para Argentina)
        const numeroWhatsApp = "5492615176049"; 
        
        // Armamos el mensaje predeterminado
        const mensaje = `¡Hola Seven Servicios! Soy ${nombre}. Me gustaría consultar por precios mayoristas para ${cantidad} unidades de ${interes}. ¿Me podrían enviar información y catálogo?`;
        
        // Creamos la URL de la API de WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        
        // Abrimos WhatsApp en una nueva pestaña
        window.open(url, '_blank');
    });

    // Pequeño efecto para scroll suave al hacer clic en los links del navbar
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
