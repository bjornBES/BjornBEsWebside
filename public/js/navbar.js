
function NavbarClick()
{
    const navbar = document.getElementById("NavBar")
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
        navbar.classList.add("visible");
    } else {
        navbar.classList.remove("visible");
        navbar.classList.add("hidden");
    }
}