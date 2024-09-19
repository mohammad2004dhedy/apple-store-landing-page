const mainImage = document.getElementById("mainImage");
const textNumber = document.getElementById("textNumber");
function Theme(src, color, shadow, text_color) {
  mainImage.src = src;
  document.body.style.backgroundColor = color;
  mainImage.style.filter = `drop-shadow(0 0 10px ${shadow})`;
  textNumber.style.color = text_color;
}
