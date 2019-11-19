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
document.getElementById("toggle-heart").addEventListener('click', function() {
  var love = document.getElementById("text");
  var fireWorks = document.getElementById("pyro");
  if(love.style.display == "none") {
    love.style.visibility = "visible";
    love.style.display = "block";
    fireWorks.style.visibility = "visible";
    fireWorks.style.display = "block";
  } else {
    love.style.visibility = "hidden";
    love.style.display = "none";
    fireWorks.style.visibility = "hidden";
    fireWorks.style.display = "none";
  }
});