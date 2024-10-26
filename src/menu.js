export const menu = ( function() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    const menu__content = document.createElement('div');
    const menu__title = document.createElement('h2');
    const menu__grid = document.createElement('div');

    menu.className = 'menu';
    menu__content.classList.add('menu__content');
    menu__title.classList.add('menu__tile');
    menu__grid.classList.add('menu__grid');

    menu__title.textContent = "Menu";

    menu__content.appendChild(menu__title);
    menu__content.appendChild(menu__grid);

    //menu categories
    function createMenuCategory(category) {
        const categoryContainer= document.createElement('div');
        categoryContainer.classList.add('menu_category');
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle);
        menu__content.appendChild(categoryContainer);
        return categoryContainer;

    }

    const bread_category = createMenuCategory("Bread");
    const cakes_category = createMenuCategory("Cakes");
    const drinks_category = createMenuCategory("Drinks");
    const special_category = createMenuCategory("Specials");

    menu.appendChild(menu__content);
    content.appendChild(menu);


}
)();