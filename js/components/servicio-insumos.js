document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Proveedor de Insumos";
        section.querySelector(".servicio-subtitle").textContent = "Materiales eléctricos y electrónicos";
        section.querySelector(".servicio-text").textContent =
          "Suministramos productos especializados para el sector industrial: desde componentes eléctricos hasta electrónicos de alta precisión. Trabajamos con proveedores nacionales e internacionales para garantizar disponibilidad, calidad y cumplimiento normativo.";
        section.querySelector(".servicio-icon").textContent = "📦";
        section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Insumos industriales";
        
        const lista = [
            "Stock local y entregas inmediatas",
            "Productos certificados",
            "Soporte técnico pre y post venta",
            "Importación bajo demanda"
          ];

        const list = section.querySelector(".servicio-list");
        lista.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });

        document.getElementById("servicio-insumos-placeholder").appendChild(section);
      });
  });
  