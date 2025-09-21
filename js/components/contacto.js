document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/contacto.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("contacto-placeholder").innerHTML = html;
  
        document.getElementById("contacto-title").textContent = "Contacto";
        document.getElementById("contacto-subtitle").textContent =
          "Comunícate con nosotros a través del canal que más te convenga. Estamos para ayudarte.";
  
          const tarjetas = [
            {
              icono: "fa-solid fa-location-dot",
              titulo: "Ubicación",
              texto: "Patoni 508 Nte, Zona Centro, Durango, México",
              boton: "Ver en Google Maps",
              link: "https://www.google.com/maps?q=Calle+Industrial+123+Durango"
            },
            {
              icono: "fa-solid fa-phone",
              titulo: "Teléfonos",
              texto: "618 106 2390<br>618 117 0464",
              boton: "Llamar",
              link: "tel:+526181062390"
            },
            {
              icono: "fa-brands fa-whatsapp",
              titulo: "WhatsApp",
              texto: "",
              boton: "Chatear",
              link: "https://wa.me/526181062390"
            },
            {
              icono: "fa-solid fa-envelope",
              titulo: "Correo electrónico",
              texto: "contacto@solintec.com.mx",
              boton: "Enviar correo",
              link: "mailto:contacto@solintec.com.mx"
            },
            // {
            //   icono: "fa-solid fa-share-nodes",
            //   titulo: "Redes Sociales",
            //   texto: "Síguenos y mantente al tanto de nuestras novedades.",
            //   redes: [
            //     { nombre: "Facebook", icono: "fa-brands fa-facebook-f", link: "https://facebook.com/solintec" },
            //     //{ nombre: "LinkedIn", icono: "fa-brands fa-linkedin-in", link: "https://linkedin.com/company/solintec" },
            //     { nombre: "Instagram", icono: "fa-brands fa-instagram", link: "https://instagram.com/solintec" }
            //   ]
            // }
          ];
  
        const container = document.getElementById("contacto-cards");
  
        tarjetas.forEach(item => {
          const col = document.createElement("div");
          col.className = "col-md-6 col-lg-3";
  
          if (item.redes) {
            const socialLinks = item.redes.map(red => {
                return `<a href="${red.link}" target="_blank" class="btn btn-outline-primary btn-icon rounded-circle me-2 mb-2" title="${red.nombre}">
                <i class="${red.icono}"></i>
              </a>`;              
            }).join("");
  
            col.innerHTML = `
              <div class="contacto-card h-100">
                <div class="contacto-icon"><i class="${item.icono}"></i></div>
                <div class="contacto-title">${item.titulo}</div>
                <div class="contacto-text">${item.texto}</div>
                <div class="d-flex flex-wrap justify-content-center">${socialLinks}</div>
              </div>
            `;
          } else {
            if (item.titulo === "Teléfonos") {
              col.innerHTML = `
                <div class="contacto-card h-100">
                  <div class="contacto-icon"><i class="${item.icono}"></i></div>
                  <div class="contacto-title">${item.titulo}</div>
                  <div class="contacto-text">${item.texto}</div>
                  <a href="${item.link}" target="_blank" class="btn btn-outline-primary contacto-btn">${item.boton}</a>
                </div>
              `;
            } else {
              col.innerHTML = `
                <div class="contacto-card h-100">
                  <div class="contacto-icon"><i class="${item.icono}"></i></div>
                  <div class="contacto-title">${item.titulo}</div>
                  <div class="contacto-text">${item.texto}</div>
                  <a href="${item.link}" target="_blank" class="btn btn-outline-primary contacto-btn">${item.boton}</a>
                </div>
              `;
            }
          }
  
          container.appendChild(col);
        });
      });
  });
  