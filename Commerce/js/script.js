// инициализация jQuery плагина для оформления элементов форм
$('select').styler();

const navItems = document.querySelectorAll('.nav__menu-item'),
    threeDots = document.querySelector('.header__threedots'),
    menuMobile = document.querySelector('.menu__mobile'),
    closeMenu = document.querySelector('.spinner'),
    menuOneItems = document.querySelectorAll('.menu__one-item'),
    menuTwo = document.querySelector('.menu__two'),
    menuOne = document.querySelector('.menu__one'),
    arrowLeft = document.querySelector('.arrow-left');

// на каждый элемент с классом nav__menu-item навешиваем события мыши
navItems.forEach(elem => {
    // событие наведение курсора мыши на элемент
    elem.addEventListener('mouseenter', showSub, false);
    // событие снятие курсора с элемента
    elem.addEventListener('mouseleave', hideSub, false);
});

// событие клика на три точки
threeDots.addEventListener('click', e => {
    e.preventDefault();
    // при клике удаляет то убирае, то добавляет класс hide у меню
    menuMobile.classList.toggle('hide');
    // при открывании меню всегда вначале будет первое меню
    if (menuTwo.style.display == 'block') {
        menuTwo.style.display = 'none';
        menuOne.style.display = 'block';
    }
});

// при клике на крестик меню закрывается
closeMenu.addEventListener('click', () => {
    menuMobile.classList.add('hide');
});

// присваивает функцию-обработчик на каждый элемент первого меню
menuOneItems.forEach(elem => {
    elem.addEventListener('click', showMenuTwo, false);
});

arrowLeft.addEventListener('click', showMenuOne, false);

function showSub() {
    // если в элементе потомков > 1, то потомку с индексом 1 будет присвоено свойство CSS
    if (this.children.length > 1) {
        this.children[1].style.display = 'block';
    } else {
        return false;
    }
}

function hideSub() {
    // по аналогии
    if (this.children.length > 1) {
        this.children[1].style.display = 'none';
    } else {
        return false;
    }
}

// при клике на элементы певого меню скрывает первое меню и показывает второе меню
function showMenuTwo(e) {
    e.preventDefault();
    // при условии, что у пункту меню не присвоен id=arrow-none
    if ( this.getAttribute('id') != 'arrow-none') {
        menuOne.style.display = 'none';
        menuTwo.style.display = 'block';
    }
}

// при клике на стрелку влево скрывает второе меню и показывает первое меню
function showMenuOne(e) {
    e.preventDefault();
    menuOne.style.display = 'block';
    menuTwo.style.display = 'none';
}