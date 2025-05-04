document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/navbar.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar-placeholder").innerHTML = html;
  
        // Inject logo link (optional if not in HTML statically)
        const brandLink = document.getElementById("brand-link");
        if (brandLink) {
          brandLink.href = "/";
          brandLink.textContent = "Solintec";
        }
  
        // Optionally populate nav items
        const navbarItems = document.getElementById("navbar-items");
        if (navbarItems) {
          const navLinks = [
            { text: "Inicio", href: "/" },
            { text: "Nosotros", href: "/nosotros.html" },
            { text: "Servicios", href: "/servicios.html" },
            { text: "Contacto", href: "/contacto.html" },
          ];
  
          navLinks.forEach((link, index) => {
            const li = document.createElement("li");
            li.className = "nav-item" + (index === 0 ? " active" : "");
  
            const a = document.createElement("a");
            a.className = "nav-link";
            a.href = link.href;
            a.textContent = link.text;
  
            li.appendChild(a);
            navbarItems.appendChild(li);
          });
        }
      })
      .catch(error => {
        console.error("Failed to load navbar:", error);
      });
  });
  