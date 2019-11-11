window.addEventListener('load', () => {
    let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];

    const btn = document.querySelector('button');

    btn.addEventListener('click', showSlider);

    function showSlider() {
        const blockSlider = document.createElement('div');
        blockSlider.classList.add('slider');
        document.body.insertAdjacentElement('beforeend', blockSlider);
        for (var i = 0; i < images.length; i++) {
            blockSlider.innerHTML += `<img src="./images/${images[i]}">`;
        }
        $('.slider').slick();
        btn.style.display = 'none';
    }
});