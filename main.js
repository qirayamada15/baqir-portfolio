// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page
    alert("Thank you! Your message has been sent.");
});
