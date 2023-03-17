
const body = document.querySelector("body");
const colors = document.querySelector(".color");

const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  colors.innerHTML = `<p>${rgb}</p>`;
  body.style.background = `${rgb}`;
};

setInterval(randomColor, 4000);

