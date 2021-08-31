let menuBtn = document.getElementById("menuBtn");
function showMenu(){
  document.getElementsByClassName("menu")[0].style.right = '0PX';
  document.getElementsByClassName("menu")[0].style.display = "block";
}

function hideMenu(){
   document.getElementsByClassName("menu")[0].style.display = "none";
}