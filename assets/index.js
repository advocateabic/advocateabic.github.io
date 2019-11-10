function togglediv() {
  var div = document.getElementById("heart");
  if(div.style.display == "none") {
    div.style.visibility = "visible";
    div.style.display = "block";
  } else {
    div.style.visibility = "hidden";
    div.style.display = "none";
  }
}