function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundBody = document.querySelector('body');
const spanValue = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');
console.log(backgroundBody);
console.log(spanValue);
console.log(colorChangeBtn);

colorChangeBtn.addEventListener('click', () => {
  const generatorColor = getRandomHexColor();
  backgroundBody.style.backgroundColor = generatorColor;
  spanValue.textContent = generatorColor;
});
