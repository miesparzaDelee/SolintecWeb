document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-filosofia.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-filosofia-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-filosofia-title").textContent = "Nuestra Filosofía";
        document.getElementById("nosotros-filosofia-text").textContent =
          "En SOLINTEC creemos en la colaboración activa y el aprendizaje continuo como motores de nuestro crecimiento. Valoramos la transparencia en cada relación y la responsabilidad en cada proyecto, buscando siempre anticiparnos a las necesidades de la industria. Nuestra filosofía se basa en construir alianzas duraderas, fomentar el desarrollo profesional y mantenernos a la vanguardia tecnológica para aportar soluciones que trascienden expectativas.";
      });
  });
  