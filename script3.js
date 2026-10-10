
// Mobile navigation menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Set current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Show back-to-top button when scrolling
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Contact form demonstration
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your form was checked successfully.";

    this.reset();
});
