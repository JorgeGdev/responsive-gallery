
var container = document.querySelector('.container__images');
var containerWidth = container.offsetWidth;
var closedWidth = Math.floor(containerWidth / 10); // Ancho inicial de cada 'box'


var imgs = [
    'https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-milford-sound.jpg',
    'https://cdn.pixabay.com/photo/2014/12/29/18/45/new-zealand-583177_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/22/16/19/maori-stone-2089835_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/26/19/51/geyser-7879016_1280.jpg ',
    'https://c4.wallpaperflare.com/wallpaper/386/494/440/ocean-new-zealand-maori-cape-reinga-wallpaper-preview.jpg',
    'https://c0.wallpaperflare.com/preview/457/351/720/new-zealand-maori-bay-sea-ocean.jpg',
    'https://cdn.pixabay.com/photo/2016/09/10/14/01/new-zealand-1659147_1280.jpg',
    'https://backiee.com/static/wpdb/wallpapers/1000x563/199437.jpg',
    'https://c4.wallpaperflare.com/wallpaper/118/85/182/orange-long-fur-cat-on-focus-photo-wallpaper-preview.jpg'
],
    n = imgs.length,
    current = n - 1
for (var i = 0; i < n; i++) {
    var bgImg = document.createElement('div');
    bg.appendChild(bgImg);



    gsap.set(bgImg, {
        attr: { id: 'bgImg' + i, class: 'bgImg' },
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + imgs[i] + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });

    var b = document.createElement('div');
    fg.appendChild(b);

    gsap.fromTo(b, {
        attr: { id: 'b' + i, class: 'box' },
        innerHTML: '<p><sub>New Zealand</sub> ' + (i + 1) + '</p>',
        width: '100%',
        height: '100%',
        borderLeft: (i > 0) ? 'solid 1px #eee' : '',
        backgroundColor: 'rgba(250,250,250,0)',
        left: i * closedWidth,
        transformOrigin: '100% 100%',
        x: '100%'
    }, {
        duration: i * 0.15,
        x: 0,
        ease: 'expo.inOut'
    });

    b.onmouseenter = b.onclick = (e) => {
        var clickedIndex = Number(e.currentTarget.id.substr(1));
        if (clickedIndex == current) return;

        var staggerOrder = !!(current < clickedIndex);
        current = clickedIndex;

        gsap.to('.box', {
            duration: 0.5,
            ease: 'elastic.out(0.3)',
            left: (i) => (i <= current) ? i * closedWidth : containerWidth - ((n - i) * closedWidth),
            x: 0,
            stagger: staggerOrder ? 0.05 : -0.05
        });

        var newBgImg = document.getElementById('bgImg' + current);
        bg.appendChild(newBgImg);
        gsap.fromTo(newBgImg, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.inOut' });
        gsap.fromTo(newBgImg, { scale: 1.05, rotation: 0.05 }, { scale: 1, rotation: 0, duration: 1.5, ease: 'sine' });
    };
}
window.onresize = () => {
    containerWidth = container.offsetWidth;
    closedWidth = Math.floor(containerWidth / 10);

    gsap.to('.box', {
        duration: 0.5,
        ease: 'elastic.out(0.3)',
        left: (i) => (i <= current) ? i * closedWidth : containerWidth - ((n - i) * closedWidth),
        x: 0,
        stagger: true ? 0.05 : -0.05
    });
};



var animateButton = function (e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}