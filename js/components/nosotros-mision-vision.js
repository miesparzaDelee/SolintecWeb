document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-mision-vision.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-mision-vision-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-mv-title").textContent = "Misión y Visión";
        document.getElementById("nosotros-mision-title").textContent = "Misión";
        document.getElementById("nosotros-mision-text").textContent =
          "Proveer soluciones y suministros confiables en automatización y tecnología industrial, con enfoque técnico, servicio ágil y cumplimiento normativo.";
        document.getElementById("nosotros-vision-title").textContent = "Visión";
        document.getElementById("nosotros-vision-text").textContent =
          "Ser una empresa establecida y reconocida en el norte de México por su servicio, confiabilidad y red de proveedores en automatización y suministros industriales.";
      });
  });
  