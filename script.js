document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        var nameField = document.getElementById("name");
        var emailField = document.getElementById("email");
        var messageField = document.getElementById("message");
        var errorMessages = [];

        if (nameField.value.trim() === "") {
            errorMessages.push("Please enter your name.");
        }

        if (emailField.value.trim() === "") {
            errorMessages.push("Please enter your email address.");
        } else if (!isValidEmail(emailField.value.trim())) {
            errorMessages.push("Please enter a valid email address.");
        }

        if (messageField.value.trim() === "") {
            errorMessages.push("Please enter your message.");
        }

        if (errorMessages.length > 0) {
            e.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });

    function isValidEmail(email) {
        // Basic email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
