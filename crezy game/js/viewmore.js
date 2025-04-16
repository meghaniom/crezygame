function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryParam = getQueryParameter("category");

  if (!categoryParam) {
    document.getElementById("games-list").innerHTML =
      "<p>No category specified.</p>";
    return;
  }
  const categoryData = categories.find(
    (cat) => cat.category.trim() === decodeURIComponent(categoryParam).trim()
  );

  if (!categoryData) {
    document.getElementById("games-list").innerHTML;
    return;
  }

  document.getElementById("category-heading").textContent =
    categoryData.category;

  const gamesData = categoryData.games;

  renderGameCards(gamesData);
});
function renderGameCards(games) {
  const gamesList = document.getElementById("games-list");

  const gamesHTML = games
    .map(
      (game) => `
    <div class="game-card">
    <div class= "sub-item-third">
      <a href="gameview.html?id=${game.id}" class="game-link">
        <div class="game-image-container">
          <img src="${game.Image}" alt="${game.id || "Game"}">
          ${
            game.video
              ? `<video class="game-preview" src="${game.video}" muted loop playsinline></video>`
              : ""
          }
        </div>
        <h3 class="game-title">${game.id}</h3>
      </a>
      </div>
    </div>
  `
    )
    .join("");

  gamesList.innerHTML = `
    <div class="games-grid">
      ${gamesHTML}
    </div>
  `;

  document.querySelectorAll(".game-image-container").forEach((container) => {
    const video = container.querySelector("video");
    if (video) {
      container.addEventListener("mouseenter", () => {
        video.style.display = "block";
        video.play();
      });
      container.addEventListener("mouseleave", () => {
        video.style.display = "none";
        video.pause();
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const gamesContainer = document.getElementById("games-container");
  if (!gamesContainer) {
    console.error("Error: games-container element is missing in HTML.");
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const category = decodeURIComponent(urlParams.get("category") || "");

  console.log("Selected Category:", category);
  console.log("Available Categories in player2:", player2); 

  if (category) {
    document.getElementById("category-heading").textContent = category;
    const selectedCategory = player2.find(
      (section) => section.category.trim() === category.trim()
    );

    if (selectedCategory) {
      gamesContainer.classList.add("games-container");
      gamesContainer.innerHTML = selectedCategory.games
        .map(
          (game) => `
            <div class="game-card">
              <div class= "sub-item-third">
                <a href="${game.url}" target="_blank">
                    <img src="${game.Image}" alt="${game.id}">
                    <video src="${game.video}" muted loop></video>
                </a>
                </div>
            </div>
        `
        )
        .join("");

        document.querySelectorAll(".game-image-container").forEach((container) => {
          const video = container.querySelector("video");
          if (video) {
            container.addEventListener("mouseenter", () => {
              video.style.display = "block";
              video.play();
            });
            container.addEventListener("mouseleave", () => {
              video.style.display = "none";
              video.pause();
            });
          }
        });
    } else {
      gamesContainer.innerHTML = "<p>No games found in this category.</p>";
    }
  } else {
    document.getElementById("category-heading").textContent =
      "No category selected";
  }
});
