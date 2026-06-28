const button = document.getElementById("theme-toggle");

// Start in dark mode
document.body.classList.add("dark-theme");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        button.textContent = "🌙 Dark Mode";
    } else {
        button.textContent = "☀️ Light Mode";
    }

});