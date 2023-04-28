console.log(`hi from AlexEG  2023-4-28`);

const nextBtn = document.querySelector("button#next-btn");
const backBtn = document.querySelector("button#back-btn");
const image = document.querySelector("img#image");
const downloadBtn = document.querySelector("a#download-img-btn");

const imgsDate = [
  ["img1", "2023-4-28"],
  ["img2", "2023-1-5"],
  ["img3", "2023-2-12"],
  ["img4", "2022-12-4"],
  ["img5", "2022-10-7"],
  ["img6", "2022-9-18"],
];
const imagesMaxNumber = imgsDate.length;
let imageNumber = 1;

nextBtn.addEventListener("click", () => {
  if (imageNumber < imagesMaxNumber) {
    imageNumber++;
    image.setAttribute("src", `./src/images/img${imageNumber}.jpg`);
    downloadBtn.href = `./src/images/img${imageNumber}.jpg`;
    spanImgCurrentNum.textContent = imageNumber;
    imgDateTime.textContent = imgsDate[imageNumber - 1][1];
  }

  if (imageNumber === imagesMaxNumber) {
    nextBtn.classList.add("invisible");
  }

  if (imageNumber > 1 && backBtn.classList.contains("invisible")) {
    backBtn.classList.remove("invisible");
  }

  console.log(` img-${imageNumber}`);
});

backBtn.addEventListener("click", () => {
  if (imageNumber > 1) {
    imageNumber--;
    image.setAttribute("src", `./src/images/img${imageNumber}.jpg`);
    downloadBtn.href = `./src/images/img${imageNumber}.jpg`;
    spanImgCurrentNum.textContent = imageNumber;
    imgDateTime.textContent = imgsDate[imageNumber - 1][1];
  }

  if (imageNumber === 1) {
    backBtn.classList.add("invisible");
  }

  if (
    imageNumber < imagesMaxNumber &&
    nextBtn.classList.contains("invisible")
  ) {
    nextBtn.classList.remove("invisible");
  }

  console.log(` img-${imageNumber}`);
});

if (imageNumber === 1) {
  backBtn.classList.add("invisible");
}

// -------------------------- //
// * HEADER *//
const spanImgsMaxNum = document.querySelector(
  "header > span > span#max-img-num"
);
const spanImgCurrentNum = document.querySelector(
  "header > span > span#current-img-num"
);
const imgDateTime = document.querySelector("header > time#img-date");

spanImgsMaxNum.textContent = imagesMaxNumber;
spanImgCurrentNum.textContent = imageNumber;

imgDateTime.textContent = imgsDate[0][1];

// -------------------------- //
// * PASSWORD *//

document.querySelector("#password-btn").addEventListener("click", () => {
  if (
    document.querySelector(
      "body > div.mt-12.flex.flex-col.items-center > input"
    ).value === "123456789"
  ) {
    document.querySelector("#root").classList.remove("hidden");
    document.querySelector("div#password-container").innerHTML = "";
    document.querySelector("div#password-container").classList.add("hidden");

    console.log("password is correct");
  } else {
    document.querySelector("#password-btn").classList.remove("bg-fuchsia-700");
    document.querySelector("#password-btn").classList.add("bg-red-700");
    document
      .querySelector("body > div.mt-12.flex.flex-col.items-center > input")
      .classList.remove("outline-fuchsia-700");
    document
      .querySelector("body > div.mt-12.flex.flex-col.items-center > input")
      .classList.add("outline-red-700");
    console.log("password incorrect");
  }
});
