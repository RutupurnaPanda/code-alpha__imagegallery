document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    let currentIndex = 0;

    const updateMainImage = (index) => {
        currentIndex = index;
        mainImage.src = thumbnails[index].src;
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateMainImage(index));
    });

    document.querySelector('.next').addEventListener('click', () => {
        updateMainImage((currentIndex + 1) % thumbnails.length);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        updateMainImage((currentIndex - 1 + thumbnails.length) % thumbnails.length);
    });
});

