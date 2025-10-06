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
      // Extract number from string like "€50K+" or "50K"
      const match = end.match(/(\d+)/);
      if (match) {
        const numEnd = parseInt(match[1]);
        const prefix = end.includes("€") ? "€" : "";
        const postfix = end.includes("+") ? "K+" : "K";
        element.textContent = prefix + Math.floor(progress * numEnd) + postfix;
      } else {
        element.textContent = end;
      }
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

// ============================================
// COOKIE CONSENT MANAGEMENT
// ============================================

const COOKIE_NAME = "fricolab_cookie_consent";
const COOKIE_EXPIRY_DAYS = 365;

// Cookie utility functions
const CookieManager = {
  setCookie: function (name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
      name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
  },

  getCookie: function (name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  deleteCookie: function (name) {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
};

// Google Analytics initialization
function initGoogleAnalytics() {
  // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = "G-8YWHYQD5B4";

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true, // Anonymize IP addresses for GDPR compliance
    cookie_flags: "SameSite=Lax;Secure",
  });

  console.log("Google Analytics initialized");
}

// Remove Google Analytics
function removeGoogleAnalytics() {
  // Remove GA cookies
  const gaCookies = ["_ga", "_gat", "_gid"];
  gaCookies.forEach((cookie) => {
    CookieManager.deleteCookie(cookie);
    // Also try to delete with domain
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
  });

  // Remove GA scripts
  const gaScripts = document.querySelectorAll(
    'script[src*="googletagmanager"]'
  );
  gaScripts.forEach((script) => script.remove());

  console.log("Google Analytics removed");
}

// Show cookie banner
function showCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    // Small delay for smoother animation
    setTimeout(() => {
      banner.classList.add("show");
    }, 500);
  }
}

// Hide cookie banner
function hideCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    banner.classList.remove("show");
  }
}

// Handle cookie acceptance
function acceptAllCookies() {
  CookieManager.setCookie(COOKIE_NAME, "accepted", COOKIE_EXPIRY_DAYS);
  initGoogleAnalytics();
  hideCookieBanner();
  console.log("All cookies accepted");
}

// Handle cookie rejection (only essential)
function rejectNonEssentialCookies() {
  CookieManager.setCookie(COOKIE_NAME, "rejected", COOKIE_EXPIRY_DAYS);
  removeGoogleAnalytics();
  hideCookieBanner();
  console.log("Non-essential cookies rejected");
}

// Check cookie consent status on page load
function checkCookieConsent() {
  const consent = CookieManager.getCookie(COOKIE_NAME);

  if (consent === "accepted") {
    // User has accepted cookies, initialize analytics
    initGoogleAnalytics();
  } else if (consent === "rejected") {
    // User has rejected, ensure no analytics
    removeGoogleAnalytics();
  } else {
    // No consent recorded, show banner
    showCookieBanner();
  }
}

// Initialize cookie consent management
document.addEventListener("DOMContentLoaded", function () {
  checkCookieConsent();

  // Accept button
  const acceptBtn = document.getElementById("acceptCookies");
  if (acceptBtn) {
    acceptBtn.addEventListener("click", acceptAllCookies);
  }

  // Reject button
  const rejectBtn = document.getElementById("rejectCookies");
  if (rejectBtn) {
    rejectBtn.addEventListener("click", rejectNonEssentialCookies);
  }
});

// Export for potential use in other scripts
window.CookieConsent = {
  accept: acceptAllCookies,
  reject: rejectNonEssentialCookies,
  check: checkCookieConsent,
};
