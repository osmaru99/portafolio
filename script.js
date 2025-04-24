function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Oculta todas las secciones
    document.querySelectorAll(".experiencia, .habilidades, .estudios, .Proyecto").forEach(section => {
        section.classList.remove("active");
    });

    // Muestra solo la sección seleccionada
    const sectionToShow = document.getElementById(sectionId); // Cambié id a sectionId
    if (sectionToShow) {
        sectionToShow.classList.add("active");
        sectionToShow.scrollIntoView({ behavior: "smooth" });
    }

    // Cambiar el color de los botones
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("selected");  // Elimina la clase de los demás botones
    });

    // Agregar la clase 'selected' al botón que fue clickeado
    const activeButton = Array.from(document.querySelectorAll(".nav-btn"))
                              .find(btn => btn.getAttribute("onclick").includes(sectionId)); // Cambié id a sectionId
    if (activeButton) {
        activeButton.classList.add("selected");
    }
}


// Asegurar que al cargar la página se muestre "Experiencia" por defecto
document.addEventListener("DOMContentLoaded", function () {
    // Muestra la sección de "Experiencia" al cargar
    const experienciaSection = document.getElementById("experiencia");
    experienciaSection.classList.add("active");

    // Asegura que el botón "Experiencia" se marque como seleccionado
    const activeButton = Array.from(document.querySelectorAll(".nav-btn"))
        .find(btn => btn.getAttribute("onclick").includes("experiencia"));
    if (activeButton) {
        activeButton.classList.add("selected");
    }
});



// Función para volver al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mostrar el botón solo cuando el usuario haga scroll hacia abajo
window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Aparece después de hacer scroll
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
