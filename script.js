function showLove() {
    document.getElementById("message").innerHTML = "Feliz San Valentín 11 días después 💖";
}

function openLetter() {
    let envelope = document.getElementById("envelope-img");
    let letter = document.getElementById("letter");

    
    if (!letter.classList.contains("show")) {
 
        envelope.style.transform = "scale(0)";
        setTimeout(() => {
            letter.classList.add("show");

            
            let sound = new Audio("resources/cajita.mp3");
            sound.play();

            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => createHeart(), i * 100);
            }
        }, 500);
    }
}

function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    heart.style.position = "absolute";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = "50px";
    heart.style.transform = `translate(${x}px, ${y}px)`;
    heart.style.animation = "float-hearts 1.5s ease-out forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);
}

function playMusic() {
    let music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;  
    }
}
function checkPassword() {
    let correctPassword = "limonychicleamor29"; 
    let userInput = document.getElementById("passwordInput").value;
    let feedbackMessage = document.getElementById("feedbackMessage");
    let successMessage = document.getElementById("successMessage");
    let rewardLink = document.getElementById("rewardLink");

    if (userInput === correctPassword) {
        
        document.getElementById("passwordInput").style.display = "none";
        document.querySelector("button").style.display = "none";
        feedbackMessage.style.display = "none";

        successMessage.classList.remove("hidden");
        rewardLink.classList.remove("hidden");
    } else {

        feedbackMessage.innerText = "Contraseña incorrecta.";
    }
}