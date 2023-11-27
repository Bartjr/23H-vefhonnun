document.addEventListener("DOMContentLoaded", function () {

    const welcomeContainer = document.querySelector('.welcome-container');
    const contentContainer = document.querySelector('.content-container');


    function toggleVisibility() {
        welcomeContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    }

    setTimeout(toggleVisibility, 5000); 
});