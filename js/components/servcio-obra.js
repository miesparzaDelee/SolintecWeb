document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Obra Civil";
        section.querySelector(".servicio-subtitle").textContent = "Construcción para entornos industriales";
        section.querySelector(".servicio-text").textContent =
          "Construimos infraestructura industrial funcional y duradera. Integramos obra civil con instalaciones técnicas, respetando normas de ingeniería, plazos y presupuestos.";
        section.querySelector(".servicio-icon").textContent = "🏗️";
        section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Obra civil";
  

        const lista = [
            "Cimentaciones para maquinaria",
        "Naves industriales y estructuras",
        "Canalizaciones y ducterías técnicas",
        "Coordinación con instalaciones electromecánicas"
        ];

        const list = section.querySelector(".servicio-list");
        lista.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });

        document.getElementById("servicio-obra-placeholder").appendChild(section);
      });
  });
  