document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-valores.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-valores-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-valores-title").textContent = "Nuestros Valores";
  
        const valores = [
          {
            icon: "🧭",
            titulo: "Honestidad",
            descripcion: "Actuamos con transparencia e integridad en todo momento."
          },
          {
            icon: "🤝",
            titulo: "Respeto",
            descripcion: "Reconocemos la dignidad de cada persona en nuestras interacciones."
          },
          {
            icon: "⚖️",
            titulo: "Igualdad",
            descripcion: "Promovemos condiciones justas y equitativas en todas las relaciones."
          },
          {
            icon: "⚙️",
            titulo: "Calidad",
            descripcion: "Cumplimos con los más altos estándares en productos y servicios."
          },
          {
            icon: "📌",
            titulo: "Compromiso",
            descripcion: "Atendemos y resolvemos las necesidades del cliente de manera integral."
          },
          {
            icon: "🏛️",
            titulo: "Formalidad y seguridad",
            descripcion: "Mantenemos relaciones confiables, responsables y sostenibles con clientes y proveedores."
          },
          {
            icon: "⏰",
            titulo: "Cumplimiento en tiempos",
            descripcion: "Respetamos plazos y fechas de entrega como parte esencial de la confiabilidad de nuestro servicio."
          }
        ];
  
        const container = document.getElementById("nosotros-valores-cards");
  
        valores.forEach(valor => {
          const col = document.createElement("div");
          col.className = "col-md-6 col-lg-3";
          col.innerHTML = `
            <div class="valor-card h-100">
              <div class="valor-icon">${valor.icon}</div>
              <div class="valor-title">${valor.titulo}</div>
              <div class="valor-text">${valor.descripcion}</div>
            </div>
          `;
          container.appendChild(col);
        });
      });
  });
  