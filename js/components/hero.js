document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/hero.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("hero-placeholder").innerHTML = html;
  
        // Optional class for position control
        document.getElementById("hero").classList.add("position-right");
  
        // Dynamic content
        document.getElementById("hero-subtitle").textContent = "Automatización y Suministros Industriales";
        document.getElementById("hero-title").textContent = "Excelencia en tecnología industrial";
        document.getElementById("hero-description").textContent =
          "En SOLINTEC, cada reto es una oportunidad para innovar y servirte con excelencia. Nos guiamos por el cumplimiento, la calidad y la proactividad, brindando soluciones confiables que generan valor y confianza para tu industria.";
  
        const button = document.getElementById("hero-button");
        button.textContent = "Enviar WhatsApp";
        button.href = "https://wa.me/526181062390?text=Hola,%20quisiera%20más%20información%20sobre%Solintec";
      })
      .catch(err => console.error("Error loading hero component:", err));
  });
  