const mobile_btn=document.querySelector(".mobile-nav-");

const nav_header=document.querySelector(".header1")



 const toggleNavbar= ()=>{
  nav_header.classList.toggle("active")
 }


mobile_btn.addEventListener("click",() => toggleNavbar());



function checkDevice() {
    if (window.innerWidth < 1040) {
        document.body.style.display = 'none';
        document.getElementById('mobileMessage').style.display = 'block';
    } else {
        document.body.style.display = 'block';
        document.getElementById('mobileMessage').style.display = 'none';
    }
}
window.onload = checkDevice;
window.onresize = checkDevice;
