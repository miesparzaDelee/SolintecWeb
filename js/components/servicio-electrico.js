document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Servicios Eléctricos";
        section.querySelector(".servicio-subtitle").textContent = "Montaje y configuración profesional";
        section.querySelector(".servicio-text").textContent =
         "Realizamos instalaciones eléctricas industriales con enfoque en seguridad, eficiencia energética y cumplimiento de normativas. Desde canalizaciones hasta tableros de distribución.";
        section.querySelector(".servicio-icon").textContent = "⚡";
        section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Servicios eléctricos";
  
        const lista = [
            "Diseño de planos eléctricos",
            "Instalación de media y baja tensión",
            "Tableros y centros de carga",
            "Certificación RETIE / NOM"
        ];

        const list = section.querySelector(".servicio-list");
        lista.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });


        document.getElementById("servicio-electrico-placeholder").appendChild(section);
      });
  });
  