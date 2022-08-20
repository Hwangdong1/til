const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
