function createGrid(input) {
  const container = document.querySelector('.container');
  container.replaceChildren();
    for (let i = 1; i <= input; i++) {
      const row = document.createElement('div');
      row.className = 'row';
      for (let j = 1; j <= input; j++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        row.appendChild(pixel);
      }
      container.appendChild(row);
    }
}

const input = document.querySelector(".input");
input.addEventListener("input", (event) => {
  createGrid(event.target.value);
})
