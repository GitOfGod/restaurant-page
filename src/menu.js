import { createAnElement } from "./createAnElement";

export const menu = ( function() {
    const content = document.querySelector('#content');
    const menu = createAnElement(content, 'div','menu');
    const menu__content = createAnElement(menu, 'div','menu__content');
    const menu__title = createAnElement(menu__content,'h2','menu__title', 'Menu');
    const menu__grid = createAnElement(menu__content,'div', 'menu__grid');

    //menu categories
    function createMenuCategory(category) {
        const categoryContainer = createAnElement(menu__grid,'div','menu_category');
        const categoryTitle = createAnElement(categoryContainer,'h3','menu__category--title', category);
        return categoryContainer;
    }

    function createMenuItem(category, title, description, price) {
        const menu_item = createAnElement(category,'div','menu__item');
        const item_title = createAnElement(menu_item,'h4','menu__item--title', title);
        const item_desc = createAnElement(menu_item,'p','menu__item--desc', description);
        const item_price = createAnElement(menu_item,'p','menu__item--price',price);
    }

    const bread_category = createMenuCategory("Bread");
    const cakes_category = createMenuCategory("Cakes");
    const drinks_category = createMenuCategory("Drinks");
    const special_category = createMenuCategory("Specials");

    createMenuItem(bread_category, 'White Loaf', 'Our bread is made from the finest flour', '£4.75');
    createMenuItem(bread_category, 'Tiger Loaf', 'Our bread is made from the finest flour', '£4.75');
    createMenuItem(bread_category, 'Brioche Loaf', 'Our bread is made from the finest flour', '£4.75');

    createMenuItem(cakes_category, 'Victoria Sponge', 'Our cakes are made from quality ingredients', '£12.99');
    createMenuItem(cakes_category, 'Chocolate Delight', 'Our cakes are made from quality ingredients', '£4.99');

    createMenuItem(drinks_category, 'Cappuccino', 'Our drinks are made from quality ingredients', '£2.99');
    createMenuItem(drinks_category, 'Americano', 'Our drinks are made from quality ingredients', '£2.99');
    
    createMenuItem(special_category, 'Ekima Special', 'Our drinks are made from quality ingredients', '£5.99');
}
);