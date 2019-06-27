var screenWidth = screen.width;
if(screen.width >= 414) {
  document.getElementsById("copyrightTop").style.visibility="hidden";
  document.getElementsById("copyrightTop").style.display="none";
} else {
  document.getElementsById("copyrightBottom").style.visibility="hidden";
  document.getElementsById("copyrightBottom").style.display="none";
}