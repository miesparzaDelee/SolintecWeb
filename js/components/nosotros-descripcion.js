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
  "En SOLINTEC, desde 2018 hemos evolucionado para responder a las necesidades técnicas de la industria mexicana. Nuestra trayectoria nos ha llevado de la especialización en productos eléctricos a la integración de soluciones en automatización y suministros industriales, colaborando con sectores clave como hotelería, minería, manufactura y energía. Nos distingue la adaptación constante, la calidad y la construcción de alianzas estratégicas que fortalecen el valor que ofrecemos a nuestros clientes.";
      })
      .catch(err => console.error("Error cargando componente:", err));
  });
  
  