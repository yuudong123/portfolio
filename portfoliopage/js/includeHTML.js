function includeHTML() {
  let z = document.getElementsByTagName("*");
  for (let i = 0; i < z.length; i++) {
    let elmnt = z[i];
    let file = elmnt.getAttribute("include-html");
    if (file) {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML += this.responseText;
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();
