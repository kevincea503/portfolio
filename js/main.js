let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 };

window.onscroll = () => {
    sections.forEach(element => {
        let top = window.scrollY;
        let offset = element.offsetTop-100;
        let height = element.offsetHeight;
        let id = element.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



function opentab(tabName){
    for(tabLink of tablinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

