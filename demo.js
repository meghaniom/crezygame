
    // Simulate the API data (in practice, you would fetch this data from a real API)
    const apiData = {
      "categories": [
        {
          "category": "Featured games",
          "games": [
            {
              "title": "God of War",
              "thumbnail": "image2/image-game/first.png",
              "url": "",
             
            },
            {
              "title": "Sekiro: Shadows Die Twice",
              "thumbnail": "https://example.com/images/sekiro_thumbnail.jpg",
              "url": "https://example.com/sekiro-shadows-die-twice",
              "description": "An action-adventure game set in Japan, focusing on stealth, exploration, and combat as you play a skilled samurai warrior."
            },
            
            {
              "title": "Devil May Cry 5",
              "thumbnail": "https://example.com/images/devil_may_cry_5_thumbnail.jpg",
              "url": "https://example.com/devil-may-cry-5",
              "description": "Fast-paced, stylish combat with a focus on battling demons using combos and powerful abilities."
            }
            // Add more games (total 20)
          ]
        },
        {
          "category": "Adventure Games",
          "games": [
            {
              "title": "Red Dead Redemption 2",
              "thumbnail": "https://example.com/images/red_dead_redemption_2_thumbnail.jpg",
              "url": "https://example.com/red-dead-redemption-2",
              "description": "An open-world Western action-adventure that follows Arthur Morgan, a member of the Van der Linde gang, as he navigates life in a dying world."
            },
            {
              "title": "The Witcher 3: Wild Hunt",
              "thumbnail": "https://example.com/images/witcher_3_thumbnail.jpg",
              "url": "https://example.com/the-witcher-3",
              "description": "An expansive RPG where players control Geralt of Rivia, a monster hunter, on a quest to find his adopted daughter in a war-torn world."
            },
            {
              "title": "Uncharted 4: A Thief's End",
              "thumbnail": "https://example.com/images/uncharted_4_thumbnail.jpg",
              "url": "https://example.com/uncharted-4",
              "description": "A cinematic action-adventure where treasure hunter Nathan Drake embarks on a quest for a legendary pirate utopia."
            }
            // Add more games (total 20)
          ]
        },
        // Add other categories like RPG, Simulation, Strategy, etc.
      ]

    };

    // Function to render categories and games
    function renderCategories(data) {
      const container = document.getElementById('categories-container');
      data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        const gameList = document.createElement('div');
        gameList.classList.add('game-list');

        category.games.forEach(game => {
          const gameItem = document.createElement('div');
          gameItem.classList.add('game-item');
          
          const gameThumbnail = document.createElement('img');
          gameThumbnail.src = game.thumbnail;
          gameThumbnail.alt = game.title;
          gameItem.appendChild(gameThumbnail);
          
          const gameTitle = document.createElement('div');
          gameTitle.classList.add('game-title');
          gameTitle.textContent = game.title;
          gameItem.appendChild(gameTitle);

          const gameDescription = document.createElement('div');
          gameDescription.classList.add('game-description');
          gameDescription.textContent = game.description;
          gameItem.appendChild(gameDescription);

          const gameLink = document.createElement('a');
          gameLink.href = game.url;
          gameLink.textContent = 'Play Now';
          gameItem.appendChild(gameLink);

          gameList.appendChild(gameItem);
        });

        categoryDiv.appendChild(gameList);
        container.appendChild(categoryDiv);
      });
    }

    // Call the function to render the data
    renderCategories(apiData);
