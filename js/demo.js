document.addEventListener("DOMContentLoaded", () => {
 

  categories.forEach((category) => {
    const section = document.createElement("div");
    section.classList.add("category-section");

    section.innerHTML = `
    <h2>${category.category}</h2>
    <div class="sub-item-container">
      <button class="left-btn"> <i class="fa-solid fa-angle-left"></i></button>
      <div class="sub-item">
        ${category.games
          .map(
            (game) => `
              <div class="sub-item-third">
                <a href="gameview.html?id=${game.id}">
                  <img src="${game.Image}" alt="${game.name || 'Game'}">
                </a>
              </div>
            `
          )
          .join("") || "<p>No games available</p>"}
      </div>
      <button class="right-btn"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  `;
  document.getElementById("category-container").appendChild(section);
});
document.querySelectorAll(".category-section").forEach((section) => {
  const subItemContainer = section.querySelector(".sub-item");
  const leftBtn = section.querySelector(".left-btn");
  const rightBtn = section.querySelector(".right-btn");

  const scrollAmount = 700;

  // Function to toggle button visibility based on scroll position
  function toggleButtonVisibility() {
    const scrollPosition = subItemContainer.scrollLeft;
    const maxScroll = subItemContainer.scrollWidth - subItemContainer.clientWidth;

    // Hide left button if at the start, show otherwise
    if (scrollPosition <= 0) {
      leftBtn.style.visibility = "hidden";
      leftBtn.disabled = true;
    } else {
      leftBtn.style.visibility = "visible";
      leftBtn.disabled = false;
    }

   
    if (scrollPosition >= maxScroll) {
      rightBtn.style.visibility = "hidden";
      rightBtn.disabled = true;
    } else {
      rightBtn.style.visibility = "visible";
      rightBtn.disabled = false;
    }
  }

  // Scroll left on button click
  leftBtn.addEventListener("click", () => {
    subItemContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll right on button click
  rightBtn.addEventListener("click", () => {
    subItemContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Update button visibility whenever scrolling occurs
  subItemContainer.addEventListener("scroll", toggleButtonVisibility);

  // Initial button visibility check
  toggleButtonVisibility();
});
});
