// JavaScript for Interactive Elements

document.addEventListener("DOMContentLoaded", function() {
    // Popup Form
    const popupForm = document.getElementById("popupForm");
    const bookDemoBtn = document.querySelector(".book-demo-btn");
    const closePopup = document.getElementById("closePopup");
    const demoForm = document.getElementById("demoForm");

    // Open Popup Form
    bookDemoBtn.addEventListener("click", function() {
        popupForm.style.display = "flex"; // Use flex to align center
    });

    // Close Popup Form
    closePopup.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    // Close Popup Form on Outside Click
    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Handle Form Submission
    demoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("tel").value;
        const babystage = document.getElementById("babystage").value;

        // Simulate form submission
        console.log(`Name: ${name}, Email: ${email}, Tel: ${tel}, Babystage: ${babystage}`);
        alert("Demo request submitted!");

        // Close the form after submission
        popupForm.style.display = "none";
    });

    // Carousel Navigation (Example)
    const wonderItems = document.querySelectorAll('.wonder-item');
    let currentIndex = 0;

    // Next and Previous Navigation
    document.querySelector('.next-btn').addEventListener('click', function() {
        wonderItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % wonderItems.length;
        wonderItems[currentIndex].classList.add('active');
    });

    document.querySelector('.prev-btn').addEventListener('click', function() {
        wonderItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + wonderItems.length) % wonderItems.length;
        wonderItems[currentIndex].classList.add('active');
    });
});
