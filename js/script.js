
let sections = document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {

        let top = window.scrolly;
        let offset = sec.offsetTop- 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');

            });
        }
    });
}






window.onscroll = () => {
    let header = document.querySelector('header');


    header.classList.toggle('sticky',window.scrollY >100);
}