document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/nosotros-valores.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("nosotros-valores-placeholder").innerHTML = html;
  
        document.getElementById("nosotros-valores-title").textContent = "Nuestros Valores";
  
        const valores = [
          {
            icon: "💡",
            titulo: "Innovación",
            descripcion: "Buscamos constantemente mejorar nuestros procesos y soluciones para adelantarnos al cambio tecnológico."
          },
          {
            icon: "🤝",
            titulo: "Compromiso",
            descripcion: "Nos involucramos en cada proyecto con responsabilidad y dedicación total al cliente."
          },
          {
            icon: "⚙️",
            titulo: "Calidad",
            descripcion: "Ofrecemos productos y servicios con altos estándares técnicos y operativos."
          },
          {
            icon: "🔧",
            titulo: "Flexibilidad",
            descripcion: "Nos adaptamos a los requerimientos y desafíos del entorno industrial en constante evolución."
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
  