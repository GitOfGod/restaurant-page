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

    //menu categories
    const menu__category__bread = document.createElement('div');
    menu__category__bread.classList.add('menu__category--title');
    menu__category__bread.textContent = "Bread";

    const menu__category__cakes = document.createElement('div');
    menu__category__cakes.classList.add('menu__category--title');
    menu__category__cakes.textContent = "Cakes"; 

    const menu__category__drinks = document.createElement('div');
    menu__category__drinks.classList.add('menu__category--title');
    menu__category__drinks.textContent = "Drinks";

    const menu__category__special = document.createElement('div');
    menu__category__special.classList.add('menu__category--title');
    menu__category__special.textContent = "Specials";

    menu__content.appendChild(menu__category__bread);
    menu__content.appendChild(menu__category__cakes);
    menu__content.appendChild(menu__category__drinks);
    menu__content.appendChild(menu__category__special);

    content.appendChild(menu__content);
    


}
)();