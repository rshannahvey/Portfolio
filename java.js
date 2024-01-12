var menu = document.querySelectorAll(".menu");
var proj1 = document.querySelector(".proj1");

var proj2 = document.querySelector(".proj2");

var s1 = document.querySelector(".s1");

var s2 = document.querySelector(".s2");

menu.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        proj1.style.transition = "opacity 2s ease-in-out";
        proj1.style.opacity = "1";
    });
});


var lastScrollTop = 0;

document.addEventListener("scroll", function() {
    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        proj1.style.transition = "opacity 2s ease-in-out";
        proj1.style.opacity = "1";
    } else {
        proj1.style.transition = "opacity 2s ease-in-out";
        proj1.style.opacity = "0";
    }
    lastScrollTop = currentScrollTop;
});


var lastTop = 0;

document.addEventListener("scroll", function() {
    var currentTop = window.scrollY || document.documentElement.scrollTop;

    if (currentTop > lastTop) {
        proj2.style.transition = "opacity 2s ease-in-out";
        proj2.style.opacity = "1";
    } else {
        proj2.style.transition = "opacity 2s ease-in-out";
        proj2.style.opacity = "0";
    }
    lastTop = currentTop;
});

var lastTop1 = 0;

document.addEventListener("scroll", function() {
    var currentTop1 = window.scrollY || document.documentElement.scrollTop;

    if (currentTop1 > lastTop1) {
        s1.style.transition = "opacity 2s ease-in-out";
        s1.style.opacity = "1";
    } else {
        s1.style.transition = "opacity 2s ease-in-out";
        s1.style.opacity = "0";
    }
    lastTop1 = currentTop1;
});

var lastTop2 = 0;

document.addEventListener("scroll", function() {
    var currentTop2 = window.scrollY || document.documentElement.scrollTop;

    if (currentTop2 > lastTop2) {
        s2.style.transition = "opacity 3s ease-in-out";
        s2.style.opacity = "1";
    } else {
        s2.style.transition = "opacity 3s ease-in-out";
        s2.style.opacity = "0";
    }
    lastTop2 = currentTop2;
});
