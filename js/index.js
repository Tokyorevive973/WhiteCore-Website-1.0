const slides = [
{
title: "WhiteCore DEV",
desc: "Fejlesztői platform és dokumentáció.",
image: "../assets/whitecore-website-mount.png",
link: "dev.html"
},
{
title: "WhiteCore Terminal",
desc: "Terminál és szerverkezelés.",
image: "../assets/terminal.jpg",
link: "terminal.html"
},
{
title: "Downloads",
desc: "Kliensek és fájlok letöltése.",
image: "../assets/downloads.jpg",
link: "downloads.html"
}
];
let current = 0;

function updateSlide() {
document.getElementById("slide-title").textContent = slides[current].title;
document.getElementById("slide-desc").textContent = slides[current].desc;
document.getElementById("slide-image").src = slides[current].image;
document.getElementById("slide-link").href = slides[current].link;
}

function nextSlide() {
current++;
if (current >= slides.length) current = 0;
updateSlide();
}

function prevSlide() {
current--;
if (current < 0) current = slides.length - 1;
updateSlide();
}

updateSlide(); // 🔥 EZ A LÉNYEG