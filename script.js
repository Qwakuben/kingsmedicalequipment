document.querySelectorAll('.container').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = image.getAttribute('data-full');
        lightbox.style.display = 'flex';
    });
});

document.getElementById('lightbox-close').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        document.getElementById('lightbox').style.display = 'none';
    }
});
