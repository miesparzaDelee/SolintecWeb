document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/index-moto.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("moto-placeholder").innerHTML = html;
  
        // Inject content
        document.getElementById("moto-subtitle").textContent = "Nuestros pilares";
        document.getElementById("moto-title").textContent = "Servicio, Cumplimiento e Innovación";
        document.getElementById("moto-text").textContent =
          "En SOLINTEC, cada decisión se fundamenta en brindar un servicio excepcional, cumplir con los más altos estándares y promover la innovación. Nos distingue nuestro expertise técnico, la formalidad y la calidad en cada entrega, generando confianza y valor para nuestros clientes y aliados.";
      })
      .catch(err => console.error("Error loading moto section:", err));
  });
  