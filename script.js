const sections = [...document.querySelectorAll('section')];
const getLinkById = id => document.querySelector(`a[href='#${id}']`);

const inView = section => {
    let top = section.offsetTop;
    let height = section.offsetHeight;
    while (section.offsetParent) {
        section = section.offsetParent;
        top += section.offsetTop;
    }
    return(
        top<(window.pageYOffset+window.innerHeight)&&
        (top+height)>window.pageYOffset
    );
};
window.onscroll = ()=>{
    let next =false;
    sections.forEach(section => {
        const a = getLinkById(section.id);
        if(inView(section)&& !next){
            a.classList.add('main-navbar--current');
            next=true;
        }else{
            a.classList.remove('main-navbar--current');
        }
    });
};