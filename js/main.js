document.addEventListener("DOMContentLoaded", () => {

    fetch("data/cancion.json")
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar los datos musicales");
            return response.json();
        })
        .then(data => {

            const spotifyContainer = document.getElementById("spotify-player");
            const reviewText = document.getElementById("review-text");

            spotifyContainer.innerHTML = `
                <iframe 
                    src="https://open.spotify.com/embed/track/${data.id}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            `;

            reviewText.textContent = `"${data.descripcion}"`;
        })
        .catch(error => {
            console.error("Hubo un problema con la cápsula musical:", error);
        });
});
