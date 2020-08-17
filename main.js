let pic = document.querySelector('.pic');
let counter = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let pics = ['url(1.jpg)', 'url(2.jpg)', 'url(3.jpg)', 'url(4.jpg)', 'url(5.jpg)', 'url(6.jpg)', 'url(7.jpg)', 'url(8.jpg)', 'url(9.jpg)', 'url(10.jpg)'];

function nextPic() {
    counter++;
    pic.style.backgroundImage = pics[counter];
    if (counter !== 0) {
        prev.style.display = 'inline-block';
    }
    if (counter === pics.length - 1) {
        next.style.display = 'none';
    }
}

function prevPic() {
    counter--;
    pic.style.backgroundImage = pics[counter];
    if (counter !== pics.length) {
        next.style.display = 'inline-block';
    }
    if (counter === 0) {
        prev.style.display = 'none';
    }
}

next.addEventListener('click', function(e) {
    e.preventDefault;
    pic.classList.remove("fade");
    void pic.offsetWidth;
    pic.classList.add("fade");
}, false);
next.addEventListener('click', nextPic);

prev.addEventListener('click', function(e) {
    e.preventDefault;
    pic.classList.remove("fade");
    void pic.offsetWidth;
    pic.classList.add("fade");
}, false);
prev.addEventListener('click', prevPic);



