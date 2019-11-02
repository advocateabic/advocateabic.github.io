var screenWidth = screen.width;
if(screen.width >= 414) {
  document.getElementById("copyrightTop").style.visibility="hidden";
  document.getElementById("copyrightTop").style.display="none";
  console.log("Hmmmmmmmmmmmmmmmmm");
} else {
  document.getElementById("copyrightBottom").style.visibility="hidden";
  document.getElementById("copyrightBottom").style.display="none";
}

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