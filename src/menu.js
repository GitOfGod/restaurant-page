export const menu = ( function() {
    const content = document.querySelector('#content');
    const menu__content = document.createElement('div');
    const menu__title = document.createElement('h1');
    const menu__grid = document.createElement('div');

    menu__content.classList.add('menu__content');
    menu__title.classList.add('menu__tile');
    menu__grid.classList.add('menu__grid');

    menu__title.textContent = "Menu";

    menu__content.appendChild(menu__title);
    menu__content.appendChild(menu__grid);
    content.appendChild(menu__content);
    


}
)();