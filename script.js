document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
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
});
