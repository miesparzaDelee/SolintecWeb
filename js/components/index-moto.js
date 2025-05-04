document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/index-moto.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("moto-placeholder").innerHTML = html;
  
        // Inject content
        document.getElementById("moto-subtitle").textContent = "Nuestra prioridad";
        document.getElementById("moto-title").textContent = "USTED";
        document.getElementById("moto-text").textContent =
          "En SOLINTEC, usted es el centro de todo lo que hacemos. Trabajamos para ofrecer soluciones confiables, personalizadas y efectivas, garantizando resultados concretos en cada proyecto. Somos su socio tecnológico en la industria.";
      })
      .catch(err => console.error("Error loading moto section:", err));
  });
  