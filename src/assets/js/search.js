const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-container");
const closeIcon = document.getElementById("search-close");

searchIcon.addEventListener("click", function () {
	searchBar.setAttribute("aria-hidden", "false");
	searchBar.classList.remove("screen-reader-text");
	const searchInput = document.querySelector(".pagefind-ui__search-input");
	searchInput.focus();
});

closeIcon.addEventListener("click", function () {
	searchBar.setAttribute("aria-hidden", "true");
	searchBar.classList.add("screen-reader-text");
});
