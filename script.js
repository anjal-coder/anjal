// Shared JavaScript for AMARI
document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the copyright year.
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle.
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    // Close the mobile menu after a navigation link is selected.
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
      });
    });
  }

  // Contact form validation (client-side demonstration only).
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const status = document.getElementById("formStatus");

    const fields = [
      { id: "name", errorId: "nameError", message: "Please enter your name." },
      { id: "email", errorId: "emailError", message: "Please enter a valid email address." },
      { id: "subject", errorId: "subjectError", message: "Please enter a subject." },
      { id: "message", errorId: "messageError", message: "Please enter a message of at least 10 characters." }
    ];

    function showError(field, message) {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
      input.classList.add("invalid");
      input.setAttribute("aria-invalid", "true");
      error.textContent = message;
    }

    function clearError(field) {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
      input.classList.remove("invalid");
      input.removeAttribute("aria-invalid");
      error.textContent = "";
    }

    fields.forEach(function (field) {
      const input = document.getElementById(field.id);
      input.addEventListener("input", function () {
        clearError(field);
        status.textContent = "";
        status.className = "form-status";
      });
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let valid = true;

      fields.forEach(clearError);

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name.length < 2) {
        showError(fields[0], "Name must contain at least 2 characters.");
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showError(fields[1], fields[1].message);
        valid = false;
      }

      if (subject.length < 3) {
        showError(fields[2], "Subject must contain at least 3 characters.");
        valid = false;
      }

      if (message.length < 10) {
        showError(fields[3], fields[3].message);
        valid = false;
      }

      if (!valid) {
        status.textContent = "Please correct the highlighted fields and try again.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Thank you, " + name + "! Your form passed validation. This demo does not send or store messages.";
      status.className = "form-status success";
      contactForm.reset();
    });
  }
});
