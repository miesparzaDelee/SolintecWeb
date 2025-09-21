document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Automatización";
        section.querySelector(".servicio-subtitle").textContent = "Soluciones avanzadas para la industria";
        section.querySelector(".servicio-text").textContent =
          "Integramos sistemas automatizados que optimizan procesos industriales, mejoran la eficiencia y elevan la seguridad operativa. Implementamos PLCs, HMI, SCADA, buses industriales y tecnologías inteligentes para una gestión integral y escalable.";
        section.querySelector(".servicio-icon").textContent = "🤖";
        section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/18471551/pexels-photo-18471551/free-photo-of-industria-tecnologia-fabrica-poder.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Automatización industrial";
  
        const lista = [
            "Programación de PLCs y HMI",
            "Integración de buses y redes industriales (Profibus, Profinet, Modbus y SCADA)",
            "Seguridad y conectividad de sistemas (incluye ciberseguridad OT)",
            "Integración de sensores y actuadores inteligentes",
            "Monitoreo remoto y análisis de datos industriales",
            "Diseño e instalación de controladores",
            "Reducción de tiempos muertos",
            "Retrofits y actualización de programas: modificación y mejora de sistemas existentes para optimizar procesos"
      ];

        const list = section.querySelector(".servicio-list");
        lista.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });


        document.getElementById("servicio-automatizacion-placeholder").appendChild(section);
      });
  });
  