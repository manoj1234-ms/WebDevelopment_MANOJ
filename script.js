// NorthPeak Digital — minimal vanilla JS, no dependencies.

(function () {
  "use strict";

  /* -------------------------------------------------
     Mobile nav toggle
  ------------------------------------------------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after a nav link is tapped (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -------------------------------------------------
     Contact form — client-side validation
     (Server-side validation must also be added if/when
     this form is wired to a real backend or form service.)
  ------------------------------------------------- */
  var form = document.getElementById("contactForm");
  if (!form) return;

  var fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") }
  };

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var status = document.getElementById("formStatus");

  function setError(field, message) {
    field.input.setAttribute("aria-invalid", message ? "true" : "false");
    field.error.textContent = message || "";
  }

  function validateField(key) {
    var field = fields[key];
    var value = field.input.value.trim();

    if (key === "name") {
      if (value.length < 2) { setError(field, "Enter your full name."); return false; }
    }
    if (key === "email") {
      if (!emailPattern.test(value)) { setError(field, "Enter a valid email address."); return false; }
    }
    if (key === "message") {
      if (value.length < 10) { setError(field, "Tell us a little more (10+ characters)."); return false; }
    }
    setError(field, "");
    return true;
  }

  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener("blur", function () { validateField(key); });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var validations = Object.keys(fields).map(validateField);
    var allValid = validations.every(Boolean);

    if (!allValid) {
      status.textContent = "Please fix the highlighted fields.";
      status.className = "form-status error";
      var firstInvalid = Object.keys(fields).find(function (key) {
        return fields[key].input.getAttribute("aria-invalid") === "true";
      });
      if (firstInvalid) fields[firstInvalid].input.focus();
      return;
    }

    // No backend is wired up for this qualification task.
    // In production this would POST to an endpoint or form service.
    status.textContent = "Thanks — we'll reply within one business day.";
    status.className = "form-status success";
    form.reset();
  });
})();
