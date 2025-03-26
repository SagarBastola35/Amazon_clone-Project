document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Loaded Successfully! 🚀");

    // SEARCH BUTTON FUNCTIONALITY
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", () => {
        let query = searchInput.value.trim();
        if (query !== "") {
            alert(`Searching for: ${query}`);
            // You can replace this with `window.location.href = "search.html?q=" + query;`
        } else {
            alert("Please enter a search query!");
        }
    });

    // Trigger search on Enter key press
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });

    // NAVBAR RESPONSIVE TOGGLE (for Mobile)
    const panelOps = document.querySelector(".panel-ops");
    const panelDeals = document.querySelector(".panel-deals");

    function toggleNavbar() {
        if (window.innerWidth < 768) {
            panelOps.style.display = panelOps.style.display === "none" ? "block" : "none";
            panelDeals.style.display = panelDeals.style.display === "none" ? "block" : "none";
        } else {
            panelOps.style.display = "flex";
            panelDeals.style.display = "block";
        }
    }

    window.addEventListener("resize", toggleNavbar);
    toggleNavbar(); // Call it initially to adjust based on screen size

    // CART HOVER EFFECT
    const cart = document.querySelector(".nav-cart");

    cart.addEventListener("mouseenter", () => {
        cart.style.color = "#febd68";
        cart.style.transition = "color 0.3s";
    });

    cart.addEventListener("mouseleave", () => {
        cart.style.color = "white";
    });

    // FOOTER YEAR UPDATE
    document.querySelector(".copyright").innerHTML = `© ${new Date().getFullYear()} Amazon Clone. All rights reserved.`;

    console.log("JavaScript is running smoothly! 🎉");
});













