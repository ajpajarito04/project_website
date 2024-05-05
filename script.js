let menu = document.querySelector('.navbar a');
let submenu = document.querySelector('.submenu');
let submenuItems = document.querySelectorAll('.submenu a');

let submenuVisible = false;

menu.addEventListener('click', function(event) {
    event.preventDefault();
    if (!submenuVisible) {
        submenu.style.opacity = '0'; 
        submenu.style.display = 'block';
        setTimeout(() => {
            submenu.style.opacity = '1'; 
        }, 50); 
        submenuVisible = true;
    } else {
        submenu.style.opacity = '0'; 
        setTimeout(() => {
            submenu.style.display = 'none'; 
        }, 300); 
        submenuVisible = false;
    }
});

submenuItems.forEach(item => {
    item.addEventListener('click', function() {
        submenu.style.display = 'none';
        submenuVisible = false;
    });
});

// JavaScript code for handling slider behavior
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};
