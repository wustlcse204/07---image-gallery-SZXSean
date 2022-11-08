var imgIndex = 0;
var magnifiedImg = 0;
var allImages = 0;
var lastImg = 0;
var firstImg = 0;

function magnify(img) {
    magnifiedImg = document.getElementById('magnified-img');
    imgIndex = parseInt(img.getAttribute("img-index"));
    magnifiedImg.src = img.src;
    document.getElementById("enlarged").style.display="inline-block";

 
    allImages = document.getElementsByClassName('image');
    lastImg = allImages[allImages.length - 1];
    firstImg = allImages[0];
    document.getElementById("nextImg").addEventListener("click", nextImg);
    document.getElementById("previousImg").addEventListener("click", previousImg);
}

function closeImg(close) {
    document.getElementById("enlarged").style.display = "none";
}

function previousImg() {
    imgIndex -= 1;
    if (imgIndex <= 0) {
        magnifiedImg.src = lastImg.src;
        imgIndex = allImages.length - 1;
    } else {
        magnifiedImg.src = allImages[imgIndex].src;
    }
}

function nextImg() {
    imgIndex += 1;
    if (imgIndex == allImages.length) {
        magnifiedImg.src = firstImg.src;
        imgIndex = 0;
    } else {
        magnifiedImg.src = allImages[imgIndex].src;
    }
}