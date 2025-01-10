// JavaScript for lightbox functionality
const images = document.querySelectorAll('.gallery .image');

images.forEach(image => {
    const imageUrl = image.getAttribute('data-image');
    image.style.backgroundImage = `url('${imageUrl}')`;
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';

    image.addEventListener('click', () => {
        openLightbox(imageUrl);
    });
});

function openLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    lightbox.innerHTML = `
        <div class="lightbox-content">
            <div class="image" style="
                background-image: url('${imageUrl}');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                width: 90vw;
                height: 90vh;
            "></div>
            <button class="close-lightbox">&times;</button>
        </div>
    `;

    document.body.appendChild(lightbox);

    // Close the lightbox when the close button is clicked
    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    // Close the lightbox when clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}


    document.body.appendChild(lightbox);

    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            document.body.removeChild(lightbox);
        }
    }
});
