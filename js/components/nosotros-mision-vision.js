document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-mision-vision.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-mision-vision-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-mv-title").textContent = "Misión y Visión";
        document.getElementById("nosotros-mision-title").textContent = "Misión";
        document.getElementById("nosotros-mision-text").textContent =
          "Ser aliados estratégicos del crecimiento industrial, innovando continuamente y garantizando soluciones eficientes para nuestros clientes.";
        document.getElementById("nosotros-vision-title").textContent = "Visión";
        document.getElementById("nosotros-vision-text").textContent =
          "Consolidarnos como líderes locales en Durango y referentes nacionales en soluciones tecnológicas industriales.";
      });
  });
  