// Logo
anime({
    targets: '.logo',
    scale: [1, 1.05],
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});



// Gradient 
anime({
    targets: 'body',
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    duration: 10000,
    easing: 'linear',
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedTexts = document.querySelectorAll('.animated-text');
    animatedTexts.forEach((textElement) => {
        const textContent = textElement.textContent;
        textElement.innerHTML = textContent
            .split('')
            .map((char) =>
                char === ' ' 
                    ? `<span class="letter" style="display: inline-block; width: 0.5em;">&nbsp;</span>`
                    : `<span class="letter" style="display: inline-block;">${char}</span>`
            )
            .join('');

        anime.timeline({
            targets: textElement.querySelectorAll('.letter'),
            easing: 'easeOutExpo',
            loop: true, 
        })
            .add({
                opacity: [0, 1], 
                scale: [0.5, 1], 
                rotate: ['-10deg', '0deg'], 
                duration: 1500, 
                delay: (el, i) => i * 100, 
            })
            .add({
                opacity: [1, 0], 
                scale: [1, 0.5], 
                rotate: ['0deg', '10deg'], 
                duration: 1000, 
                delay: (el, i) => i * 100,
            })
            .add({
                targets: textElement.querySelectorAll('.letter'),
                opacity: 0, 
                duration: 1000,
                delay: 0, 
            });
    });
});