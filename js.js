document.addEventListener("DOMContentLoaded", function() {
    // Inicializa AOS
    AOS.init({
        duration: 1000,
        once: false
    });

    // Filtrar productos por categoría
    window.filtrarProductos = function(categoria) {
        const productos = document.querySelectorAll('.producto');
        const subfiltrosZapatillas = document.getElementById('subfiltros-zapatillas');

        // Mostrar u ocultar subfiltros para zapatillas
        if (subfiltrosZapatillas) {
            subfiltrosZapatillas.style.display = (categoria === 'zapatillas') ? 'block' : 'none';
        }

        // Mostrar u ocultar productos según la categoría seleccionada
        productos.forEach(producto => {
            if (categoria === 'todos') {
                producto.style.display = ''; // Mostrar todos los productos
            } else if (producto.getAttribute('data-categoria') === categoria) {
                producto.style.display = ''; // Mostrar productos de la categoría seleccionada
            } else {
                producto.style.display = 'none'; // Ocultar productos de otras categorías
            }
        });
    };

    // Filtrar zapatillas por subcategoría
    window.filtrarZapatillas = function(subcategoria) {
        const productos = document.querySelectorAll('.producto[data-categoria="zapatillas"]');

        productos.forEach(producto => {
            if (subcategoria === 'todos') {
                producto.style.display = ''; // Mostrar todas las zapatillas
            } else if (producto.getAttribute('data-subcategoria') === subcategoria) {
                producto.style.display = ''; // Mostrar zapatillas de la subcategoría seleccionada
            } else {
                producto.style.display = 'none'; // Ocultar otras zapatillas
            }
        });
    };

    // Hacer que el botón "Mostrar productos" haga el scroll más lento
    const botonMostrar = document.getElementById("boton-mostrar-productos");
    if (botonMostrar) {
        botonMostrar.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que la página haga un salto repentino

            const productosSection = document.getElementById("seccion-productos");
            if (productosSection) {
                let scrollStep = 0.4; // Pequeño desplazamiento en píxeles
                let scrollInterval = 5; // Intervalo en milisegundos
                let targetPosition = productosSection.offsetTop;
                let currentPosition = window.scrollY;

                let scrollAnimation = setInterval(function() {
                    if (currentPosition < targetPosition) {
                        currentPosition += scrollStep;
                        window.scrollTo(0, currentPosition);
                    } else {
                        clearInterval(scrollAnimation);
                    }
                }, scrollInterval);
            }
        });
    }
});
