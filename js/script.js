// window.onscroll = function() {
//   var currentScroll = window.pageYOffset;

  
// }


// Highlighting Active navbar on page-scroll
const sections = document.querySelectorAll("div[id].sect");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop && 
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".navbar-items a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-items a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}