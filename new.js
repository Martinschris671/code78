document.addEventListener("DOMContentLoaded", function () {
    // Dynamic welcome message
    const welcomeMessage = document.getElementById("welcomeMessage");
    setTimeout(() => {
        welcomeMessage.style.display = "none";
    }, 3000);
});
