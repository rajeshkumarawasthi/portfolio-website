// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling with basic validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can replace this with actual form submission code
    // For example, using fetch API to send form data to backend
    // Replace "send_email.php" with your actual backend endpoint
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Message sent successfully!');
        form.reset(); // Clear form fields after successful submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue sending your message. Please try again later.');
    });
});
