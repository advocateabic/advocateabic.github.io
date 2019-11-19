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
  if(love.style.display == "none") {
    love.style.visibility = "visible";
    love.style.display = "block";
  } else {
    love.style.visibility = "hidden";
    love.style.display = "none";
  }
});