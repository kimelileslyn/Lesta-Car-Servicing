const button = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-theme");
    button.textContent = "☀️ Light Mode";

} else {

    document.body.classList.add("dark-theme");
    button.textContent = "🌙 Dark Mode";
}

// Toggle themes
button.addEventListener("click", function () {

    if (document.body.classList.contains("dark-theme")) {

        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");

        localStorage.setItem("theme", "light");

        button.textContent = "☀️ Light Mode";

    } else {

        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");

        localStorage.setItem("theme", "dark");

        button.textContent = "🌙 Dark Mode";
    }

});