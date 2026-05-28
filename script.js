const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const quoteForm = document.querySelector("#quote-form");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = String(formData.get("customerName") || "").trim();
    const serviceType = String(formData.get("serviceType") || "IT service").trim();
    const details = String(formData.get("quoteDetails") || "").trim();

    const messageParts = [
      "Hi Veeresh, I am looking to get a quote for " + serviceType + " from Sree Pooja Technologies.",
    ];

    if (name) {
      messageParts.push("My name is " + name + ".");
    }

    if (details) {
      messageParts.push("Details: " + details);
    }

    window.open("https://wa.me/919866384823?text=" + encodeURIComponent(messageParts.join(" ")), "_blank", "noopener");
  });
}
