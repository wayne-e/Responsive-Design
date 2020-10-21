const sections = [...document.querySelectorAll('section')];
const getLinkById = id => document.querySelector(`a[href='#${id}']`);
const barsIcon = document.getElementById("bars-icon")
const mainNavbar = document.getElementById("navbar");
const navLinks = document.getElementsByClassName("nav-link");
const productDiv = document.getElementById("product-div");
const productElement = document.getElementsByClassName("product-element");

const inView = section => {
    let top = section.offsetTop;
    let height = section.offsetHeight;
    while (section.offsetParent) {
        section = section.offsetParent;
        top += section.offsetTop;
    }
    return (
        top < (window.pageYOffset + window.innerHeight) &&
        (top + height) > window.pageYOffset
    );
};
window.onscroll = () => {
    let next = false;
    sections.forEach(section => {
        const a = getLinkById(section.id);
        if (inView(section) && !next) {
            a.classList.add('main-navbar--current');
            next = true;
        } else {
            a.classList.remove('main-navbar--current');
        }
    });
};

barsIcon.addEventListener("click", function () {
    mainNavbar.classList.toggle("display-bar");
});

for(i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click", function(){
        mainNavbar.classList.remove("display-bar");
    });
}

for(i=0;i<productElement.length;i++){
    productElement[i].addEventListener("click", function(){
        productDiv.classList.remove("display-none");
    });
}
