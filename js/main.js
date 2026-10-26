//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrolltop>50){
        nav.classList.add("header.scrolled");
    }
    else{
        nav.classList.remove("header.scrolled");
    }
}

//navhide
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.foreach9(function(e){
    e.addEventlistener("click", function(){
        navCollapse.classList.remove("show");
    })

})