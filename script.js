function createGrid(input) {
  const container = document.querySelector('.container');
  container.replaceChildren();
    for (let i = 1; i <= input; i++) {
      const column = document.createElement('div');
      column.className = 'column';
      for (let j = 1; j <= input; j++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        column.appendChild(pixel);
      }
      container.appendChild(column);
    }
}
function colorPixel() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', e => e.target.classList.add('color'));
  })
}

createGrid(16);
colorPixel();
const input = document.querySelector(".input");
const dimension = document.querySelector(".dimension");
input.value = 16;
dimension.textContent = `${input.value} x ${input.value}`
input.addEventListener("input", (event) => {
  createGrid(event.target.value);
  colorPixel();
  dimension.textContent = `${input.value} x ${input.value}`
});

const reset = document.querySelector("#reset");
reset.addEventListener('click', function() {
  createGrid(16);
  colorPixel();
  input.value = 16;
  dimension.textContent = `${input.value} x ${input.value}`
})

const erase = document.querySelector("#erase");
erase.addEventListener('click', function() {
  createGrid(input.value);
  colorPixel();
})

