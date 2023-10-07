document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const asideLinks = document.getElementById("aside"); // Selecciona el aside por su ID
  
    menuButton.addEventListener("click", function () {
      asideLinks.classList.toggle("hidden"); // Agrega o quita la clase "hidden" al aside
      
      // Ajusta la altura del contenido principal cuando se muestra u oculta el aside
      const mainContent = document.querySelector(".div4");
      if (asideLinks.classList.contains("hidden")) {
        mainContent.style.gridTemplateColumns = "1fr"; // Oculta el aside
      } else {
        mainContent.style.gridTemplateColumns = "1fr 1fr"; // Muestra el aside
      }
    });
  
    // Cierra el aside cuando la pantalla se hace más pequeña
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 768) {
        asideLinks.classList.add("hidden"); // Oculta el aside en pantallas pequeñas
        const mainContent = document.querySelector(".div4");
        mainContent.style.gridTemplateColumns = "1fr"; // Ajusta la altura del contenido principal
      } else {
        // Si la pantalla es lo suficientemente grande, muestra el aside
        asideLinks.classList.remove("hidden");
      }
    });
  
    // Cierra el aside al cargar la página si la pantalla es pequeña
    if (window.innerWidth <= 768) {
      asideLinks.classList.add("hidden");
    }
  });
  
