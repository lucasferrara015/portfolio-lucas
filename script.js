document.addEventListener("DOMContentLoaded", function () {
  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Año dinámico
  const anio = new Date().getFullYear();
  const spanAnio = document.getElementById("anio");
  if (spanAnio) spanAnio.textContent = anio;

  // Modo oscuro
  const modoToggle = document.getElementById("modo-toggle");
  if (modoToggle) {
    modoToggle.addEventListener("click", () => {
      document.body.classList.toggle("modo-oscuro");
    });
  }

  // Menú hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("activo");
    });
  }

  // Resaltar ítem de navegación activo
  const secciones = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 100;

    secciones.forEach(section => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navItems.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
