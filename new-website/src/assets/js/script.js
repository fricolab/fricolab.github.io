// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger icon
      const spans = mobileMenuToggle.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const spans = mobileMenuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navMenu.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        const spans = mobileMenuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80; // Height of fixed navbar
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      empresa: document.getElementById("empresa").value,
      telefono: document.getElementById("telefono").value,
      servicio: document.getElementById("servicio").value,
      mensaje: document.getElementById("mensaje").value,
    };

    // Here you would normally send the data to a server
    console.log("Form data:", formData);

    // Show success message
    alert(
      "¡Gracias por su interés! Nos pondremos en contacto con usted pronto.\n\nEn producción, este formulario enviaría los datos a su servidor."
    );

    // Reset form
    contactForm.reset();

    // In a real implementation, you would do something like:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert('¡Gracias por su interés! Nos pondremos en contacto con usted pronto.');
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
    });
    */
  });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".service-card, .problem-card, .case-card, .why-card, .roi-card"
  );

  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateValue(element, start, end, duration, suffix = "") {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    if (typeof end === "string" && end.includes("x")) {
      const numEnd = parseInt(end);
      element.textContent = Math.floor(progress * numEnd) + "x";
    } else if (typeof end === "string" && end.includes("%")) {
      const numEnd = parseInt(end);
      element.textContent = Math.floor(progress * numEnd) + "%";
    } else if (typeof end === "string" && end.includes("K")) {
      const numEnd = parseInt(end);
      element.textContent = "€" + Math.floor(progress * numEnd) + "K+";
    } else {
      element.textContent = end;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Observe stat numbers for counter animation
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animated");
        const finalValue =
          entry.target.getAttribute("data-value") || entry.target.textContent;
        animateValue(entry.target, 0, finalValue, 2000);
      }
    });
  },
  { threshold: 0.5 }
);

document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number, .roi-number");
  statNumbers.forEach((stat) => {
    stat.setAttribute("data-value", stat.textContent);
    statObserver.observe(stat);
  });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add active class to current section in navigation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
