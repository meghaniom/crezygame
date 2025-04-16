document.addEventListener("DOMContentLoaded", () => {


  categories.forEach((category) => {
    const section = document.createElement("div");
    section.classList.add("category-section");

    section.innerHTML = `
    <h2>${category.category}${category.showViewMore ? `<a href="viewmore.html?category=${encodeURIComponent(category.category)}" class= "view">view more</a>` : ''}</h2>
    <div class="sub-item-container">
      <button class="left-btn ${category.category.trim() === 'CrazyGames Originals' ? 'crazy-games-btn' : ''}"> 
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <div class="sub-item">
        ${category.games
        .map(
          (game) => `
              <div class="sub-item-third ${category.category.trim() === 'CrazyGames Originals' ? 'crazy-games-block' : ''}">
                <a href="gameview.html?id=${game.id}" class="game-link">
                  <img src="${game.Image}" alt="${game.name || 'Game'}">
                  ${game.video ? `<video class="game-preview" src="${game.video}" muted loop playsinline></video>` : ''}
                </a>
              </div>
            `
        )
        .join("") || "<p>No games available</p>"}
      </div>
      <button class="right-btn ${category.category.trim() === 'CrazyGames Originals' ? 'crazy-games-btn' : ''}">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  `;
    document.getElementById("category-container").appendChild(section);

    // Add hover event listeners for videos
    const gameItems = section.querySelectorAll('.sub-item-third');
    gameItems.forEach(item => {
      const video = item.querySelector('video');
      const img = item.querySelector('img');

      if (video) {
        item.addEventListener('mouseenter', () => {
          video.style.display = 'block';
          video.play().catch(err => console.log("Video play failed:", err));
        });

        item.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0;
          video.style.display = 'none';
        });
      }
    });
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


    leftBtn.addEventListener("click", () => {
      subItemContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });


    rightBtn.addEventListener("click", () => {
      subItemContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    subItemContainer.addEventListener("scroll", toggleButtonVisibility);

    toggleButtonVisibility();
  });
});
document.querySelector('.navigation').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  const mainBlock = document.querySelector('.main-block');
  const spans = document.querySelectorAll('.sub-class .text');
  const bottomElements = document.querySelectorAll('.buttom, .dropdown-list, .super, .copy');
  const socialElement = document.querySelector('.social');

  if (getComputedStyle(sidebar).width === '50px' || sidebar.style.width === '50px') {
    sidebar.style.width = '200px';
    mainBlock.style.marginLeft = '200px';
    spans.forEach(span => {
      span.style.display = 'inline';
    });
    bottomElements.forEach(element => {
      element.style.display = 'block';
    });
    socialElement.style.display = 'flex';
  } else {
    sidebar.style.width = '50px';
    mainBlock.style.marginLeft = '50px';
    spans.forEach(span => {
      span.style.display = 'none';
    });
    bottomElements.forEach(element => {
      element.style.display = 'none';
    });
    socialElement.style.display = 'none';
  }
});

const primeItem = document.querySelector(".prime-item");
const leftBtn = document.querySelector(".slider-btn-left1");
const rightBtn = document.querySelector(".slider-btn-right2");
const sliderContainer = document.querySelector(".prime-list");

const scrollAmount = 800;

function toggleSliderButtons() {
  if (!leftBtn || !rightBtn || !sliderContainer) {
    console.error("Required elements not found");
    return;
  }

  const scrollPosition = sliderContainer.scrollLeft;
  const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;

  // Hide left button if at the start, show otherwise
  if (scrollPosition <= 0) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "flex";
  }

  // Hide right button if at the end, show otherwise
  if (scrollPosition >= maxScroll - 1) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "flex";
  }
}

// Scroll left on button click
leftBtn?.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// Scroll right on button click
rightBtn?.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Update button visibility whenever scrolling occurs
sliderContainer?.addEventListener("scroll", toggleSliderButtons);

// Initial button visibility check
toggleSliderButtons();

// Load 2 Player Games in category-container2
function loadTwoPlayerGamesSection() {
  const container = document.getElementById('category-container2');
  if (!container) return;

  const sectionsHTML =player2.map(section => `
    <div class="category-section">
  <h2>
    ${section.category}
    ${section.showViewMore ? `<a href="viewmore.html?category=${encodeURIComponent(section.category)}" class="view">View more</a>` : ''}
</h2>

        <div class="sub-item-container">
            <button class="left-btn">
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <div class="sub-item">
                ${section.games.map(game => `
                    <div class="sub-item-third">
                        <a href="viewmore.html?id=${game.id}" class="game-link">
                            <img src="${game.Image}" alt="${game.id}">
                            <video class="game-preview" src="${game.video}" muted loop></video>
                        </a>
                    </div>
                `).join('')}
            </div>
            <button class="right-btn">
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    </div>
`).join('');

container.innerHTML = sectionsHTML;

  container.innerHTML = sectionsHTML;

  // Add video preview functionality
  const gameCards = container.querySelectorAll('.sub-item-third');
  gameCards.forEach(card => {
    const video = card.querySelector('video');
     const img = card.querySelector('img');
     if (video) video.play();
     card.addEventListener('mouseenter', () => {
      video.style.display = 'block';
      video.play().catch(err => console.log("video play failed:",err));
    });
    card.addEventListener('mouseleave', () => {
     
        video.pause();
        video.currentTime = 0;
        video.style.display= 'none';
      }
    );

    // Add click event to open game in iframe
    card.addEventListener('click', () => {
      const gameId = game.video; // Assuming game.video contains the URL for the game
      window.location.href = `gameView.html?gameid=${encodeURIComponent(gameId)}`;
    });
  });

  // Add slider functionality
  const subItem = container.querySelector('.sub-item');
  const leftBtn = container.querySelector('.left-btn');
  const rightBtn = container.querySelector('.right-btn');

  leftBtn.addEventListener('click', () => {
    subItem.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    subItem.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadTwoPlayerGamesSection();
});