// document.addEventListener("DOMContentLoaded", function() {
//   const hero = document.querySelector(".hero");
//   hero.style.opacity = 0;
//   setTimeout(() => { hero.style.transition = "opacity 2s"; hero.style.opacity = 1; }, 500);
// });

window.onload = function () {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    });
};


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  let formData = { name, email, message };
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  
  document.getElementById("formMessage").textContent = "Thank you for reaching out! We will get back to you soon.";
  document.getElementById("contactForm").reset();
});