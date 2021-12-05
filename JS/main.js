let aside = document.querySelector('aside');
let bar = document.querySelector('.fa-bars');
let content = document.querySelector('.content');

bar.onclick = function () {
    aside.classList.toggle('active');
    if (aside.classList.contains('active')) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
}

// Progress bar
let nums = document.querySelectorAll('.num');

window.onload = function () {
    nums.forEach((num) => {
        num.style.width = num.dataset.width;
    });
}

// Counting Numbers
let counts = document.querySelectorAll('.count');

counts.forEach((count) => {
    counting(count);
});

function counting(ele) {
    let value = ele.dataset.count;
    let startCounting = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == value) {
            clearInterval(startCounting);
        }
    }, value / 2000);
}

// switch to Black or Light
let body = document.body;
let nav = document.querySelector('nav');
let aside_bg = document.querySelector('aside');
let logo = document.querySelector('.logo img');
let bell = document.querySelector('.fa-bell');
let moon = document.querySelector('.fa-moon');
let search = document.querySelector('.fa-search');
let input = document.querySelector('.input input');
let tachometer = document.querySelector('aside .fa-tachometer-alt');
let accusoft = document.querySelector('aside .fa-accusoft');
let tasks = document.querySelector('aside .fa-tasks');
let spinner = document.querySelector('aside .fa-spinner');
let circle = document.querySelector('aside .fa-check-circle');
let bug = document.querySelector('aside .fa-bug');
let line = document.querySelector('aside .fa-chart-line');
let open = document.querySelector('aside .fa-book-open');
let adjust = document.querySelector('aside .fa-adjust');
let algolia = document.querySelector('aside .fa-algolia');
let description = document.querySelector('aside .fa-audio-description');
let span = document.querySelectorAll('aside span');
let content_bg = document.querySelector('.content');
let shadow = document.querySelectorAll('.row .box');
let card = document.querySelector('.card');
let progress = document.querySelector('.progress');
let cardHeader = document.querySelector('.card-header i');

moon.onclick = function () {
    nav.classList.toggle('change');
    aside_bg.classList.toggle('change');
    bell.classList.toggle('change');
    moon.classList.toggle('change');
    bar.classList.toggle('change');
    search.classList.toggle('change');
    input.classList.toggle('change');
    tachometer.classList.toggle('change');
    accusoft.classList.toggle('change');
    tasks.classList.toggle('change');
    spinner.classList.toggle('change');
    circle.classList.toggle('change');
    bug.classList.toggle('change');
    open.classList.toggle('change');
    line.classList.toggle('change');
    adjust.classList.toggle('change');
    algolia.classList.toggle('change');
    description.classList.toggle('change');
    span[0].classList.toggle('change');
    span[1].classList.toggle('change');
    span[2].classList.toggle('change');
    span[3].classList.toggle('change');
    span[4].classList.toggle('change');
    span[5].classList.toggle('change');
    span[6].classList.toggle('change');
    span[7].classList.toggle('change');
    span[8].classList.toggle('change');
    span[9].classList.toggle('change');
    span[10].classList.toggle('change');
    content_bg.classList.toggle('change');
    card.classList.toggle('change');
    shadow[0].classList.toggle('change');
    shadow[1].classList.toggle('change');
    shadow[2].classList.toggle('change');
    shadow[3].classList.toggle('change');
    progress.classList.toggle('change');
    cardHeader.classList.toggle('change');

    if (nav.classList.contains('change')) {
        logo.src = 'img/AT-pro-white.png';
    } else {
        logo.src = 'img/AT-pro-black.png';
    }
}