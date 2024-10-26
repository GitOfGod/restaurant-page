export const menu = ( function() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    const menu__content = document.createElement('div');
    const menu__title = document.createElement('h2');
    const menu__grid = document.createElement('div');

    menu.className = 'menu';
    menu__content.classList.add('menu__content');
    menu__title.classList.add('menu__title');
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

    function createMenuItem(category, title, description, price) {
        const menu_item = document.createElement('div');
        const item_title = document.createElement('h4');
        const item_desc = document.createElement('p');
        const item_price = document.createElement('p');
        menu_item.classList.add('menu__item');
        item_title.classList.add('menu__item--title');
        item_desc.classList.add('menu__item--desc');
        item_price.classList.add('menu__item--price');
        item_title.textContent = title;
        item_desc.textContent = description;
        item_price.textContent = price;
        menu_item.appendChild(item_title);
        menu_item.appendChild(item_desc);
        menu_item.appendChild(item_price);
        category.appendChild(menu_item);
    }

    


    menu.appendChild(menu__content);
    content.appendChild(menu);


}
)();