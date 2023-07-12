onload = initialize("black");

function initialize(color) {
  board.innerHTML = "";
  if (color == "white") {
    board.style.flexWrap = "wrap-reverse";
    board.style.flexDirection = "row";
  } else if (color == "black") {
    board.style.flexWrap = "wrap";
    board.style.flexDirection = "row-reverse";
  }
  for (let r = 1; r <= 8; r++) {
    for (let f = "a"; f <= "h"; f = String.fromCharCode(f.charCodeAt(0) + 1)) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("r" + r);
      cell.dataset.cell = f + r;
      cell.setAttribute("ondrop", "drop(event)");
      cell.setAttribute("ondragover", "dragEnter(event)");
      new MutationObserver((mList, observer) => {
        for (let mutation of mList) {
          if (mutation.type === "childList") {
            let target = cell.querySelector(".piece");
            if (target != null) {
              target.dataset.cell = f + r;
            }
          }
        }
      }).observe(cell, { childList: true });
      board.appendChild(cell);
    }
  }
}

function start(color) {
  initialize(color);
  for (let f = "a"; f <= "h"; f = String.fromCharCode(f.charCodeAt(0) + 1)) {
    // let wp_temp = wp.cloneNode(true);
    // let bp_temp = bp.cloneNode(true);
    // document.querySelector("[data-cell=" + f + "2]").appendChild(wp_temp);
    // document.querySelector("[data-cell=" + f + "7]").appendChild(bp_temp);
    document.querySelector("[data-cell=" + f + "2]").innerHTML = wp;
    document.querySelector("[data-cell=" + f + "7]").innerHTML = bp;
  }
  document.querySelector("[data-cell=e1]").innerHTML = wk;
  document.querySelector("[data-cell=e8]").innerHTML = bk;

  document.querySelector("[data-cell=d1]").innerHTML = wq;
  document.querySelector("[data-cell=d8]").innerHTML = bq;

  document.querySelectorAll("[data-cell=c1], [data-cell=f1]").forEach((cell) => (cell.innerHTML = wb));
  document.querySelectorAll("[data-cell=c8], [data-cell=f8]").forEach((cell) => (cell.innerHTML = bb));

  document.querySelectorAll("[data-cell=b1], [data-cell=g1]").forEach((cell) => (cell.innerHTML = wn));
  document.querySelectorAll("[data-cell=b8], [data-cell=g8]").forEach((cell) => (cell.innerHTML = bn));

  document.querySelectorAll("[data-cell=a1], [data-cell=h1]").forEach((cell) => (cell.innerHTML = wr));
  document.querySelectorAll("[data-cell=a8], [data-cell=h8]").forEach((cell) => (cell.innerHTML = br));
}
