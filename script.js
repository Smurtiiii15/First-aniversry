/* ==========================================
   TYPING EFFECT
========================================== */

const typingTarget = document.getElementById("typingTarget");

const typingText =
    "365 days later, through every storm and every silence, my heart still belongs to you.";

let typeIndex = 0;

function typeWriter() {

    if (!typingTarget) return;

    if (typeIndex < typingText.length) {

        typingTarget.innerHTML += typingText.charAt(typeIndex);

        typeIndex++;

        setTimeout(typeWriter, 60);
    }
}

window.addEventListener("load", () => {

    setTimeout(() => {

        typeWriter();

    }, 1200);

});

/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer =
    document.getElementById("heartsContainer");

function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        ["💕", "💖", "💗", "💓", "💞"]
        [Math.floor(Math.random() * 5)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);
}

setInterval(createHeart, 350);

/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursorDot =
    document.getElementById("cursorDot");

const cursorRing =
    document.getElementById("cursorRing");

document.addEventListener("mousemove",
    (e) => {

        if (cursorDot) {

            cursorDot.style.left =
                e.clientX + "px";

            cursorDot.style.top =
                e.clientY + "px";
        }

        if (cursorRing) {

            cursorRing.style.left =
                e.clientX - 17 + "px";

            cursorRing.style.top =
                e.clientY - 17 + "px";
        }

    });

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals =
    document.querySelectorAll(
        ".reveal-up,.reveal-left,.reveal-right,.reveal-tl"
    );

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

reveals.forEach(el => {

    observer.observe(el);

});

/* ==========================================
   MUSIC PLAYER
========================================== */

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

let musicPlaying = false;

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!bgMusic) return;

        if (!musicPlaying) {

            bgMusic.play();

            musicPlaying = true;

            musicBtn.innerHTML = "❚❚";

        } else {

            bgMusic.pause();

            musicPlaying = false;

            musicBtn.innerHTML = "♪";

        }

    });

}

/* ==========================================
   LOADER
========================================== */

const loader =
    document.getElementById("loader");

const loaderBar =
    document.getElementById("loaderBar");

const loaderPercent =
    document.getElementById("loaderPercent");

let loadProgress = 0;

const loadInterval =
    setInterval(() => {

        loadProgress++;

        if (loaderBar) {

            loaderBar.style.width =
                loadProgress + "%";
        }

        if (loaderPercent) {

            loaderPercent.innerHTML =
                loadProgress + "%";
        }

        if (loadProgress >= 100) {

            clearInterval(loadInterval);

            setTimeout(() => {

                if (loader) {

                    loader.style.opacity = "0";

                    loader.style.transition =
                        "1s";

                    setTimeout(() => {

                        loader.style.display =
                            "none";

                    }, 1000);
                }

            }, 500);

        }

    }, 30);
/* ==========================================
   365 REASONS SYSTEM
========================================== */

const reasons = [

    "Your smile makes every bad day better.",
    "The way you care about people.",
    "Your beautiful eyes.",
    "The way you laugh.",
    "Your kindness.",
    "Your strength.",
    "The way you understand me.",
    "Your voice.",
    "The comfort I feel with you.",
    "The way you make ordinary moments special.",
    "The way you never leave my mind.",
    "Your honesty.",
    "Your loyalty.",
    "The way you inspire me.",
    "Your beautiful heart.",
    "The way you look when you're happy.",
    "The way you make me feel loved.",
    "The way you listen.",
    "The way you make me want to be better.",
    "The memories we created together.",
    "You are my favorite person.",
    "Your patience.",
    "The way you fight through hard times.",
    "Your cute expressions.",
    "The way you make me smile.",
    "Your warmth.",
    "The way you believe in people.",
    "The way you love.",
    "The way you care for your family.",
    "The way you stay strong.",
    "You are unique.",
    "You make life beautiful.",
    "The way you look at me.",
    "The way you understand my silence.",
    "The way you support me.",
    "The way you trust me.",
    "The way you dream.",
    "The way you never give up.",
    "The way you make my heart race.",
    "The way you make me feel safe.",
    "Because you are you."

];

const reasonBtn =
    document.getElementById("reasonBtn");

const reasonText =
    document.getElementById("reasonText");

const reasonNumber =
    document.getElementById("reasonNumber");

const reasonCount =
    document.getElementById("reasonCount");

let currentReason = 0;

if (reasonBtn) {

    reasonBtn.addEventListener("click", () => {

        currentReason++;

        if (currentReason >= reasons.length) {

            currentReason = 0;

        }

        if (reasonText) {

            reasonText.style.opacity = "0";

            setTimeout(() => {

                reasonText.innerHTML =
                    reasons[currentReason];

                reasonText.style.opacity = "1";

            }, 300);

        }

        if (reasonNumber) {

            reasonNumber.innerHTML =
                "#" + (currentReason + 1);

        }

        if (reasonCount) {

            reasonCount.innerHTML =
                (currentReason + 1);

        }

    });

}

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const img =
            item.querySelector("img");

        const caption =
            item.dataset.caption;

        if (lightbox) {

            lightbox.classList.add("active");

        }

        if (lightboxImg) {

            lightboxImg.src = img.src;

        }

        if (lightboxCaption) {

            lightboxCaption.innerHTML =
                caption;

        }

    });

});

if (lightboxClose) {

    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

/* ==========================================
   HERO STARS GENERATOR
========================================== */

const heroStars =
    document.getElementById("heroStars");

if (heroStars) {

    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("span");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        heroStars.appendChild(star);

    }

}

/* ==========================================
   SPARKLES GENERATOR
========================================== */

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 800);

/* ==========================================
   BUTTON GLOW EFFECT
========================================== */

const buttons =
    document.querySelectorAll(
        ".reason-btn,.finale-btn"
    );

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "scale(1)";

    });

});

/* ==========================================
   LOVE MESSAGE EFFECT
========================================== */

const finaleTitle =
    document.querySelector(".finale-title");

if (finaleTitle) {

    setInterval(() => {

        finaleTitle.style.opacity = ".8";

        setTimeout(() => {

            finaleTitle.style.opacity = "1";

        }, 500);

    }, 1500);

}
/* ==========================================
   FIREWORKS SYSTEM
========================================== */

const fireworksCanvas =
    document.getElementById("fireworksCanvas");

const fireworksBtn =
    document.getElementById("fireworksBtn");

if (fireworksCanvas) {

    const ctx =
        fireworksCanvas.getContext("2d");

    fireworksCanvas.width =
        window.innerWidth;

    fireworksCanvas.height =
        window.innerHeight;

    let particles = [];

    class FireworkParticle {

        constructor(x, y, color) {

            this.x = x;
            this.y = y;

            this.color = color;

            this.size =
                Math.random() * 4 + 2;

            this.speedX =
                (Math.random() - 0.5) * 8;

            this.speedY =
                (Math.random() - 0.5) * 8;

            this.life = 100;

        }

        update() {

            this.x += this.speedX;

            this.y += this.speedY;

            this.life--;

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = this.color;

            ctx.fill();

        }

    }

    function createFirework(x, y) {

        const colors = [
            "#ff5ca8",
            "#ff8fc3",
            "#ffd1e8",
            "#ffffff",
            "#ff9fcf"
        ];

        for (let i = 0; i < 80; i++) {

            particles.push(

                new FireworkParticle(
                    x,
                    y,
                    colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                    ]
                )

            );

        }

    }

    function animateFireworks() {

        ctx.clearRect(
            0,
            0,
            fireworksCanvas.width,
            fireworksCanvas.height
        );

        particles.forEach((particle, index) => {

            particle.update();

            particle.draw();

            if (particle.life <= 0) {

                particles.splice(index, 1);

            }

        });

        requestAnimationFrame(
            animateFireworks
        );

    }

    animateFireworks();

    if (fireworksBtn) {

        fireworksBtn.addEventListener("click", () => {

            for (let i = 0; i < 8; i++) {

                setTimeout(() => {

                    createFirework(

                        Math.random() *
                        fireworksCanvas.width,

                        Math.random() *
                        fireworksCanvas.height / 2

                    );

                }, i * 300);

            }

        });

    }

}

/* ==========================================
   PARTICLES BACKGROUND
========================================== */

const particlesCanvas =
    document.getElementById("particlesCanvas");

if (particlesCanvas) {

    const pctx =
        particlesCanvas.getContext("2d");

    particlesCanvas.width =
        window.innerWidth;

    particlesCanvas.height =
        window.innerHeight;

    let bgParticles = [];

    for (let i = 0; i < 80; i++) {

        bgParticles.push({

            x: Math.random() *
                particlesCanvas.width,

            y: Math.random() *
                particlesCanvas.height,

            size: Math.random() * 3 + 1,

            speed: Math.random() * 0.8 + 0.2

        });

    }

    function animateParticles() {

        pctx.clearRect(
            0,
            0,
            particlesCanvas.width,
            particlesCanvas.height
        );

        bgParticles.forEach(p => {

            p.y -= p.speed;

            if (p.y < 0) {

                p.y =
                    particlesCanvas.height;

            }

            pctx.beginPath();

            pctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );

            pctx.fillStyle =
                "rgba(255,255,255,.8)";

            pctx.fill();

        });

        requestAnimationFrame(
            animateParticles
        );

    }

    animateParticles();

}

/* ==========================================
   ROSE PETALS
========================================== */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top = "-50px";

    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";

    petal.style.zIndex = "99";

    petal.style.pointerEvents = "none";

    petal.style.transition =
        "8s linear";

    document.body.appendChild(
        petal
    );

    setTimeout(() => {

        petal.style.top = "110vh";

        petal.style.transform =
            `rotate(${Math.random() * 720}deg)`;

    }, 100);

    setTimeout(() => {

        petal.remove();

    }, 9000);

}

setInterval(
    createPetal,
    1500
);

/* ==========================================
   FINALE HEART EXPLOSION
========================================== */

function heartExplosion() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "2s ease-out";

        document.body.appendChild(
            heart
        );

        const x =
            (Math.random() - 0.5) * 800;

        const y =
            (Math.random() - 0.5) * 800;

        setTimeout(() => {

            heart.style.transform =
                `translate(${x}px,${y}px)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}

if (fireworksBtn) {

    fireworksBtn.addEventListener(
        "click",
        heartExplosion
    );

}

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener(
    "resize",
    () => {

        if (fireworksCanvas) {

            fireworksCanvas.width =
                window.innerWidth;

            fireworksCanvas.height =
                window.innerHeight;

        }

        if (particlesCanvas) {

            particlesCanvas.width =
                window.innerWidth;

            particlesCanvas.height =
                window.innerHeight;

        }

    }
);

/* ==========================================
   ANNIVERSARY CONSOLE MESSAGE
========================================== */

console.log(
    "%c❤️ Happy One Year Anniversary ❤️",
    "font-size:30px;color:#ff5ca8;font-weight:bold;"
);

console.log(
    "%cMade with love.",
    "font-size:18px;color:#ff7ab8;"
);
/* =========================================
password 
========================================== */

function checkPassword() {

    const correctPassword = "1215";
    const enteredPassword =
        document.getElementById("passwordInput").value;

    if (enteredPassword === correctPassword) {

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";

    } else {

        document.getElementById("error-message").innerText =
            "Wrong Password ❤️";

        document.getElementById("passwordInput").value = "";
    }
};

