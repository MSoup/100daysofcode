// Add test dots

const dotContainer = document.querySelector(".position-container");

const dotList = [];

// Test function

function test() {
  let newImg;
  for (let i = 0; i < 10; i++) {
    newImg = document.createElement("button");
    if (i == 0) {
      newImg.className = "first-dot";
    } else if (i == 9) {
      newImg.className = "last-dot";
    }
    newImg.classList.add("dot");

    dotContainer.appendChild(newImg);
  }
}

test();
