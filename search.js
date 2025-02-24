document.getElementById("search-btn").addEventListener("click", function () {
    let searchText = document.getElementById("search-input").value.toLowerCase();
    let contentElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, label");
    let found = false;
    let allElements = [];

    document.querySelectorAll(".highlight").forEach(el => {
        el.classList.remove("highlight");
    });

    function highlightMatch(element, searchText) {
        let regex = new RegExp(`(${searchText})`, "gi");
        let originalContent = element.textContent;
        element.innerHTML = originalContent.replace(regex, '<span class="highlight">$1</span>');
    }

    contentElements.forEach(el => {
        if (searchText !== "" && el.textContent.toLowerCase().includes(searchText)) {
            highlightMatch(el, searchText);
            found = true;
            allElements.push(el);
        }
    });

    if (!found && searchText !== "") {
        alert(`"${searchText}" not found in the page!`);
    } else if (found) {
        allElements[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
});