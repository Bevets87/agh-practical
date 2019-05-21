const imgDiv = document.getElementById('img');
const imgDivButton = document.getElementById('img__button');
const loadingElement = document.createElement('div');
const titleElement = document.createElement('h1');
const imgElement = document.createElement('img');
const buttonsDiv = document.createElement('div');
const prevButtonElement = document.createElement('button');
const nextButtonElement = document.createElement('button');
loadingElement.id = "loading-spinner";
loadingElement.textContent = "Loading...";
prevButtonElement.addEventListener('click', onPrevious);
prevButtonElement.textContent = "Previous";
nextButtonElement.textContent = "Next";
nextButtonElement.addEventListener('click', onNext);
buttonsDiv.appendChild(prevButtonElement);
buttonsDiv.appendChild(nextButtonElement);


const defaultError = "Sorry cannot get images...";
const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&page=1&api_key=e6qeMVwVAobScq3QGBBCsWdk4haOxrTmcBfB3RPI";

let images = [];
let imageIndex = 0;
let currentImage = {};


function getImages() {
  removeButton();
  displayLoading();

  return fetch(API_URL)
    .then(response => response.json())
    .then(json => {
      images = json['photos'].map(i => ({ id: i.id, src: i.img_src, date: i.earth_date }));
      currentImage = images[0];

      removeLoading();
      displayCtrlButtons();
      displayTitle(createPhotoTitle(imageIndex));
      displayImage();
    })
    .catch((error) => {

      removeLoading();
      displayTitle(error ? error.message ? error.message : defaultError : defaultError);
    });

}
function onNext() {

  if (imageIndex < images.length - 1) {
    delete currentImage;
    currentImage = images[++imageIndex];
    removeTitle();
    displayTitle(createPhotoTitle(imageIndex));
    removeImage();
    displayImage();

  }



}

function onPrevious() {

  if (imageIndex > 0) {
    delete currentImage;
    currentImage = images[--imageIndex];
    removeTitle();
    displayTitle(createPhotoTitle(imageIndex));
    removeImage();
    displayImage();
  }

}

function createPhotoTitle(imageIndex) {
  return 'PHOTO[' + (imageIndex + 1).toString() + ']';
}

function displayLoading() {
  imgDiv.append(loadingElement);
}

function removeLoading() {
  imgDiv.removeChild(loadingElement);
}


function displayTitle(message) {
  titleElement.innerText = message;
  imgDiv.appendChild(titleElement);
}

function removeTitle() {
  imgDiv.removeChild(titleElement);
}


function displayImage() {
  imgElement.src = currentImage.src;
  imgDiv.appendChild(imgElement);
}

function removeImage() {
  imgDiv.removeChild(imgElement);
}

function removeButton() {
  imgDiv.removeChild(imgDivButton);
}

function displayCtrlButtons() {
  imgDiv.appendChild(buttonsDiv);
}



