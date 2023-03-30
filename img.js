function getImg(src) {
  const img = document.createElement("img");
  img.height = 330;
  img.width = 230;
  img.src = src;
  img.classList.add("movieImg")
  return img;
}
