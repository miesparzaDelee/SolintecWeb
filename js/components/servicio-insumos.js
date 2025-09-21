document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Suministros Industriales";
        section.querySelector(".servicio-subtitle").textContent = "Materiales eléctricos, electrónicos y de automatización";
        section.querySelector(".servicio-text").textContent =
          "Proveemos equipos, componentes y accesorios industriales de alta calidad, con disponibilidad inmediata y respaldo técnico. Trabajamos con marcas nacionales e internacionales para garantizar soluciones confiables y adaptadas a cada necesidad.";
        section.querySelector(".servicio-icon").textContent = "🏭";
  section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/4481328/pexels-photo-4481328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Suministros industriales";
        
        const lista = [
            "Stock local y entregas inmediatas",
            "Productos certificados y garantizados",
            "Soporte técnico pre y post venta",
            "Suministro de refacciones y consumibles",
            "Gestión de inventarios industriales"
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
  