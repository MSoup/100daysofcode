// Add test dots

const dotContainer = document.querySelector(".imgIndicator");

const imgList = [];

// Test function

function generatePictures() {
  const images = [
    { id: 1, src: "./assets/image01.jpg", title: "foo", description: "bar" },
    { id: 2, src: "./assets/image02.jpg", title: "foo", description: "bar" },
    { id: 3, src: "./assets/image03.jpg", title: "foo", description: "bar" },
    { id: 4, src: "./assets/image04.jpg", title: "foo", description: "bar" },
    { id: 5, src: "./assets/image05.jpg", title: "foo", description: "bar" },
  ];
  // do stuff
}

function generateDots() {
  let newImg;
  for (let i = 0; i < 10; i++) {
    newImg = document.createElement("button");

    newImg.classList.add("dot");

    dotContainer.appendChild(newImg);
  }
}

// call the tests
generateDots();
