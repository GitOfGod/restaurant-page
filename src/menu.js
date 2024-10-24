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
    const bread_category = document.createElement('div');
    bread_category.classList.add('menu__category');
    const bread_title = document.createElement('h3');
    bread_title.textContent = "Bread";
    bread_category.appendChild(bread_title)

    const cakes_category = document.createElement('div');
    cakes_category.classList.add('menu__category');
    const cakes_title = document.createElement('h3');
    cakes_title.textContent = "Cakes";
    cakes_category.appendChild(cakes_title);

    const drinks_category = document.createElement('div');
    drinks_category.classList.add('menu__category');
    const drinks_title = document.createElement('h3');
    drinks_title.textContent = "Drinks";
    drinks_category.appendChild(drinks_title);

    const special_category = document.createElement('div');
    special_category.classList.add('menu__category');
    const special_title = document.createElement('h3');
    special_title.textContent = "Specials";
    special_category.appendChild(special_title);

    menu__content.appendChild(bread_category);
    menu__content.appendChild(cakes_category);
    menu__content.appendChild(drinks_category);
    menu__content.appendChild(special_category);

    content.appendChild(menu__content);
    


}
)();