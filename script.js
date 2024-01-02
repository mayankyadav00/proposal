document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mediaContainer = document.getElementById('mediaContainer');
    const mainSection = document.querySelector('main');

    // Animation for the main section
    gsap.from(mainSection, { opacity: 0, duration: 1, delay: 0.5, ease: 'power2.inOut' });

    // Animation for the buttons on hover
    gsap.to('button', { scale: 1.1, duration: 0.3, ease: 'power2.inOut', repeat: -1, yoyo: true });

    yesBtn.addEventListener('click', function () {
        // Animation for the "Yes" button
        gsap.to(yesBtn, { scale: 1.2, duration: 0.5, ease: 'bounce.out' });

        // Display a heartfelt message
        setTimeout(function () {
            // Show the attached sticker (GIF) on a black background
            showSticker('cute-love.gif'); // Replace with the actual filename
        }, 500);
    });

    noBtn.addEventListener('click', function () {
        // Animation for the "No" button
        gsap.to(noBtn, { x: '-150%', opacity: 0, duration: 0.8, ease: 'power2.inOut' });

        // Change position as soon as someone tries to click it
        gsap.to(noBtn, { x: '150%', duration: 0, delay: 0.3 });

        // Display a playful message after the animation
        setTimeout(function () {
            alert('Oh no! The button escaped! 🚀 But hey, maybe next time! 😊');
            // Reset the button's position and opacity
            gsap.to(noBtn, { x: 0, opacity: 1, duration: 0.1 });
        }, 1000);
    });

    function showSticker(stickerFileName) {
        // Clear existing media in the container
        mediaContainer.innerHTML = '';

        // Create an image element for the sticker (GIF)
        const stickerElement = document.createElement('img');
        stickerElement.src = stickerFileName;
        stickerElement.alt = 'Romantic Sticker';
        stickerElement.style.width = '100%';

        // Create an overlay div with a black background
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'black';
        overlay.style.opacity = '0.9';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';

        // Append the sticker to the overlay
        overlay.appendChild(stickerElement);

        // Append the overlay to the media container
        mediaContainer.appendChild(overlay);

        // Show the media container
        mediaContainer.style.display = 'block';
    }
});
