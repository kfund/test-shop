var active = document.getElementById("burger");
// add Event Listener Click to Burger Icon Container
active.addEventListener("click", function() {
  //add or remove class "active" to Burger to start animation
  this.classList.toggle("active");
  //get menu-container by id
  var menuShow = document.getElementById("menu");
  //add or remove class "show" to show or hide menu and start its animations
  menuShow.classList.toggle("show");
});