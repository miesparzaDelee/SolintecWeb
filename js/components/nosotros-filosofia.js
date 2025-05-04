document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-filosofia.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-filosofia-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-filosofia-title").textContent = "Nuestra Filosofía";
        document.getElementById("nosotros-filosofia-text").textContent =
          "Nos impulsa la practicidad, la flexibilidad y el compromiso total con nuestros clientes. Nos enfocamos en soluciones útiles, con ética, calidad y una pasión constante por servir.";
      });
  });
  