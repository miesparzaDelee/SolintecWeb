document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/servicio-base.html")
      .then(res => res.text())
      .then(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const section = wrapper.querySelector(".servicio-seccion");
  
        section.querySelector(".servicio-title").textContent = "Consultoría y Capacitación";
        section.querySelector(".servicio-subtitle").textContent = "Asesoría técnica y formación industrial";
        section.querySelector(".servicio-text").textContent =
          "Ofrecemos diagnóstico de procesos, asesoría en control y seguridad industrial, capacitación en PLCs, instrumentación y mantenimiento, y consultoría en digitalización y tecnologías emergentes para potenciar la competitividad de tu empresa.";
        section.querySelector(".servicio-icon").textContent = "🎓";
  section.querySelector(".servicio-img").src = "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        section.querySelector(".servicio-img").alt = "Consultoría y capacitación industrial";
  

        const lista = [
      "Diagnóstico de procesos productivos",
      "Asesoría en control y seguridad industrial",
      "Capacitación en PLCs, instrumentación y mantenimiento",
      "Consultoría en digitalización y tecnologías emergentes",
      "Implementación de sistemas de gestión energética",
      "Formación en normativas y estándares industriales"
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
  