document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-descripcion.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("nosotros-descripcion-placeholder").innerHTML = html;

        const placeholder = document.getElementById("nosotros-descripcion-placeholder");
        placeholder.innerHTML = html;
  
        // Solo después de insertar el HTML, ya puedes usar getElementById
        document.getElementById("nosotros-descripcion-title").textContent = "Nosotros";
        document.getElementById("nosotros-descripcion-text").textContent =
        "Con más de 8 años en el sector, en SOLINTEC ofrecemos soluciones tecnológicas industriales especializadas. Nos impulsa el compromiso con la innovación, la calidad y el crecimiento de nuestros clientes.";
      })
      .catch(err => console.error("Error cargando componente:", err));
  });
  
  