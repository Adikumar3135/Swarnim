
const navLinks = document.querySelectorAll("nav ul li a");
const menuCheckbox = document.getElementById("menu");

/* ================= AUTO CLOSE MENU ================= */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuCheckbox.checked = false;
    });
});