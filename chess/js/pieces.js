const wp = document.createElement("img");
wp.src = "images/wp.png";
wp.classList.add("piece");
wp.classList.add("wp");
wp.setAttribute("ondragstart", "drag(event)");

const wn = document.createElement("img");
wn.src = "images/wn.png";
wn.classList.add("piece");
wn.classList.add("wn");

const wb = document.createElement("img");
wb.src = "images/wb.png";
wb.classList.add("piece");
wb.classList.add("wb");

const wr = document.createElement("img");
wr.src = "images/wr.png";
wr.classList.add("piece");
wr.classList.add("wr");

const wq = document.createElement("img");
wq.src = "images/wq.png";
wq.classList.add("piece");
wq.classList.add("wq");

const wk = document.createElement("img");
wk.src = "images/wk.png";
wk.classList.add("piece");
wk.classList.add("wk");

const bp = document.createElement("img");
bp.src = "images/bp.png";
bp.classList.add("piece");
bp.classList.add("bp");

const bn = document.createElement("img");
bn.src = "images/bn.png";
bn.classList.add("piece");
bn.classList.add("bn");

const bb = document.createElement("img");
bb.src = "images/bb.png";
bb.classList.add("piece");
bb.classList.add("bb");

const br = document.createElement("img");
br.src = "images/br.png";
br.classList.add("piece");
br.classList.add("br");

const bq = document.createElement("img");
bq.src = "images/bq.png";
bq.classList.add("piece");
bq.classList.add("bq");

const bk = document.createElement("img");
bk.src = "images/bk.png";
bk.classList.add("piece");
bk.classList.add("bk");

function dragEnter(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.dataset.cell);
}

function drop(e) {
  e.preventDefault();
  e.target.appendChild(document.querySelector(".piece[data-cell=" + e.dataTransfer.getData("text") + "]"));
}
