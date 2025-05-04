document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Automatización";
        section.querySelector(".servicio-subtitle").textContent = "Integración de sistemas automatizados";
        section.querySelector(".servicio-text").textContent =
          "Diseñamos soluciones automatizadas a medida para mejorar eficiencia, reducir errores y aumentar la seguridad operativa. Utilizamos PLCs, sensores, HMI y sistemas SCADA con integración escalable.";
        section.querySelector(".servicio-icon").textContent = "🤖";
        section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/18471551/pexels-photo-18471551/free-photo-of-industria-tecnologia-fabrica-poder.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Automatización industrial";
  
        const lista = [
            "Diseño e instalación de controladores",
            "Monitoreo y control remoto",
            "Reducción de tiempos muertos",
            "Soporte de ingeniería especializado"
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
  