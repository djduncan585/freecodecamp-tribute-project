/* https://stackoverflow.com/questions/462537/overriding-important-style */
function addNewStyle(newStyle) {
  var styleElement = document.getElementById("styles_js");
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = "styles_js";
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }
  styleElement.appendChild(document.createTextNode(newStyle));
}

//Get height of image to determine where to relatively position h1 text
let imageElement = document.body.getElementsByTagName("img");
let jtPath = document.getElementsByClassName("jumbotron-text");
let cfPath = document.getElementsByClassName("container-fluid")[0];
let divPath = document.body.getElementsByClassName("jumbotron")[0];
let jtl = document.getElementsByClassName("jumbotron-text").length;
let height = imageElement[0].height;
let textPosition = height * -0.45;
let width = imageElement[0].width;
/* This is where the h1 text gets properly sized and positioned in relation to the jumbotron image width and height */
function sizeText() {
  addNewStyle(`.jumbotron-text{font-size: ${width * 0.1}px !important;
  padding: 0; border: 0; margin: 0;}`);
  for (let i = 0; i < jtl; i++) {
    jtPath[i].style.top = `${textPosition}px`;
  }
  divPath.style.height = `${height}px`;
}
sizeText();
