document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fruitButton');
    const result = document.getElementById('result');
    const counterText = document.getElementById('counter-text');
    const fireworksContainer = document.getElementById('fireworks-container');
    let clickCount = 0;

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.classList.add('explode');
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }, 100);
    }

    function launchFireworks() {
        for (let i = 0; i < 100; i++) {
            setTimeout(createFirework, i * 50);
        }
    }

    button.addEventListener('click', () => {
        console.log("Button clicked!"); // Debugging: Check if this logs on each click
        clickCount++;
        console.log("clickCount:", clickCount); // Debugging: Check the value of clickCount

        counterText.textContent = `Alan es ${clickCount} ${clickCount === 1 ? 'vez' : 'veces'} puto`;
        counterText.classList.add('counter-animate');
        setTimeout(() => {
            counterText.classList.remove('counter-animate');
        }, 300);

        if (clickCount === 100) {
            launchFireworks();
        }

        switch (clickCount) {
            case 1:
                result.textContent = 'Definitivamente sí es';
                break;
            case 2:
                result.textContent = 'Sigue siendo puto';
                break;
            default:
                result.textContent = 'Sí es y nunca va a dejar de serlo';
                break;
        }

        result.classList.add('animate');
        setTimeout(() => {
            result.classList.remove('animate');
        }, 1000);
    });
});