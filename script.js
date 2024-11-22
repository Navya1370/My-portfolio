// Typewriter Effect
const words = [" An AI Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typewriter.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Create stars on the page
function createStars() {
    let numberOfStars = 150;  // Limit the number of stars for better performance
    let body = document.body;

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Random positions and size
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDuration = Math.random() * 3 + 1 + "s"; // Random twinkle duration
        star.style.animationDelay = Math.random() * 5 + "s"; // Random delay for twinkling

        body.appendChild(star);
    }
}

// Create planets on the page
function createPlanets() {
    let numberOfPlanets = 3;  // Limit number of planets for performance
    let body = document.body;

    for (let i = 0; i < numberOfPlanets; i++) {
        let planet = document.createElement("div");
        planet.classList.add("planet");

        // Random sizes and positions for the planets
        let size = Math.random() * 60 + 30; // Random size between 30px and 90px
        let xPosition = Math.random() * window.innerWidth;
        let yPosition = Math.random() * window.innerHeight;

        planet.style.width = size + "px";
        planet.style.height = size + "px";
        planet.style.left = xPosition + "px";
        planet.style.top = yPosition + "px";
        planet.style.animationDuration = Math.random() * 30 + 25 + "s"; // Random orbit duration

        body.appendChild(planet);
    }
}

// Call functions to create stars and planets when the page loads
window.onload = function() {
    createStars();
    createPlanets();
};

// Efficient animation with requestAnimationFrame
function animate() {
    requestAnimationFrame(animate);
    // You can include animation logic here if needed
}

animate();

