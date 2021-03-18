// Add test dots

const dotContainer = document.querySelector(".imgIndicator");
const display = document.querySelector(".displayWrapper");

// holds DOM elements
const imgList = [];

// just for testing, loads imgList with test pictures
function generatePictures() {
  const images = [
    {
     id: 0, 
     src: "https://css-tricks.com/wp-content/uploads/2013/11/a-blue-box.png", 
     title:"test image", 
     description: "this is a description",
    },
        {
     id: 1, 
     src: "https://jooinn.com/images/red-box-1.jpg", 
     title:"test image", 
     description: "this is a description",
    },
  ];
  
  let domImg;
  images.forEach((image) => 
                {
    domImg = document.createElement("img");
    domImg.setAttribute("id", image.id);
    domImg.setAttribute("src", image.src);
    domImg.setAttribute("title", image.title);       
    domImg.setAttribute("description", image.description);
    imgList.push(domImg);
    display.appendChild(domImg);
  });
} 

// generates a dot for each picture
function generateDots() {
  let newImg;
  for (let i = 0; i < imgList.length; i++) {
    newImg = document.createElement("button");

    newImg.classList.add("dot");
    newImg.classList.add("index-" + i);

    dotContainer.appendChild(newImg);
  }
}

// call the tests
generatePictures()
generateDots();

console.log(imgList);

var curPicIndex = -1;

function advancePicture() {
    ++curPicIndex;
    if (curPicIndex >= imgList.length) {
        curPicIndex = 0;
    }
    setPicture(imgList[curPicIndex]); 
}

function setPicture(pic) {
    imgList.forEach((image) => image.classList.remove("set"));
    pic.classList.add("set");
}

var intervalID = setInterval(advancePicture, 5000);


