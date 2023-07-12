// const wp = document.createElement("img");
// wp.src = "images/wp.png";
// wp.classList.add("piece");
// wp.classList.add("wp");
// wp.setAttribute("ondragstart", "drag(event)");

const wp = `<img src="images/wp.png" class="piece wp" ondragstart="drag(event)">`;
const wn = `<img src="images/wn.png" class="piece wn" ondragstart="drag(event)">`;
const wb = `<img src="images/wb.png" class="piece wb" ondragstart="drag(event)">`;
const wr = `<img src="images/wr.png" class="piece wr" ondragstart="drag(event)">`;
const wq = `<img src="images/wq.png" class="piece wq" ondragstart="drag(event)">`;
const wk = `<img src="images/wk.png" class="piece wk" ondragstart="drag(event)">`;
const bp = `<img src="images/bp.png" class="piece bp" ondragstart="drag(event)">`;
const bn = `<img src="images/bn.png" class="piece bn" ondragstart="drag(event)">`;
const bb = `<img src="images/bb.png" class="piece bb" ondragstart="drag(event)">`;
const br = `<img src="images/br.png" class="piece br" ondragstart="drag(event)">`;
const bq = `<img src="images/bq.png" class="piece bq" ondragstart="drag(event)">`;
const bk = `<img src="images/bk.png" class="piece bk" ondragstart="drag(event)">`;

function dragEnter(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.dataset.cell);
}
function drop(e) {
  e.preventDefault();
  let piece = document.querySelector(".piece[data-cell=" + e.dataTransfer.getData("text") + "]");
  if (e.target.tagName == "DIV") {
    e.target.appendChild(piece);
  } else if (e.target.tagName == "IMG") {
    let cell = e.target.parentNode;
    cell.innerHTML = "";
    cell.appendChild(piece);
  }
}
