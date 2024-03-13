// onclick of image the image is toggling.

let isBulbOn = false;

document.getElementById("bulbImage").addEventListener("click", toggleBulb);

function toggleBulb() {
  const bulbImage = document.getElementById("bulbImage");
  bulbImage.src = isBulbOn ? "bulb_off.png" : "bulb_on.png";
  isBulbOn = !isBulbOn;
}
