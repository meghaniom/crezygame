        const params = new URLSearchParams(window.location.search); 
         const id    = params.get("id");
        
                document.addEventListener('DOMContentLoaded', () => {
                    let matchedGame = null;
        
                    for (const category of categories) {
                        matchedGame = category.games.find((game) => game.id === id);
                        if (matchedGame) break; 
                    }
        
                    if (matchedGame) {
                        const print = document.getElementById("imagePreview");
        
                        if (print) {
                            print.innerHTML = `
                                <p>Game Name: ${matchedGame.name || "Unknown Game"}</p>
                                <p>ID: ${matchedGame.id}</p>
                               
                                <iframe src="${matchedGame.url}" frameborder="0" width="1000px" height="500px"></iframe>
                            `;
                        } else {
                            console.error("Element with ID 'imagePreview' not found.");
                        }
                    } else {
                        document.getElementById("imagePreview").innerHTML = "<p>No game found for the provided ID.</p>";
                    }
                });