const mobile_btn=document.querySelector(".mobile-nav-");

const nav_header=document.querySelector(".header1")



 const toggleNavbar= ()=>{
  nav_header.classList.toggle("active")
 }


mobile_btn.addEventListener("click",() => toggleNavbar());