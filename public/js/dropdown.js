
/* LOGIN */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown_1() {
document.getElementById("myDropdown_1").classList.toggle("show");
console.log("sucess")
}

/* This drop-down function is for Admin to switch between Log Out and Dashboard*/
function dropdown_2() {
  document.getElementById("myDropdown_2").classList.toggle("show");
  console.log("sucess")
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.home-navlink5')) {
 var dropdowns = document.getElementsByClassName("dropdown-content_1");
 var i;
 for (i = 0; i < dropdowns.length; i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
     openDropdown.classList.remove('show');
   }
 }
}
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.home-navlink5_1')) {
   var dropdowns = document.getElementsByClassName("dropdown-content_2");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
  }
  }

/* PAY OVERDUE */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function paymentFunction() {
  document.getElementById("paymentChoice").classList.toggle("show");
  borrowid = document.querySelector('input[name="id"]:checked').value;
  document.getElementById("help").href="/payCash/" + borrowid + ""; 
  document.getElementById("why").href="/payOnline/" + borrowid + ""; 
  
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.bookcart-view-all-button')) {
   var dropdowns = document.getElementsByClassName("dropdown-content-1");
   
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
  }
  }
