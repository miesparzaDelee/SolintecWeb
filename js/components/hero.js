document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/hero.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("hero-placeholder").innerHTML = html;
  
        // Optional class for position control
        document.getElementById("hero").classList.add("position-right");
  
        // Dynamic content
        document.getElementById("hero-subtitle").textContent = "Soluciones tecnológicas industriales";
        document.getElementById("hero-title").textContent = "Estamos listos para impulsar tu industria";
        document.getElementById("hero-description").textContent =
          "En SOLINTEC te ayudamos a resolver tus retos tecnológicos con soluciones personalizadas, productos especializados y atención inmediata. Contáctanos y descubre cómo podemos ser tu aliado estratégico.";
  
        const button = document.getElementById("hero-button");
        button.textContent = "Enviar WhatsApp";
        button.href = "https://wa.me/521234567890?text=Hola,%20quisiera%20más%20información";
      })
      .catch(err => console.error("Error loading hero component:", err));
  });
  