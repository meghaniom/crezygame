        const params = new URLSearchParams(window.location.search); 
         const id    = params.get("id");
        //  alert(id);
        
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
                                <iframe 
                                    src="${matchedGame.url}" 
                                    frameborder="0" 
                                    width="100%" 
                                    height="500px"
                                    scrolling="no"
                                    onload="document.getElementById('loadingSpinner').style.display='none';"
                                    onclick="this.requestFullscreen();"
                                ></iframe>
                                <div id="loadingSpinner" style="display: flex; justify-content: center; align-items: center; padding: 20px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;">
                                    <style>
                                        @keyframes spin {
                                            0% { transform: rotate(0deg); }
                                            100% { transform: rotate(360deg); }
                                        }
                                    </style>
                                    <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite;"></div>
                                </div>`;
                        } else {
                            console.error("Element with ID 'imagePreview' not found.");
                        }
                    } else {
                        document.getElementById("imagePreview").innerHTML = "<p>No game found for the provided ID.</p>";
                    }
                });