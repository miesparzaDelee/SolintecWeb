document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
  section.querySelector(".servicio-title").textContent = "Ingeniería y Diseño";
  section.querySelector(".servicio-subtitle").textContent = "Soluciones embebidas y desarrollo industrial";
  section.querySelector(".servicio-text").textContent =
   "Desarrollamos soluciones embebidas (hardware y firmware), diseño mecánico y modelado 3D, prototipado y pruebas, estudios de proceso y capacitación, e integración de tecnologías de Industria 4.0 para optimizar procesos industriales y crear proyectos a la medida.";
  section.querySelector(".servicio-icon").textContent = "🛠️";
  section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  section.querySelector(".servicio-img").alt = "Ingeniería y diseño industrial";
  
        const lista = [
            "Desarrollo de sistemas embebidos (hardware + firmware)",
            "Prototipado y pruebas funcionales",
            "Diseño mecánico y modelado 3D",
            "Integración de tecnologías de Industria 4.0",
            "Optimización de procesos y layouts industriales",
            "Proyectos llave en mano",
            "Estudios de proceso (tiempos, movimientos, eficiencia)",
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
  