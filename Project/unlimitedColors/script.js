// First we generate random color

const randomColor = function () {
  const hexVal = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexVal[Math.floor(Math.random() * 16)];
  }

  console.log(color);

  return color;
};


let intervelId;

const startChangeColor = function () {
  if (!intervelId) {
    intervelId = setInterval(colorChnage,2000);
  }
};

const colorChnage = function () {
  document.body.style.backgroundColor = randomColor();
};

const stopChnageColor = function () {
  clearInterval(intervelId);
  intervelId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);

document.querySelector("#stop").addEventListener("click", stopChnageColor);
