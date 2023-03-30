function showLoader() {
  DOM.loader.innerHTML = "";
  DOM.contents.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border" ,"loader2");
  DOM.loader.append(loader);
}
function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}
