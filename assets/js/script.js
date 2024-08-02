// Toggle Class in Body


// THEME__CHANGES
function myFunction() {
   var element = document.getElementById("after-login");
   element.classList.toggle("light-theme");
}

// SIDEBAR

function sideBar() {
  var element = document.getElementById("sideBar");
  element.classList.toggle("sidebaropen");
}

// function sideBar() {

//   var myButtonClasses = document.getElementById("sidebar").classList;
 
 
//   if (myButtonClasses.contains("sidebaropen")) {
 
//      myButtonClasses.remove("sidebaropen");
 
//   } else {
 
//      myButtonClasses.add("sidebaropen");
 
//   }
 
//   if (myButtonClasses.contains("sidebarclose")) {
 
//      myButtonClasses.remove("sidebarclose");
 
//   } else {
 
//      myButtonClasses.add("sidebarclose");
 
//   }
 
//  }
 


// header SCROLL

let scrollpos = window.scrollY
const header = document.getElementById("sticky-head")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("header-bg")
const remove_class_on_scroll = () => header.classList.remove("header-bg")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})