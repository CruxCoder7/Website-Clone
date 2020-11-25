const container = document.querySelector(".images");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

let counter = 0;


container.style.backgroundImage = `url(images/img-1.jpg)`;
container.style.backgroundSize = "cover";


function nextSlide() {
    container.animate([{opacity:'0.1'},{opacity:"1.0"}],{duration:1000,fill:"forwards"})
    if(counter === 3){
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url(images/img-${counter}.jpg)`

}

function prevSlide() {
    container.animate([{opacity:'0.1'},{opacity:"1.0"}],{duration:1000,fill:'forwards'})

    if(counter ===0){
        counter = 4;
    }
    
    counter--;

    container.style.backgroundImage =  `url(images/img-${counter}.jpg)`
}


document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Switch To Light Mode';
            
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Switch To Dark Mode';

        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)
    })
})

// button.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
//     localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
// });

// if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark');
// }