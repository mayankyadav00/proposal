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
            alert('Yay! 🌈 I can’t wait to create more wonderful memories together! 💑');
            // Show the attached media (image, gif, or sticker)
            showMedia('cute-love.gif'); // Replace with the actual filename
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

    function showMedia(mediaFileName) {
        // Clear existing media in the container
        mediaContainer.innerHTML = '';

        // Determine the media type based on the file extension
        const fileExtension = mediaFileName.split('.').pop().toLowerCase();

        switch (fileExtension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
                // For images
                showImage(mediaFileName);
                break;
            case 'gif':
                // For GIFs
                showGif(mediaFileName);
                break;
            case 'webp':
            case 'sticker':
                // For stickers (you can customize the handling of sticker files)
                showSticker(mediaFileName);
                break;
            default:
                alert('Unsupported media type.');
        }

        // Show the media container
        mediaContainer.style.display = 'block';
    }

    function showImage(imageFileName) {
        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = imageFileName;
        imageElement.alt = 'Romantic Image';
        imageElement.style.width = '100%';

        // Append the image to the media container
        mediaContainer.appendChild(imageElement);
    }

    function showGif(gifFileName) {
        // Create a video element for better GIF support
        const videoElement = document.createElement('video');
        videoElement.src = gifFileName;
        videoElement.alt = 'Romantic Gif';
        videoElement.style.width = '100%';
        videoElement.setAttribute('autoplay', true);
        videoElement.setAttribute('loop', true);

        // Append the video to the media container
        mediaContainer.appendChild(videoElement);
    }

    function showSticker(stickerFileName) {
        // For stickers or custom handling (e.g., display a sticker pack)
        alert('Sticker display not implemented in this example.');
    }
});
