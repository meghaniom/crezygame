const categories = [
  {
    category: "",

    games: [
      
      {
        Image: "https://imgs.crazygames.com/games/bloxdhop-io/cover_16x9-1709115453824.png?metadata=none&quality=85&width=675&fit=crop",
        id: "Game 1",
        url: "https://games.crazygames.com/en_US/bloxdhop-io/index.html?v=1.318",
        video : "https://videos.crazygames.com/bloxdhop-io/6/bloxdhop-io-landscape-611x343_30fps.mp4"
      },
      
      
      {
        Image: "https://imgs.crazygames.com/ragdoll-archers_16x9/20240205020743/ragdoll-archers_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 2",
        url: "https://games.crazygames.com/en_US/ragdoll-archers/index.html?v=1.318",
        video : "https://videos.crazygames.com/ragdoll-archers/5/ragdoll-archers-landscape-494x276_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/hazmob-fps-online-shooter_16x9/20240607181337/hazmob-fps-online-shooter_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 3",
        url: "https://games.crazygames.com/en_US/hazmob-fps-online-shooter/index.html?v=1.318",
        video : "https://videos.crazygames.com/hazmob-fps-online-shooter/3/hazmob-fps-online-shooter-landscape-494x276_30fps.mp4"
      },


      {
        Image: "https://imgs.crazygames.com/smash-karts_16x9/20250304104934/smash-karts_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 4",
        url: "https://games.crazygames.com/en_US/smash-karts/index.html?v=1.318",
        video : "https://videos.crazygames.com/smash-karts/10/smash-karts-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/games/deadshot-io/cover_16x9-1694770506842.png?metadata=none&quality=85&width=675&fit=crop",
        id: "Game 5",
        url: "https://games.crazygames.com/en_US/deadshot-io/index.html?v=1.318",
        video: "https://videos.crazygames.com/deadshot-io/12/deadshot-io-landscape-494x276_30fps.mp4"

      },

      {
        Image: "https://imgs.crazygames.com/racing-limits_16x9/20231106035424/racing-limits_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 6",
        url: "https://games.crazygames.com/en_US/racing-limits/index.html?v=1.318",
        video : "https://videos.crazygames.com/racing-limits/1/racing-limits-landscape-611x343_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/miniblox_16x9/20240617083401/miniblox_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 7",
        url: "https://games.crazygames.com/en_US/miniblox/index.html?v=1.318",
        video : "https://videos.crazygames.com/miniblox/3/miniblox-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/words-of-wonders_16x9/20231019163757/words-of-wonders_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 8",
        url: "https://games.crazygames.com/en_US/words-of-wonders/index.html?v=1.318",
        video : "https://videos.crazygames.com/words-of-wonders/1/words-of-wonders-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/night-city-racing/20230127195620/night-city-racing-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 9",
        url: "https://games.crazygames.com/en_US/night-city-racing/index.html?v=1.318",
        video : "https://videos.crazygames.com/night-city-racing/1/night-city-racing-landscape-494x276_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/supermarket-simulator-cashier-game_16x9/20241223040731/supermarket-simulator-cashier-game_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 10",
        url: "https://games.crazygames.com/en_US/supermarket-simulator-cashier-game/index.html?v=1.318",
        video : "https://videos.crazygames.com/supermarket-simulator-cashier-game/1/supermarket-simulator-cashier-game-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/rally-racer-dirt_16x9/20250227034748/rally-racer-dirt_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 11",
        url: "https://games.crazygames.com/en_US/rally-racer-dirt/index.html?v=1.318",
        video : "https://videos.crazygames.com/rally-racer-dirt/2/rally-racer-dirt-landscape-611x343_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/guess-their-answer_16x9/20241122084004/guess-their-answer_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 12",
        url: "https://games.crazygames.com/en_US/guess-their-answer/index.html?v=1.318",
        video : "https://videos.crazygames.com/guess-their-answer/1/guess-their-answer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/mr-racer---car-racing_16x9/20241204101648/mr-racer---car-racing_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 13",
        url: "https://games.crazygames.com/en_US/mr-racer---car-racing/index.html?v=1.318",
        video : "https://videos.crazygames.com/mr-racer---car-racing/1/mr-racer---car-racing-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/ludo-king_16x9/20240229043328/ludo-king_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 14",
        url: "https://games.crazygames.com/en_US/ludo-king/index.html?v=1.318x`",
        video : "https://videos.crazygames.com/ludo-king/5/ludo-king-landscape-494x276_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/skillwarz_16x9/20250225074000/skillwarz_16x9-cover?metadata=none&quality=85&width=675&fit=crop",
        id: "Game 15",
        url: "https://games.crazygames.com/en_US/skillwarz/index.html?v=1.318",
        video : "https://videos.crazygames.com/skillwarz/5/skillwarz-landscape-494x276_30fps.mp4"
      },

      {
        Image: "https://imgs.crazygames.com/games/mahjongg-solitaire/cover_16x9-1707829450935.png?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 16",
        url: "https://games.crazygames.com/en_US/mahjongg-solitaire/index.html?v=1.318",
        video : "https://videos.crazygames.com/mahjongg-solitaire/1/mahjongg-solitaire-landscape-494x276_30fps.mp4"
      },
      {
        Image: "https://imgs.crazygames.com/mx-offroad-master/20230206090722/mx-offroad-master-cover?metadata=none&quality=85&width=273&fit=crop",
        id: "Game 17",
        url: "https://games.crazygames.com/en_US/mx-offroad-master/index.html?v=1.318",
        video : "https://videos.crazygames.com/mx-offroad-master/1/mx-offroad-master-landscape-611x343_30fps.mp4"
       
      },
      {
        Image: "image2/image-game/game18.png",
        id: "Game 16",
        url: "https://games.crazygames.com/en_US/bullet-force-multiplayer/index.html?v=1.318",
        video : "https://videos.crazygames.com/bullet-force-multiplayer/8/bullet-force-multiplayer-landscape-494x276_30fps.mp4"
      },

      {
        Image: "image2/image-game/game19.png",
        id: "Game 17",
        url: "https://games.crazygames.com/en_US/8-ball-billiards-classic/index.html?v=1.318",
        video : "https://videos.crazygames.com/8-ball-billiards-classic/2/8-ball-billiards-classic-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image2/image-game/game20.png",
        id: "Game 18",
        url: "https://games.crazygames.com/en_US/bridge-race/index.html?v=1.318",
        video : "https://videos.crazygames.com/bridge-race/2/bridge-race-landscape-494x276_30fps.mp4"
      },

      {

        Image: "image2/image-game/game21.png",
        id: "Game 19",
        url: "https://games.crazygames.com/en_US/super-bike-the-champion/index.html?v=1.318",
        video : "https://videos.crazygames.com/super-bike-the-champion/1/super-bike-the-champion-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image2/image-game/game22.png",
        id: "Game 20",
        url: "https://games.crazygames.com/en_US/demolition-derby-3/index.html?v=1.318",
        video : "https://videos.crazygames.com/demolition-derby-3/1/demolition-derby-3-landscape-611x343_30fps.mp4"
      },

      {
        Image: "image2/image-game/game23.png",
        id: "Game 21",
        url: "https://games.crazygames.com/en_US/shellshockersio/index.html?v=1.318",
        video : "https://videos.crazygames.com/shellshockersio/3/shellshockersio-landscape-494x276_30fps.mp4"
      },

      {
        Image: "image2/image-game/game24.png",
        id: "Game 22",
        url: "https://games.crazygames.com/en_US/forward-assault/index.html?v=1.318",
        video : "https://videos.crazygames.com/forward-assault/3/forward-assault-landscape-494x276_30fps.mp4"
      },

      {
        Image: "image2/image-game/game25.png",
        id: "Game 23",
        url: "https://games.crazygames.com/en_US/stickman-clash/index.html?v=1.318",
        video : "https://videos.crazygames.com/stickman-clash/1/stickman-clash-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image2/image-game/game26.png",
        id: "Game 24",
        url: "https://games.crazygames.com/en_US/kour-io/index.html?v=1.318",
        video : "https://videos.crazygames.com/kour-io/1/kour-io-landscape-611x343_30fps.mp4"
      },
      {
        Image: "image2/image-game/game27.png",
        id: "Game 25",
        url: "https://games.crazygames.com/en_US/autogun-heroes-izk/index.html?v=1.318",
        video : "https://videos.crazygames.com/autogun-heroes-izk/4/autogun-heroes-izk-landscape-494x276_30fps.mp4"
      },

      {
        Image: "image2/image-game/game28.png",
        id: "Game 26",
        url: "https://games.crazygames.com/en_US/thief-puzzle/index.html?v=1.318",
        video : "https://videos.crazygames.com/thief-puzzle/1/thief-puzzle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image2/image-game/game29.png",
        id: "Game 27",
        url: "https://games.crazygames.com/en_US/worldguessr/index.html?v=1.318",
        video : "https://videos.crazygames.com/worldguessr/2/worldguessr-landscape-494x276_30fps.mp4"
      },

      {
        Image: "image2/image-game/game30.png",
        id: "Game 28",
        url: "https://games.crazygames.com/en_US/polytrack/index.html?v=1.318",
        video : "https://videos.crazygames.com/polytrack/1/polytrack-landscape-494x276_30fps.mp4"
      },

    ]
  },

  {
    category: "Featured games",
    showViewMore: true,
    games: [
      {
        Image: " image3/firstgame.png",
        id: "fristgame",
        url: " https://games.crazygames.com/en_US/firestone-idle-rpg/index.html?v=1.318",
        video : " https://videos.crazygames.com/firestone-idle-rpg/2/firestone-idle-rpg-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/secondgame.png",
        id: "secondgame",
        url :"https://games.crazygames.com/en_US/my-dinoland/index.html?v=1.318",
        video : " https://videos.crazygames.com/my-dinoland/1/my-dinoland-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/thirdgame.png",
        id: "tthirdgame",
        url: "https://games.crazygames.com/en_US/blade-merge/index.html?v=1.318",
        video : "https://videos.crazygames.com/blade-merge/1/blade-merge-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/fourgame.png",
        id: "fourgame",
      url : "https://games.crazygames.com/en_US/damn-it-ttl/index.html?v=1.318",
        video : " https://videos.crazygames.com/damn-it-ttl/2/damn-it-ttl-landscape-494x276_30fps.mp4"
      },
      {
        Image: " image3/fivegame.png",
        id: "fivegame",
       url : "https://games.crazygames.com/en_US/castle-craft/index.html?v=1.318",
       video : "https://videos.crazygames.com/castle-craft/2/castle-craft-landscape-494x276_30fps.mp4"
      },
      {
        Image: " image3/sixgame.png",
        id: "sixgame",
       url : "https://games.crazygames.com/en_US/soccer-legends-2021/index.html?v=1.318",
         video:  " https://videos.crazygames.com/soccer-legends-2021/1/soccer-legends-2021-landscape-494x276_30fps.mp4"
      },
      {
        Image: " image3/sevengame.png",
        id: "sevengame",
      url : "https://games.crazygames.com/en_US/ball-blast/index.html?v=1.318",
      video : "https://videos.crazygames.com/ball-blast/3/ball-blast-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/eightgame.png",
        id: "eightgame",
        url: "https://games.crazygames.com/en_US/nuts-puzzle-sort-by-color/index.html?v=1.318",
        video : " https://videos.crazygames.com/nuts-puzzle-sort-by-color/1/nuts-puzzle-sort-by-color-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/ninegame.png",
        id: "ninegame",
        url: "https://videos.crazygames.com/gearshift-one/3/gearshift-one-landscape-494x276_30fps.mp4",
        video : " https://videos.crazygames.com/gearshift-one/3/gearshift-one-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/tengame.png",
        id: "tengame",
        url: "https://games.crazygames.com/en_US/what-s-the-difference-online/index.html?v=1.318",
        video : "https://videos.crazygames.com/what-s-the-difference-online/1/what-s-the-difference-online-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/elevengame.png",
        id: "elevengame",
        url: "https://games.crazygames.com/en_US/ships-3d/index.html?v=1.318",
        video : " https://videos.crazygames.com/ships-3d/2/ships-3d-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twelvegame.png",
        id: "twelvegame",
        url: "https://games.crazygames.com/en_US/blockbuster-puzzle/index.html?v=1.318",
        video : "https://videos.crazygames.com/blockbuster-puzzle/2/blockbuster-puzzle-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/thirtengame.png",
        id: "thirtengame",
        url: "https://games.crazygames.com/en_US/worms-zone/index.html?v=1.318",
        video : "  https://videos.crazygames.com/original-resolution/worms-zone-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/fourtyengame.png",
        id: "fourtyengame",
        url: "https://games.crazygames.com/en_US/stickman-destruction-3-heroes/index.html?v=1.318",
        video : "https://videos.crazygames.com/stickman-destruction-3-heroes/1/stickman-destruction-3-heroes-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/fiftyengame.png",
        id: "fiftyengame",
        url: "https://games.crazygames.com/en_US/cuberealm-io/index.html?v=1.318",
        video : " https://videos.crazygames.com/cuberealm-io/3/cuberealm-io-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/sixtengame.png",
        id: "sixtengame",
        url: "https://games.crazygames.com/en_US/8-ball-pool-billiards-multiplayer/index.html?v=1.318",
        video : " https://videos.crazygames.com/8-ball-pool-billiards-multiplayer/1/8-ball-pool-billiards-multiplayer-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/seventengame.png",
        id: "seventengame",
        url: "https://games.crazygames.com/en_US/cricket-world-cup/index.html?v=1.318",
        video : " https://videos.crazygames.com/cricket-world-cup/1/cricket-world-cup-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/eightengame.png",
        id: "eightengame",
        url: "https://games.crazygames.com/en_US/pixel-warfare/index.html?v=1.318",
        video : " https://videos.crazygames.com/pixel-warfare/4/pixel-warfare-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/ninetengame.png",
        id: "ninetengame",
        url: "https://games.crazygames.com/en_US/battle-arena/index.html?v=1.318",
        video : " https://videos.crazygames.com/battle-arena/1/battle-arena-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentygame.png",
        id: "twentygame",
        url: "https://games.crazygames.com/en_US/parking-jam-dqq/index.html?v=1.318",
        video : " https://videos.crazygames.com/parking-jam-dqq/1/parking-jam-dqq-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentyonegame.png",
        id: "twentyonegame",
        url: "https://games.crazygames.com/en_US/buildnow-gg/index.html?v=1.318",
        video : " https://videos.crazygames.com/buildnow-gg/2/buildnow-gg-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentytwogame.png",
        id: "twentytwogame",
        url: "https://games.crazygames.com/en_US/gt-cars-mega-ramps/index.html?v=1.318",
        video : " https://videos.crazygames.com/gt-cars-mega-ramps/1/gt-cars-mega-ramps-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentythreegame.png",
        id: "twentythreegame",
        url: "https://games.crazygames.com/en_US/skydom/index.html?v=1.318",
        video : " https://videos.crazygames.com/skydom/2/skydom-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentyfourgame.png",
        id: "twentyfourgame",
        url: "https://games.crazygames.com/en_US/golf-orbit/index.html?v=1.318",
        video : " https://videos.crazygames.com/golf-orbit/1/golf-orbit-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentyfivegame.png",
        id: "twentyfivegame",
        url: "https://games.crazygames.com/en_US/designville-merge-design/index.html?v=1.318",
        video : " https://videos.crazygames.com/designville-merge-design/1/designville-merge-design-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentysixgame.png",
        id: "twentysixgame",
        url: "https://games.crazygames.com/en_US/farm-merge-valley/index.html?v=1.318",
        video : " https://videos.crazygames.com/farm-merge-valley/1/farm-merge-valley-landscape-494x276_30fps.mp4"

      },

      {
        Image: " image3/twentysevengame.png",
        id: "twentysevengame11",
        url: "https://games.crazygames.com/en_US/starblastio/index.html?v=1.318",
        video : " https://videos.crazygames.com/starblastio/3/starblastio-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentyeightgame.png",
        id: "twentyeightgamest",
        url: "https://games.crazygames.com/en_US/internet-gaming-cafe-simulator/index.html?v=1.318",
        video : "https://videos.crazygames.com/internet-gaming-cafe-simulator/1/internet-gaming-cafe-simulator-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/twentyninegame.png",
        id: "twentyninegame",
        url: "https://games.crazygames.com/en_US/fairyland-merge-and-magic/index.html?v=1.318",
        video : "https://videos.crazygames.com/fairyland-merge-and-magic/3/fairyland-merge-and-magic-landscape-494x276_30fps.mp4"

      },
      {
        Image: " image3/thietygame.png",
        id: "thietygame",
        url: "https://games.crazygames.com/en_US/bodycamera-shooter/index.html?v=1.318",
        video : " https://videos.crazygames.com/bodycamera-shooter/2/bodycamera-shooter-landscape-494x276_30fps.mp4"

      },
      
    ],
  },

  {
    category: "New games",
    showViewMore: true,
    games: [
      {
        Image: "image4/onegame.png",
        id: "onegame1",
        url: "https://games.crazygames.com/en_US/war-of-mine/index.html?v=1.318",
        video : "https://videos.crazygames.com/war-of-mine/2/war-of-mine-landscape-494x276_30fps.mp4"

      },
      {
        Image: "image4/twogame.png",
        id: "twogame1",
        url: "https://games.crazygames.com/en_US/jetpack-joyride-pcp/index.html?v=1.318",
        video : "https://videos.crazygames.com/jetpack-joyride-pcp/2/jetpack-joyride-pcp-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/threegame.png",
        id: "threegame1",
        url: "https://games.crazygames.com/en_US/atomic-champions/index.html?v=1.318",
        video : "https://videos.crazygames.com/atomic-champions/1/atomic-champions-landscape-494x276_30fps.mp4"

      },
      {
        Image: "image4/fourgame.png",
        id: "fourgame1",
        url: "https://games.crazygames.com/en_US/zom-strike-vvq/index.html?v=1.318",
        video : "https://videos.crazygames.com/zom-strike-vvq/1/zom-strike-vvq-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/fivegame.png",
        id: "fivegame1",
        url: "https://games.crazygames.com/en_US/clash-of-ages-dzl/index.html?v=1.318",
        video : "https://videos.crazygames.com/clash-of-ages-dzl/2/clash-of-ages-dzl-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/sixgame.png",
        id: "sixgame1",
        url: "https://games.crazygames.com/en_US/damn-it-ttl/index.html?v=1.318",
        video : "https://videos.crazygames.com/damn-it-ttl/2/damn-it-ttl-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/sevengame.png",
        id: "sevengame1",
        url: "https://games.crazygames.com/en_US/demolition-derby-3/index.html?v=1.318",
        video : "https://videos.crazygames.com/demolition-derby-3/1/demolition-derby-3-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/eightgame.png",
        id: "eightgame1",
        url: "https://games.crazygames.com/en_US/coin-picker-yqi/index.html?v=1.318",
        video : "https://videos.crazygames.com/coin-picker-yqi/1/coin-picker-yqi-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/ninegame.png",
        id: "ninegame1",
        url: "https://games.crazygames.com/en_US/planet-life-idle/index.html?v=1.318",
        video : "https://videos.crazygames.com/planet-life-idle/1/planet-life-idle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/tengame.png",
        id: "tengame1",
        url: "https://games.crazygames.com/en_US/underwater-adventures-match-3-utk/index.html?v=1.318",
        video : "https://videos.crazygames.com/underwater-adventures-match-3-utk/1/underwater-adventures-match-3-utk-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/elevengame.png",
        id: "elevengame1",
        url: "https://games.crazygames.com/en_US/drag-master/index.html?v=1.318",
        video : "https://videos.crazygames.com/drag-master/1/drag-master-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twelvegame.png",
        id: "twelvegame1",
        url: "https://games.crazygames.com/en_US/basketball-superstars/index.html?v=1.318",
        video : "https://videos.crazygames.com/basketball-superstars/1/basketball-superstars-landscape-494x276_30fps.mp4"


      },
      {
        Image: "image4/thirteengame.png",
        id: "thirteengame1",
        url: "https://games.crazygames.com/en_US/parking-jam-dqq/index.html?v=1.318",
        video: "https://videos.crazygames.com/parking-jam-dqq/1/parking-jam-dqq-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/fourtyengame.png",
        id: "fourtyengame1",
        url: "https://games.crazygames.com/en_US/wizard-masters/index.html?v=1.318",
        video : "https://videos.crazygames.com/wizard-masters/1/wizard-masters-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/fifttengame.png",
        id: "fifttengame1",
        url: "https://games.crazygames.com/en_US/chips-sort-puzzle/index.html?v=1.318",
        video : " https://videos.crazygames.com/chips-sort-puzzle/1/chips-sort-puzzle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/sixttengame.png",
        id: "sixttengame1",
        url: "https://games.crazygames.com/en_US/neko-sliding-cat-puzzle/index.html?v=1.318",
        video : " https://videos.crazygames.com/neko-sliding-cat-puzzle/1/neko-sliding-cat-puzzle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/sevttengame.png",
        id: "sevttengame1", 
        url: "https://games.crazygames.com/en_US/build-survive/index.html?v=1.318",
        video : " https://videos.crazygames.com/build-survive/1/build-survive-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/eighttengame.png",
        id: "eighttengame1",
        url: "https://games.crazygames.com/en_US/fruit-tower-defense/index.html?v=1.318",
        video : "https://videos.crazygames.com/fruit-tower-defense/1/fruit-tower-defense-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/ninttengame.png",
        id: "ninttengame1",
        url: "https://games.crazygames.com/en_US/stickman-bow/index.html?v=1.318",
        video : " https://videos.crazygames.com/stickman-bow/1/stickman-bow-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentygame.png",
        id: "twentygame1",
        url: "https://games.crazygames.com/en_US/paper-princess---doll-dress-up/index.html?v=1.318",
        video : " https://videos.crazygames.com/paper-princess---doll-dress-up/1/paper-princess---doll-dress-up-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentyonegame.png",
        id: "twentyonegame1",
        url: "https://games.crazygames.com/en_US/merge-galaxy/index.html?v=1.318",
        video : " https://videos.crazygames.com/merge-galaxy/1/merge-galaxy-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentytwogame.png",
        id: "twentytwogame1",
        url: "https://games.crazygames.com/en_US/zombie-world-escape-fqd/index.html?v=1.318",
        video : " https://videos.crazygames.com/zombie-world-escape-fqd/3/zombie-world-escape-fqd-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentythreegame.png",
        id: "twentythreegame1",
        url: "https://games.crazygames.com/en_US/sail-adventure/index.html?v=1.318",
        video : " https://videos.crazygames.com/sail-adventure/1/sail-adventure-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentyfourgame.png",
        id: "twentyfourgame1",
        url: "https://games.crazygames.com/en_US/office-brawl---room-smash/index.html?v=1.318",
        video : "https://videos.crazygames.com/office-brawl---room-smash/2/office-brawl---room-smash-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentyfivegame.png",
        id: "twentyfivegame1",
        url: "https://games.crazygames.com/en_US/cyberdino-3d-nez/index.html?v=1.318",
        video : "https://videos.crazygames.com/cyberdino-3d-nez/1/cyberdino-3d-nez-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentysixgame.png",
        id: "twentysixgame1",
        url: ":https://games.crazygames.com/en_US/fruit-merge-juicy-drop-game-nyf/index.html?v=1.318",
        video : "https://videos.crazygames.com/fruit-merge-juicy-drop-game-nyf/1/fruit-merge-juicy-drop-game-nyf-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentysevengame.png",
        id: "twentysevengame1",
        url: "https://games.crazygames.com/en_US/archers-arena/index.html?v=1.318",
        video : "https://videos.crazygames.com/archers-arena/1/archers-arena-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twerntyeightgame.png",
        id: "twerntyeightgame1",
        url: "https://games.crazygames.com/en_US/knee-case-simulator/index.html?v=1.318",
        video : "https://videos.crazygames.com/knee-case-simulator/1/knee-case-simulator-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/twentyninegame.png",
        id: "twentyninegame1",
        url: " https://games.crazygames.com/en_US/bag-defense/index.html?v=1.318",
        video : "https://videos.crazygames.com/bag-defense/1/bag-defense-landscape-494x276_30fps.mp4"
      },
      {

        Image: "image4/thirtygame.png",
        id: "thirtygame1",
        url: " https://games.crazygames.com/en_US/egg-folks-multiplayer/index.html?v=1.318",
        video : " https://videos.crazygames.com/egg-folks-multiplayer/1/egg-folks-multiplayer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/thirtyonegame.png",
        id: "thirtyonegame1",
        url: "https://games.crazygames.com/en_US/mystery-digger/index.html?v=1.318",
        video : "https://videos.crazygames.com/mystery-digger/1/mystery-digger-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/thirtytwogame.png",
        id: "thirtytwogame1",
        url: "https://games.crazygames.com/en_US/bit-gun-io/index.html?v=1.318",
        video : " https://videos.crazygames.com/bit-gun-io/2/bit-gun-io-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/thirtythreegame.png",
        id: "thirtythreegame1",
        url: "https://games.crazygames.com/en_US/mega-makeup-seasons-best/index.html?v=1.318",
        video : " https://videos.crazygames.com/mega-makeup-seasons-best/1/mega-makeup-seasons-best-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/thirtyfourgame.png",
        id: "thirtyfourgame1",
        url: "https://games.crazygames.com/en_US/idle-world/index.html?v=1.318",
        video : "https://videos.crazygames.com/idle-world/1/idle-world-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image4/thirtyfivegame.png",
        id: "thirtyfivegame1",
        url: "https://games.crazygames.com/en_US/wild-hunter-3d/index.html?v=1.318",
        video : " https://videos.crazygames.com/wild-hunter-3d/1/wild-hunter-3d-landscape-494x276_30fps.mp4"
      }
    ],
  },

  {
    category: "Driving Games",
    showViewMore: true,
    games: [
      {
        Image: "image5/onegame.png",
        id: " one0",
        url: "https://games.crazygames.com/en_US/racing-limits/index.html?v=1.318",
        video : " https://videos.crazygames.com/racing-limits/1/racing-limits-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twogame.png",
        id: " twogame0",
        url: "https://games.crazygames.com/en_US/night-city-racing/index.html?v=1.318",
        video : " https://videos.crazygames.com/night-city-racing/1/night-city-racing-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/threegame.png",
        id: " twogame01",
        url: "https://games.crazygames.com/en_US/rally-racer-dirt/index.html?v=1.318",
        video : " https://videos.crazygames.com/rally-racer-dirt/2/rally-racer-dirt-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/fourgame.png",
        id: " threegame0",
        url: "https://games.crazygames.com/en_US/mr-racer---car-racing/index.html?v=1.318",
        video : "https://videos.crazygames.com/mr-racer---car-racing/1/mr-racer---car-racing-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/fivegame.png",
        id: " fourtyengame0",
        url: " https://games.crazygames.com/en_US/mx-offroad-master/index.html?v=1.318",
        video : " https://videos.crazygames.com/mx-offroad-master/1/mx-offroad-master-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/sixgame.png",
        id: " sixgame0",
        url: "https://games.crazygames.com/en_US/super-bike-the-champion/index.html?v=1.318",
        video : " https://videos.crazygames.com/super-bike-the-champion/1/super-bike-the-champion-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/sevengame.png",
        id: " sevengamee0",
        url: "https://games.crazygames.com/en_US/demolition-derby-3/index.html?v=1.318",
        video : " https://videos.crazygames.com/demolition-derby-3/1/demolition-derby-3-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/eightgame.png",
        id: " eightgame0",
        url: "https://games.crazygames.com/en_US/polytrack/index.html?v=1.318",
        video : "https://videos.crazygames.com/polytrack/1/polytrack-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/ninegame.png",
        id: " ninegame0",
        url: "https://games.crazygames.com/en_US/super-star-car/index.html?v=1.318",
        video : " https://videos.crazygames.com/super-star-car/1/super-star-car-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/tengame.png",
        id: " tengame0",
        url: " https://games.crazygames.com/en_US/city-bus-driver/index.html?v=1.318",
        video : " https://videos.crazygames.com/city-bus-driver/1/city-bus-driver-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/elevengame.png",
        id: " elevengame0",
        url: "https://games.crazygames.com/en_US/stunt-paradise/index.html?v=1.318",
        video : " https://videos.crazygames.com/stunt-paradise/2/stunt-paradise-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twelvegame.png",
        id: " twelvegame0",
        url: "https://games.crazygames.com/en_US/crazy-grand-prix/index.html?v=1.318",
        video : " https://videos.crazygames.com/crazy-grand-prix/1/crazy-grand-prix-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/thirttengame.png",
        id: " thirttengame0",
        url: "https://games.crazygames.com/en_US/gt-cars-mega-ramps/index.html?v=1.318",
        video : " https://videos.crazygames.com/gt-cars-mega-ramps/1/gt-cars-mega-ramps-landscape-494x276_30fps.mp4"

      },
      {
        Image: "image5/fourtyengame.png",
        id: " fivegame0",
        url: "https://games.crazygames.com/en_US/gearshift-one/index.html?v=1.318",
        video : " https://videos.crazygames.com/gearshift-one/3/gearshift-one-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/fiftyengame.png",
        id: " fiftyengame0",
        url: "https://games.crazygames.com/en_US/monster-cars-ultimate-simulator/index.html?v=1.318",
        video : " https://videos.crazygames.com/monster-cars-ultimate-simulator/1/monster-cars-ultimate-simulator-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/sixtengame.png",
        id: " sixtengame0",
        url: "https://games.crazygames.com/en_US/crazy-stunt-cars-multiplayer/index.html?v=1.318",
        video : "https://videos.crazygames.com/original-resolution/crazy-stunt-cars-multiplayer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/seventengame.png",
        id: " seventengame0",
        url: "https://games.crazygames.com/en_US/moto-x3m/index.html?v=1.318",
        video : " https://videos.crazygames.com/moto-x3m/1/moto-x3m-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/eighttengame.png",
        id: " eighttengame0",
        url: "https://games.crazygames.com/en_US/truck-simulator-russia/index.html?v=1.318",
        video : " https://videos.crazygames.com/truck-simulator-russia/1/truck-simulator-russia-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/ninettengame.png",
        id: " ninettengame0",
        url: "https://games.crazygames.com/en_US/ultimate-flying-car/index.html?v=1.318",
        video : " https://videos.crazygames.com/ultimate-flying-car/1/ultimate-flying-car-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentygame.png",
        id: " twentygame0",
        url: "https://games.crazygames.com/en_US/demolition-derby-2/index.html?v=1.318",
        video : " https://videos.crazygames.com/demolition-derby-2/2/demolition-derby-2-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentyone.png",
        id: " twentyone0",
        url: "https://games.crazygames.com/en_US/realderby---crash-day/index.html?v=1.318",
        video : "https://videos.crazygames.com/realderby---crash-day/1/realderby---crash-day-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentytwogame.png",
        id: " twentytwogame0",
        url: "https://games.crazygames.com/en_US/crazy-motorcycle/index.html?v=1.318",
        video : " https://videos.crazygames.com/crazy-motorcycle/1/crazy-motorcycle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentythreegame.png",
        id: " twentythreegame0",
        url: "https://games.crazygames.com/en_US/offroad-masters-challenge/index.html?v=1.318",
        video : " https://videos.crazygames.com/offroad-island/2/offroad-island-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentyfourgame.png",
        id: "fifftengame0",
        url: "https://games.crazygames.com/en_US/parking-fury-3d-side-hustle/index.html?v=1.318",
        video : "https://videos.crazygames.com/parking-fury-3d-side-hustle/1/parking-fury-3d-side-hustle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentyfivegame.png",
        id: "fourtytwogame10",
        url: "https://games.crazygames.com/en_US/offroad-island/index.html?v=1.318",
        video : " https://videos.crazygames.com/offroad-island/2/offroad-island-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentysixgame.png",
        id: "fourtytwogame110",
        url: "https://games.crazygames.com/en_US/trial-mania/index.html?v=1.318",
        video : " https://videos.crazygames.com/trial-mania/1/trial-mania-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentysevengame.png",
        id: "fourtytwogame20",
        url: "https://games.crazygames.com/en_US/sunset-bike-racing/index.html?v=1.318",
        video : " https://videos.crazygames.com/sunset-bike-racing/1/sunset-bike-racing-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image5/twentyeightgame.png",
        id: "fourtytwogame0",
        url: "https://games.crazygames.com/en_US/xtreme-city-drifting/index.html?v=1.318",
        video : "https://videos.crazygames.com/xtreme-city-drifting/2/xtreme-city-drifting-landscape-494x276_30fps.mp4"
        
      },
      {
        Image: "image5/twentyninegame.png",
        id: "fourtytwogame0",
        url: "https://games.crazygames.com/en_US/fighter-aircraft-pilot/index.html?v=1.318",
        video : "https://videos.crazygames.com/original-resolution/fighter-aircraft-pilot-landscape-494x276_30fps.mp4"
      },
    ],
  },
  {
    category: " Soccer Game",
    showViewMore: true,
    games: [
      {
        Image: "image6/onegame.png",
        id: "two1",
        url: " https://games.crazygames.com/en_US/soccer-legends-2021/index.html?v=1.318",
        video : " https://videos.crazygames.com/soccer-legends-2021/1/soccer-legends-2021-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twogame.png",
        id: "two2",
        url: " https://games.crazygames.com/en_US/carball-io/index.html?v=1.318",
        video : " https://videos.crazygames.com/carball-io/1/carball-io-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/threegame.png",
        id: "two3",
        url: "https://games.crazygames.com/en_US/free-kick-classic/index.html?v=1.318",
        video : " https://videos.crazygames.com/free-kick-classic/1/free-kick-classic-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/fourgame.png",
        id: "two4",
        url: "https://games.crazygames.com/en_US/ragdoll-soccer-2-players/index.html?v=1.318",
        video : " https://videos.crazygames.com/ragdoll-soccer-2-players/1/ragdoll-soccer-2-players-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/fivegame.png",
        id: "two5",
        url: "https://games.crazygames.com/en_US/soccer-random/index.html?v=1.318",
        video : " https://videos.crazygames.com/soccer-random/2/soccer-random-landscape-494x276_30fps.mp4"
      },
      {

        Image: "image6/sixgame.png",
        id: "two6",
        url: "https://games.crazygames.com/en_US/pill-soccer/index.html?v=1.318",
        video : "https://videos.crazygames.com/pill-soccer/1/pill-soccer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/eightgame.png",
        id: "two7",
        url: " https://games.crazygames.com/en_US/soccer-bros/index.html?v=1.318",
        video : " https://videos.crazygames.com/soccer-bros/1/soccer-bros-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/sevengame.png",
        id: "two8",
        url: "https://games.crazygames.com/en_US/soccer-dash/index.html?v=1.318",
        video : " https://videos.crazygames.com/soccer-dash/1/soccer-dash-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/ninegame.png",
        id: "two9",
        url: "https://games.crazygames.com/en_US/mini-car-ball/index.html?v=1.318",
        video : " https://videos.crazygames.com/mini-car-ball/1/mini-car-ball-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/tengame.png",
        id: "two10",
        url: "https://games.crazygames.com/en_US/penalty-shooters-2/index.html?v=1.318",
        video : " https://videos.crazygames.com/penalty-shooters-2/3/penalty-shooters-2-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/eleventgame.png",
        id: "two11",
        url: "https://games.crazygames.com/en_US/idle-football-manager/index.html?v=1.318",
        video : " https://videos.crazygames.com/idle-football-manager/2/idle-football-manager-landscape-494x276_30fps.mp4"

      },
      {
        Image: "image6/twelvegame.png",
        id: "two12",
        url: "https://games.crazygames.com/en_US/penalty-shooters-3/index.html?v=1.318",
        video : "https://videos.crazygames.com/penalty-shooters-3/2/penalty-shooters-3-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/thirtyengame.png",
        id: "two13",
        url: "https://games.crazygames.com/en_US/goalkeeper-wiz/index.html?v=1.318",
        video : " https://videos.crazygames.com/goalkeeper-wiz/1/goalkeeper-wiz-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/fourtyngame.png",
        id: "two14",
        url: "https://games.crazygames.com/en_US/sports-heads-soccer/index.html?v=1.318",
        video : " https://videos.crazygames.com/sports-heads-soccer/1/sports-heads-soccer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/fiftyengame.png",
        id: "two15",
        url: "https://games.crazygames.com/en_US/soccar/index.html?v=1.318",
        video : " https://videos.crazygames.com/original-resolution/soccar-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/sixtengame.png",
        id: "two16",
        url: "https://games.crazygames.com/en_US/soccer-masters-euro-2020/index.html?v=1.318",
        video : "https://videos.crazygames.com/soccer-masters-euro-2020/1/soccer-masters-euro-2020-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/seventtengame.png",
        id: "two17",
        url: "https://games.crazygames.com/en_US/soccer-europe-quiz/index.html?v=1.318",
        video : "https://videos.crazygames.com/soccer-europe-quiz/1/soccer-europe-quiz-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/eighttengame.png",
        id: "two18",
        url: " https://games.crazygames.com/en_US/penalty-shooters/index.html?v=1.318",
        video : " https://videos.crazygames.com/penalty-shooters/1/penalty-shooters-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/ninettengame.png",
        id: "two19",
        url: "https://games.crazygames.com/en_US/tracesoccer-ubc/index.html?v=1.318",
        video : " https://videos.crazygames.com/tracesoccer-ubc/1/tracesoccer-ubc-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentygame.png",
        id: "two20",
        url: "https://games.crazygames.com/en_US/soccer-clicker/index.html?v=1.318",
        video : " https://videos.crazygames.com/soccer-clicker/1/soccer-clicker-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentyonegame.png",
        id: "two21",
        url: "https://games.crazygames.com/en_US/finger-soccer-world-cup-multiplayer/index.html?v=1.318",
        video : " https://videos.crazygames.com/finger-soccer-world-cup-multiplayer.mp4"
      },
      {
        Image: "image6/twentytwogame.png",
        id: "two22",
        url: "https://games.crazygames.com/en_US/penalty-kick-wiz/index.html?v=1.318",
        video : " https://videos.crazygames.com/penalty-kick-wiz/1/penalty-kick-wiz-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentythreegame.png",
        id: "two23",
        url: "https://games.crazygames.com/en_US/penalty-shootout-multi-league/index.html?v=1.318",
        video : " https://videos.crazygames.com/archive/penalty-shootout-multi-league-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentyfourgame.png",
        id: "two24",
        url: "https://games.crazygames.com/en_US/stormy-kicker/index.html?v=1.318",
        video : " https://videos.crazygames.com/stormy-kicker/1/stormy-kicker-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentyfivegame.png",
        id: "two25",
        url: "https://games.crazygames.com/en_US/penalty-rivals/index.html?v=1.318",
        video : "https://videos.crazygames.com/penalty-rivals/2/penalty-rivals-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentysixgame.png",
        id: "two26",
        url: "https://games.crazygames.com/en_US/a-small-world-cup-snk/index.html?v=1.318",
        video : "https://videos.crazygames.com/a-small-world-cup-snk/1/a-small-world-cup-snk-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image6/twentysevengame.png",
        id: "two27",
        url: "https://games.crazygames.com/en_US/world-cup-penalty/index.html?v=1.318",
        video : " https://videos.crazygames.com/world-cup-penalty-trimmed.mp4"
      },
      {
        Image: "image6/twentyeightgame.png",
        id: "two28",
        url: "https://games.crazygames.com/en_US/foosball-3d/index.html?v=1.318",
        video : "https://videos.crazygames.com/foosball-3d/3/foosball-3d-landscape-494x276_30fps.mp4"
      },
        {
          Image: "image6/twentyninegame.png",
          id: "two29",
          url: "https://games.crazygames.com/en_US/bad-soccer-manager/index.html?v=1.318",
          video : " https://videos.crazygames.com/bad-soccer-manager/1/bad-soccer-manager-landscape-494x276_30fps.mp4"
        },
        {
          Image: "image6/thirtygame.png",
          id: "two30",
          url: "https://games.crazygames.com/en_US/drop-kick-world-cup-2018/index.html?v=1.318",
          video : "https://videos.crazygames.com/drop-kick-world-cup-2018.mp4"
        },
    ],
  },
  {
    category: "Platform Games",
    showViewMore: true,
    games: [

      {
        Image: "New folder/b1.png",
        id: " one31",
        url: "https://games.crazygames.com/en_US/autogun-heroes-izk/index.html?v=1.318",
       video :"https://videos.crazygames.com/autogun-heroes-izk/4/autogun-heroes-izk-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b2.png",
        id: " one32",
        url: "https://games.crazygames.com/en_US/stick-epic-fighter/index.html?v=1.318",
        video : " https://videos.crazygames.com/stickman-clash/1/stickman-clash-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b3.png",
        id: " one33",
        url: "https://games.crazygames.com/en_US/tag-2-3-4-players/index.html?v=1.318",
        video : "https://videos.crazygames.com/tag-2-3-4-players/1/tag-2-3-4-players-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b4.png",
        id: " one34",
        url: "https://games.crazygames.com/en_US/flyordieio/index.html?v=1.318",
        video : "https://videos.crazygames.com/archive/flyordieio-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "New folder/b5.png",
        id: " one35",
        url: "https://games.crazygames.com/en_US/obby-with-friends-draw-and-jump/index.html?v=1.318",
        video : " https://videos.crazygames.com/neko-sliding-cat-puzzle/1/neko-sliding-cat-puzzle-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b6.png",
        id: " one36",
        url: "https://games.crazygames.com/en_US/doodle-road/index.html?v=1.318",
        video : " https://videos.crazygames.com/doodle-road/1/doodle-road-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b7.png",
        id: " one37",
        url: "https://games.crazygames.com/en_US/getting-over-it/index.html?v=1.318",
        video : " https://videos.crazygames.com/getting-over-it/2/getting-over-it-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b8.png",
        id: " one38",
        url: "https://games.crazygames.com/en_US/helix-jump/index.html?v=1.318",
        video : " https://videos.crazygames.com/helix-jump/3/helix-jump-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b9.png",
        id: " one39",
        url: "https://games.crazygames.com/en_US/chicken-scream/index.html?v=1.318",
        video : " https://videos.crazygames.com/chicken-scream/1/chicken-scream-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b10.png",
        id: " one40",
        url: "https://games.crazygames.com/en_US/drift-boss/index.html?v=1.318",
        video : " https://videos.crazygames.com/drift-boss/2/drift-boss-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b11.png",
        id: " one41",
        url: "https://games.crazygames.com/en_US/ninja-parkour-multiplayer/index.html?v=1.318",
        video : " https://videos.crazygames.com/ninja-parkour-multiplayer/1/ninja-parkour-multiplayer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b12.png",
        id: " one42",
        url: "https://games.crazygames.com/en_US/jet-rush/index.html?v=1.318",
        video : " https://videos.crazygames.com/archive/jet-rush-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b13.png",
        id: " one43",
        url: "https://games.crazygames.com/en_US/knight-hero-2-revenge-idle-rpg/index.html?v=1.318",
        video : " https://videos.crazygames.com/knight-hero-2-revenge-idle-rpg/1/knight-hero-2-revenge-idle-rpg-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b14.png",
        id: " one44",
        url: "https://games.crazygames.com/en_US/crazy-roll-3d/index.html?v=1.318",
        video : "https://videos.crazygames.com/crazy-roll-3d/5/crazy-roll-3d-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b15.png",
        id: " one45",
        url: "https://games.crazygames.com/en_US/stickman-epic/index.html?v=1.318",
        video : " https://videos.crazygames.com/stickman-epic/2/stickman-epic-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b16.png", id: " one46",
        url: "https://games.crazygames.com/en_US/steve-s-world/index.html?v=1.318",
        video : " https://videos.crazygames.com/steve-s-world/2/steve-s-world-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b17.png", id: " one47",
        url: "https://games.crazygames.com/en_US/gun-mayhem-2/index.html?v=1.318",
        video : " https://videos.crazygames.com/gun-mayhem-2-trimmed.mp4"
      },
      {
        Image: "New folder/b18.png", id: " one48",
        url: "https://games.crazygames.com/en_US/super-robo-adventure/index.html?v=1.318",
        video : " https://videos.crazygames.com/super-robo-adventure/1/super-robo-adventure-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b19.png", id: " one49",
        url: "https://games.crazygames.com/en_US/survival-rush/index.html?v=1.318",
        video : "https://videos.crazygames.com/survival-rush/2/survival-rush-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b20.png", id: " one50",
        url: "https://games.crazygames.com/en_US/bounce-return-on-the-old-phone/index.html?v=1.318",
        video : " https://videos.crazygames.com/bounce-return-on-the-old-phone/1/bounce-return-on-the-old-phone-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b21.png", id: "one51",
        url: "https://games.crazygames.com/en_US/super-onion-boy-2/index.html?v=1.318",
        video : "https://videos.crazygames.com/super-onion-boy-2/1/super-onion-boy-2-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b22.png", id: " one52",
        url: "https://games.crazygames.com/en_US/bouncy-motors/index.html?v=1.318",
        video : " https://videos.crazygames.com/bouncy-motors/2/bouncy-motors-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b23.png", id: "one53",
        url: "https://games.crazygames.com/en_US/stick-fighter-vs-zombies/index.html?v=1.318",
        video : " https://videos.crazygames.com/stick-fighter-vs-zombies/1/stick-fighter-vs-zombies-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b24.png", id: " one54",
        url: "https://games.crazygames.com/en_US/chessformer/index.html?v=1.318",
        video : " https://videos.crazygames.com/chessformer/1/chessformer-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b25.png", id: " one55",
        url: "https://games.crazygames.com/en_US/rolling-in-gears/index.html?v=1.318",
        video : " https://videos.crazygames.com/rolling-in-gears/1/rolling-in-gears-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b26.png", id: " one56",
        url: "https://games.crazygames.com/en_US/squadblast/index.html?v=1.318",
        video : " https://videos.crazygames.com/squadblast/2/squadblast-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b27.png", id: "one57",
        url: "https://games.crazygames.com/en_US/bad-dolls/index.html?v=1.318",
        video : "https://videos.crazygames.com/bad-dolls/1/bad-dolls-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b28.png", id: "one58",
        url: "https://games.crazygames.com/en_US/strike-force-heroes-2/index.html?v=1.318",
        video : " https://videos.crazygames.com/strike-force-heroes-2-trimmed.mp4"
      },
      {
        Image: "New folder/b29.png",
        id: " one59",
        url: "https://games.crazygames.com/en_US/baby-chicco-adventures/index.html?v=1.318",
        video : "https://videos.crazygames.com/baby-chicco-adventures/1/baby-chicco-adventures-landscape-494x276_30fps.mp4"
      },
      {
        Image: "New folder/b30.png",
        id: " one60",
        url: "https://games.crazygames.com/en_US/gun-mayhem/index.html?v=1.318",
        video : " https://videos.crazygames.com/gun-mayhem-trimmed.mp4"
      },
     
    ],

  },
  {
    category: "  Zombie Game ",
    showViewMore: true,
    games: [
      {
        Image: "image7/c1.png", id: "c1",
        url: "https://games.crazygames.com/en_US/world-z-defense---zombie-defense/index.html?v=1.318",
        video : "https://videos.crazygames.com/world-z-defense---zombie-defense/3/world-z-defense---zombie-defense-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c2.png", id: "c2",
        url: "https://games.crazygames.com/en_US/zom-strike-vvq/index.html?v=1.318",
        video : " https://videos.crazygames.com/zom-strike-vvq/1/zom-strike-vvq-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c3.png", id: "c3",
        url: "https://games.crazygames.com/en_US/stick-epic-fighter/index.html?v=1.318",
        video : " https://videos.crazygames.com/stickman-clash/1/stickman-clash-landscape-494x276_30fps.mp4"
     
      },
      {
        Image: "image7/c4.png", id: "c4",
        url: "https://games.crazygames.com/en_US/minimine/index.html?v=1.318",
        video : "https://videos.crazygames.com/minimine/3/minimine-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c5.png", id: "c5",
        url: "https://games.crazygames.com/en_US/zombie-world-escape-fqd/index.html?v=1.318",
        video : "https://videos.crazygames.com/zombie-world-escape-fqd/3/zombie-world-escape-fqd-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c6.png",
        id: "c6",
        url: "https://games.crazygames.com/en_US/death-city-zombie-invasion-liq/index.html?v=1.318",
        video : "https://videos.crazygames.com/death-city-zombie-invasion-liq/1/death-city-zombie-invasion-liq-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c7.png",
        id: "c7",
        url: "https://games.crazygames.com/en_US/dead-land-survival/index.html?v=1.318",
        video : " https://videos.crazygames.com/dead-land-survival/1/dead-land-survival-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c8.png",
        id: "c8",
        url: "https://games.crazygames.com/en_US/monster-shooter-apocalypse/index.html?v=1.318",
        video : "https://videos.crazygames.com/monster-shooter-apocalypse/1/monster-shooter-apocalypse-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c9.png",
        id: "c9",
        url: "https://games.crazygames.com/en_US/stickman-epic/index.html?v=1.318",
        video : "https://videos.crazygames.com/stickman-epic/2/stickman-epic-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c10.png",
        id: "c10",
        url: "https://games.crazygames.com/en_US/you-are-being-watched---horror-game/index.html?v=1.318",
        video : "https://videos.crazygames.com/you-are-being-watched---horror-game/5/you-are-being-watched---horror-game-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c11.png",
        id: "c11",
        url: "https://games.crazygames.com/en_US/horde-killer-you-vs-100/index.html?v=1.318",
        video : "https://videos.crazygames.com/horde-killer-you-vs-100/10/horde-killer-you-vs-100-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c12.png", id: "c12",
        url: "https://games.crazygames.com/en_US/mini-caps-arena/index.html?v=1.318",
        video : "https://videos.crazygames.com/mini-caps-arena/1/mini-caps-arena-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c13.png", id: "c13",
        url: "https://games.crazygames.com/en_US/castle-wars-middle-ages/index.html?v=1.318",
        video : "https://videos.crazygames.com/castle-wars-middle-ages/3/castle-wars-middle-ages-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c14.png",
        id: "c14",
        url: "https://games.crazygames.com/en_US/stupid-zombies-ybg/index.html?v=1.318",
        video : " https://videos.crazygames.com/stupid-zombies-ybg/1/stupid-zombies-ybg-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c15.png",
        id: "c15",
        url: "https://games.crazygames.com/en_US/stick-fighter-vs-zombies/index.html?v=1.318",
        video : " https://videos.crazygames.com/stick-fighter-vs-zombies/1/stick-fighter-vs-zombies-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c16.png",
        id: "c16",
        url: "https://games.crazygames.com/en_US/zombie-drive-survivor/index.html?v=1.318",
        video: "https://videos.crazygames.com/zombie-drive-survivor/1/zombie-drive-survivor-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c17.png",
        id: "c17",
        url: "https://games.crazygames.com/en_US/castel-wars-new-era/index.html?v=1.318",
        video : "https://videos.crazygames.com/castle-wars-middle-ages/3/castle-wars-middle-ages-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c18.png",
        id: "c18",
        url: "https://games.crazygames.com/en_US/resident-zombies---horror-shooter/index.html?v=1.318",
        video : "https://videos.crazygames.com/resident-zombies---horror-shooter/1/resident-zombies---horror-shooter-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c19.png",
        id: "c19",
        url: "https://games.crazygames.com/en_US/trap-craft/index.html?v=1.318",
        video : "https://videos.crazygames.com/trap-craft/1/trap-craft-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c20.png",
        id: "c20",
        url: "https://games.crazygames.com/en_US/stickman-annihilation-2/index.html?v=1.318",
        video : "https://videos.crazygames.com/stickman-annihilation-2/1/stickman-annihilation-2-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c21.png",
        id: "c21",
        url: "https://games.crazygames.com/en_US/zombies-shooter-part-2/index.html?v=1.318",
        video : "https://videos.crazygames.com/zombies-shooter-part-2/4/zombies-shooter-part-2-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c22.png",
        id: "c22",
        url: "https://games.crazygames.com/en_US/mini-royale-nations/index.html?v=1.318",
        video : " https://videos.crazygames.com/mini-royale-nations/4/mini-royale-nations-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c23.png",
        id: "c23",
        url: "https://games.crazygames.com/en_US/red-stickman-vs-monster-school-2/index.html?v=1.318",
        video : "https://videos.crazygames.com/red-stickman-vs-monster-school-2/1/red-stickman-vs-monster-school-2-landscape-494x276_30fps.mp4"
      },
      {
        Image: "image7/c24.png",
        id: "c24",
        url: "https://games.crazygames.com/en_US/stickman-zombie-annihilation/index.html?v=1.318",
        video : "https://videos.crazygames.com/stickman-zombie-annihilation/1/stickman-zombie-annihilation-landscape-494x276_30fps.mp4 "
      },
      {
        Image: "image7/c25.png",
        id: "c25",
        url: "https://games.crazygames.com/en_US/dead-zed/index.html?v=1.318",
        video : "https://videos.crazygames.com/dead-zed/1/dead-zed-landscape-494x276_30fps.mp4 "

      },
      {
        Image: "image7/c26.png",
        id: "c26",
        url: "https://games.crazygames.com/en_US/noob-zombie-prison-escape/index.html?v=1.318",
        video : "https://videos.crazygames.com/noob-zombie-prison-escape/2/noob-zombie-prison-escape-landscape-494x276_30fps.mp4 "
      },
      {
        Image : "image7/c27.png",
        id: "c27",
        url : "https://games.crazygames.com/en_US/dino-hunting-jurassic-world/index.html?v=1.318",
        video : "https://videos.crazygames.com/dino-hunting-jurassic-world/2/dino-hunting-jurassic-world-landscape-494x276_30fps.mp4 "
      },
      {
        Image : "image7/c28.png",
        id: "c28",
        url : "https://games.crazygames.com/en_US/cubic-frontier-zombie-robby/index.html?v=1.318",
        video : "https://videos.crazygames.com/cubic-frontier-zombie-robby/1/cubic-frontier-zombie-robby-landscape-494x276_30fps.mp4 "
      },
      {
        Image : "image7/c29.png",
        id: "c29",
        url : "https://games.crazygames.com/en_US/zombie-hunter/index.html?v=1.318",
        video :"https://videos.crazygames.com/zombie-hunter/1/zombie-hunter-landscape-494x276_30fps.mp4 " 
      },
      {
        Image : "image7/c30.png",
        id: "c30",
        url : "https://games.crazygames.com/en_US/senya-and-oscar-vs-zombies/index.html?v=1.318",
        video : "https://videos.crazygames.com/senya-and-oscar-vs-zombies/1/senya-and-oscar-vs-zombies-landscape-494x276_30fps.mp4 "
      }
    ],
  },
  {
    category: " CrazyGames Originals ",
    showViewMore: true,
    games: [ 
    {
      Image : "image8/b1.png",
      id : "t1",
      url : "https://games.crazygames.com/en_US/epic-empire-tower-defense/index.html?v=1.318",
      video : "https://videos.crazygames.com/ball-blast/3/ball-blast-landscape-494x276_30fps.mp4"
    },
    {
      Image : "image8/b2.png",
      id : "t2",
      url : "https://games.crazygames.com/en_US/escape-from-prison-multiplayer/index.html?v=1.318",
      video : "https://videos.crazygames.com/escape-from-prison-multiplayer/3/escape-from-prison-multiplayer-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b3.png",
      id : "t3",
      url : "https://games.crazygames.com/en_US/space-waves/index.html?v=1.318",
      video : "https://videos.crazygames.com/space-waves/4/space-waves-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b4.png",
      id : "t4",
      url : "https://games.crazygames.com/en_US/evowarsio/index.html?v=1.318",
      video : "https://videos.crazygames.com/evowarsio/8/evowarsio-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b5.png",
      id : "t5",
      url : "https://games.crazygames.com/en_US/cubes-2048-io/index.html?v=1.318",
      video : "https://videos.crazygames.com/cubes-2048-io/4/cubes-2048-io-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b6.png",
      id : "t6",
      url : "https://games.crazygames.com/en_US/sandbox-city---cars-zombies-ragdolls/index.html?v=1.318",
      video : "https://videos.crazygames.com/sandbox-city---cars-zombies-ragdolls/3/sandbox-city---cars-zombies-ragdolls-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b7.png",
      id : "t7",
      url : "https://games.crazygames.com/en_US/gridpunk---3v3-battle-royale/index.html?v=1.318",
      video : "https://videos.crazygames.com/gridpunk---3v3-battle-royale/6/gridpunk---3v3-battle-royale-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b8.png",
      id : "t8",
      url : "https://games.crazygames.com/en_US/sky-riders-buk/index.html?v=1.318",
      video : "https://videos.crazygames.com/sky-riders-buk/6/sky-riders-buk-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b9.png",
      id : "t9",
      url : "https://games.crazygames.com/en_US/jump-guys/index.html?v=1.318",
      video : "https://videos.crazygames.com/jump-guys/6/jump-guys-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b10.png",
      id : "t10",
      url : "https://games.crazygames.com/en_US/mini-golf-club/index.html?v=1.318",
      video : "https://videos.crazygames.com/mini-golf-club/6/mini-golf-club-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b11.png",
      id : "t11",
      url : "https://games.crazygames.com/en_US/holey-io-battle-royale/index.html?v=1.318",
      video : " https://videos.crazygames.com/holey-io-battle-royale/5/holey-io-battle-royale-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b12.png",
      id : "t12",
      url : "https://games.crazygames.com/en_US/voxiom-io/index.html?v=1.318",
      video : "https://videos.crazygames.com/voxiom-io/4/voxiom-io-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b13.png",
      id : "t13",
      url : "https://games.crazygames.com/en_US/goober-dash/index.html?v=1.318",
      video : "https://videos.crazygames.com/goober-dash/6/goober-dash-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b14.png",
      id : "t14",
      url : "https://games.crazygames.com/en_US/cg-fc-24/index.html?v=1.318",
      video : "https://videos.crazygames.com/cg-fc-24/6/cg-fc-24-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b15.png",
      id : "t15",
      url : "https://games.crazygames.com/en_US/build-and-crush/index.html?v=1.318",
      video : "https://videos.crazygames.com/build-and-crush/7/build-and-crush-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b16.png",
      id : "t16",
      url : "https://games.crazygames.com/en_US/struckd---3d-game-creator/index.html?v=1.318",
      video : " https://videos.crazygames.com/struckd---3d-game-creator/7/struckd---3d-game-creator-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b17.png",
      id : "t17",
      url : "https://games.crazygames.com/en_US/doodle-arena/index.html?v=1.318",
      video : "https://videos.crazygames.com/doodle-arena/9/doodle-arena-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b18.png",
      id : "t18",
      url : "https://games.crazygames.com/en_US/bro-royale/index.html?v=1.318",
      video : "https://videos.crazygames.com/bro-royale/5/bro-royale-portrait-283x420_30fps.mp4"
    },
    {
      Image : "image8/b19.png",
      id : "t19",
      url : "https://games.crazygames.com/en_US/mighty-action-heroes/index.html?v=1.318",
      video : " https://videos.crazygames.com/mighty-action-heroes/5/mighty-action-heroes-portrait-283x420_30fps.mp4"
    },
  ]
  },
  {
    category: "Recommended this week",
    showViewMore: true,
    games: [
      {
        Image : "https://imgs.crazygames.com/sand-king_16x9/20230908085845/sand-king_16x9-cover?metadata=none&quality=40&width=273&fit=crop&dpr=2",
        id : "week",
        url : "https://games.crazygames.com/en_US/sand-king/index.html?v=1.320",
        video : "https://videos.crazygames.com/sand-king/1/sand-king-landscape-494x276_30fps.mp4"
      },
      {
        Image : "https://imgs.crazygames.com/retro-battle/20220624120612/retro-battle-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week2",
        url : " https://games.crazygames.com/en_US/retro-battle/index.html?v=1.320",
        video : " https://videos.crazygames.com/retro-battle/1/retro-battle-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/muscle-shift_16x9/20241219023753/muscle-shift_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week3",
        url : " https://games.crazygames.com/en_US/muscle-shift/index.html?v=1.320",
        video : "https://videos.crazygames.com/muscle-shift/1/muscle-shift-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/ants-adventure/20230228105837/ants-adventure-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week4",
        url : " https://ants-adventure.game-files.crazygames.com/unity/unity2020/ants-adventure.html?v=1.320",
        video : "https://videos.crazygames.com/ants-adventure/1/ants-adventure-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/obby-1-to-spaceflight-altitude_16x9/20240903082318/obby-1-to-spaceflight-altitude_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week5",
        url : " https://games.crazygames.com/en_US/obby-1-to-spaceflight-altitude/index.html?v=1.320",
        video : " https://videos.crazygames.com/obby-1-to-spaceflight-altitude/1/obby-1-to-spaceflight-altitude-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/games/ludo-hero/cover-1586285558737.jpg?metadata=none&quality=40&width=273&fit=crop&dpr=2",
        id : "week6",
        url : " https://games.crazygames.com/en_US/ludo-hero/index.html?v=1.320",
        video : " https://videos.crazygames.com/ludo-hero/2/ludo-hero-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/dino-crowd/20230718174343/dino-crowd-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week7",
        url : " https://games.crazygames.com/en_US/dino-crowd/index.html?v=1.320",
        video : "https://videos.crazygames.com/dino-crowd/1/dino-crowd-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/landlord---real-estate-tycoon_16x9/20241227072608/landlord---real-estate-tycoon_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week8",
        url : " https://landlord---real-estate-tycoon.game-files.crazygames.com/unity/unity2020/landlord---real-estate-tycoon.html?v=1.320",
        video : "https://videos.crazygames.com/landlord---real-estate-tycoon/1/landlord---real-estate-tycoon-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/time-control/20221010142520/time-control-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week9",
        url : "https://games.crazygames.com/en_US/time-control/index.html?v=1.320",
        video : " https://videos.crazygames.com/time-control/1/time-control-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/battalion-commander-1917/20220712134122/battalion-commander-1917-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week10",
        url : " https://games.crazygames.com/en_US/battalion-commander-1917/index.html?v=1.320",
        video : " https://videos.crazygames.com/battalion-commander-1917/1/battalion-commander-1917-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : " https://imgs.crazygames.com/numbers-arena_16x9/20231006022522/numbers-arena_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week11",
        url : "https://numbers-arena.game-files.crazygames.com/unity/unity2020/numbers-arena.html?v=1.320",
        video : "https://videos.crazygames.com/numbers-arena/1/numbers-arena-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/adventneon/20210202084011/adventneon-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week12",
        url : " https://games.crazygames.com/en_US/adventneon/index.html?v=1.320",
        video : " https://videos.crazygames.com/adventneon/1/adventneon-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/stickman-archero-fight/20221115174354/stickman-archero-fight-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week13",
        url : "https://games.crazygames.com/en_US/stickman-archero-fight/index.html?v=1.320",
        video : "  https://videos.crazygames.com/stickman-archero-fight/1/stickman-archero-fight-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/baby-chicco-adventures_16x9/20240722070114/baby-chicco-adventures_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week14",
        url : "https://games.crazygames.com/en_US/baby-chicco-adventures/index.html?v=1.320",
        video : "  https://videos.crazygames.com/baby-chicco-adventures/1/baby-chicco-adventures-landscape-494x276_30fps.mp4 "
        
      },
      {
        Image : "https://imgs.crazygames.com/onebit-adventure_16x9/20230912160135/onebit-adventure_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week15",
        url : "https://games.crazygames.com/en_US/onebit-adventure/index.html?v=1.320",
        video : "  https://videos.crazygames.com/onebit-adventure/1/onebit-adventure-landscape-494x276_30fps.mp4"

        
      },
      {
        Image : "https://imgs.crazygames.com/gragyriss-captor-of-princesses/20210118190837/gragyriss-captor-of-princesses-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week16",
        url : " https://games.crazygames.com/en_US/gragyriss-captor-of-princesses/index.html?v=1.320",
        video : "  https://videos.crazygames.com/gragyriss-captor-of-princesses/1/gragyriss-captor-of-princesses-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/games/pipes-the-puzzle/cover_16x9-1707829707676.png?metadata=none&quality=85&width=273&fit=crop",
        id : "week17",
        url : " https://games.crazygames.com/en_US/pipes-the-puzzle/index.html?v=1.320",
        video : "  https://videos.crazygames.com/pipes-the-puzzle/1/pipes-the-puzzle-landscape-494x276_30fps.mp4 "
        
      },
      {
        Image : "https://imgs.crazygames.com/offroaderv6.png?metadata=none&quality=85&width=273&fit=crop",
        id : "week18",
        url : "https://games.crazygames.com/en_US/offroader-v6/index.html?v=1.320",
        video : " https://videos.crazygames.com/offroader-v6.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/shape-shooter-2_16x9/20241111074634/shape-shooter-2_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week19",
        url : "https://games.crazygames.com/en_US/shape-shooter-2/index.html?v=1.320",
        video : "https://videos.crazygames.com/shape-shooter-2/1/shape-shooter-2-landscape-494x276_30fps.mp4 "
        
      },
      {
        Image : "https://imgs.crazygames.com/cyberpunk-resistance/20220426174343/cyberpunk-resistance-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week20",
        url : " https://games.crazygames.com/en_US/cyberpunk-resistance/index.html?v=1.320",
        video : " https://videos.crazygames.com/cyberpunk-resistance/1/cyberpunk-resistance-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/hidden-oxygen/20201124135132/hidden-oxygen-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week21",
        url : " https://games.crazygames.com/en_US/hidden-oxygen/index.html?v=1.320",
        video : " https://videos.crazygames.com/hidden-oxygen/1/hidden-oxygen-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/games/zombie-outbreak-arena/thumb-1560257367984.png?metadata=none&quality=85&width=273&fit=crop",
        id : "week22",
        url : " https://games.crazygames.com/en_US/zombie-outbreak-arena/index.html?v=1.320",
        video : "  https://videos.crazygames.com/zombie-outbreak-arena/2/zombie-outbreak-arena-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/games/rio-rex/cover-1586426375628.png?metadata=none&quality=85&width=273&fit=crop",
        id : "week23",
        url : " https://games.crazygames.com/en_US/rio-rex/index.html?v=1.320",
        video : "  https://videos.crazygames.com/archive/rio-rex-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/games/ant-colony-new-war/cover_16x9-1707828954281.png?metadata=none&quality=85&width=273&fit=crop",
        id : "week24",
        url : " https://games.crazygames.com/en_US/ant-colony-new-war/index.html?v=1.320",
        video : "https://videos.crazygames.com/ant-colony-new-war/1/ant-colony-new-war-landscape-494x276_30fps.mp4 "
        
      },
      {
        Image : "https://imgs.crazygames.com/cat-bakery_16x9/20240320084916/cat-bakery_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week25",
        url : " https://games.crazygames.com/en_US/cat-bakery/index.html?v=1.320",
        video : " https://videos.crazygames.com/cat-bakery/1/cat-bakery-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/rope-color-sort-3d/20230405164311/rope-color-sort-3d-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week26",
        url : " https://games.crazygames.com/en_US/rope-color-sort-3d/index.html?v=1.320",
        video : " https://videos.crazygames.com/rope-color-sort-3d/1/rope-color-sort-3d-landscape-494x276_30fps.mp4"
        
      },
      {
        Image :"https://imgs.crazygames.com/unpuzzle-tap-away-puzzle-game_16x9/20240424044031/unpuzzle-tap-away-puzzle-game_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week27",
        url : " https://games.crazygames.com/en_US/unpuzzle-tap-away-puzzle-game/index.html?v=1.320",
        video : "https://videos.crazygames.com/unpuzzle-tap-away-puzzle-game/1/unpuzzle-tap-away-puzzle-game-landscape-494x276_30fps.mp4 "
        
      },
      {
        Image : "https://imgs.crazygames.com/stickman-counter-terror-strike-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week28",
        url : " https://games.crazygames.com/en_US/stickman-counter-terror-strike/index.html?v=1.320",
        video : " https://videos.crazygames.com/stickman-counter-terror-strike/1/stickman-counter-terror-strike-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/true-love-calculator-nzw/20230210084911/true-love-calculator-nzw-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week29",
        url : " https://games.crazygames.com/en_US/true-love-calculator-nzw/index.html?v=1.320",
        video : " https://videos.crazygames.com/true-love-calculator-nzw/1/true-love-calculator-nzw-landscape-494x276_30fps.mp4"
        
      },
      {
        Image : "https://imgs.crazygames.com/office-fight_16x9/20231207090131/office-fight_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
        id : "week30",
        url : " https://games.crazygames.com/en_US/office-fight/index.html?v=1.320",
        video : "https://videos.crazygames.com/office-fight/1/office-fight-landscape-494x276_30fps.mp4 "
        
      },
    ]
  },  
]

