document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Select the welcome and content containers
    const welcomeContainer = document.querySelector('.welcome-container');
    const contentContainer = document.querySelector('.content-container');

    // Function to toggle visibility
    function toggleVisibility() {
        welcomeContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    }

    // Set a timeout to call the function after the animation
    setTimeout(toggleVisibility, 5000); // 5000 milliseconds (5 seconds)
});