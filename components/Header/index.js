// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const Headers = document.querySelector(".header-container");
function Header() {
  const newHeader = document.createElement("div");
  const newDate = document.createElement("span");
  const h1 = document.createElement("h1");
  const theTemp = document.createElement("span");

  newHeader.className = "header";
  newDate.className = "date";
  theTemp.className = "temp";

  newDate.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  theTemp.textContent = "98°";

  newHeader.appendChild(newDate);
  newHeader.appendChild(h1);
  newHeader.appendChild(theTemp);
  Headers.appendChild(newHeader);
}
Header();
