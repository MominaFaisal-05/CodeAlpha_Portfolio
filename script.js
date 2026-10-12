// MOBILE NAVIGATION
const menuBtn = document.querySelector("#menuBtn");
const links = document.querySelector("#links");
if (menuBtn && links) {

    // Open and close the mobile menu
    menuBtn.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", isOpen);
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuBtn.textContent = isOpen ? "×" : "☰";
    });
    // Close the menu after selecting a navigation link
    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.textContent = "☰";
        });
    });
    // Close the menu when clicking outside it
    document.addEventListener("click", event => {
        const clickedInsideMenu = links.contains(event.target);
        const clickedButton = menuBtn.contains(event.target);
        if (!clickedInsideMenu && !clickedButton) {
            links.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.textContent = "☰";
        }
    });
    // Close the menu when switching to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            links.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.textContent = "☰";
        }
    });
}