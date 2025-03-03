// JavaScript to handle menu category switching
document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(".menu-categories ul li a");
    const menuCategories = document.querySelectorAll(".menu-category");

    categoryLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all links
            categoryLinks.forEach((link) => link.classList.remove("active"));

            // Add active class to the clicked link
            link.classList.add("active");

            // Hide all menu categories
            menuCategories.forEach((category) => (category.style.display = "none"));

            // Show the selected category
            const targetCategory = document.querySelector(link.getAttribute("href"));
            targetCategory.style.display = "flex";
        });
    });
});

// JavaScript to handle reservation form submission
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservation-form");
    const reservationMessage = document.getElementById("reservation-message");

    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            reservationMessage.textContent = "Your reservation has been confirmed! We look forward to seeing you.";
            reservationMessage.classList.add("success");
            reservationMessage.classList.remove("error");

            // Clear the form
            reservationForm.reset();
        }, 1000);
    });
});

// JavaScript to handle contact form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactMessage = document.getElementById("contact-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            contactMessage.textContent = "Your message has been sent! We'll get back to you soon.";
            contactMessage.classList.add("success");
            contactMessage.classList.remove("error");

            // Clear the form
            contactForm.reset();
        }, 1000);
    });

    // Google Maps Integration
    function initMap() {
        const location = { lat: 40.712776, lng: -74.005974 }; // Replace with your restaurant's coordinates
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
        });
        new google.maps.Marker({
            position: location,
            map: map,
            title: "Delicious Bites Restaurant",
        });
    }

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
});
// JavaScript to handle review form submission and star rating
document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const reviewMessage = document.getElementById("review-message");
    const stars = document.querySelectorAll(".star-rating .star");

    // Star Rating Logic
    stars.forEach((star) => {
        star.addEventListener("click", function () {
            const value = parseInt(star.getAttribute("data-value"));
            document.getElementById("review-rating").value = value;

            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add("active");
                    s.textContent = "⭐";
                } else {
                    s.classList.remove("active");
                    s.textContent = "☆";
                }
            });
        });
    });

    // Review Form Submission
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(reviewForm);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            reviewMessage.textContent = "Thank you for your review!";
            reviewMessage.classList.add("success");
            reviewMessage.classList.remove("error");

            // Clear the form
            reviewForm.reset();
            stars.forEach((star) => {
                star.classList.remove("active");
                star.textContent = "☆";
            });
        }, 1000);
    });
});
// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});