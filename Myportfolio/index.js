const text = "Welcome to my portfolio";
const element = document.getElementById("typed-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Typing speed
  }
}

window.onload = typeWriter;
