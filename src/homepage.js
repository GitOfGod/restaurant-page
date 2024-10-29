import { createAnElement } from "./createAnElement";

export const homepage = ( function() {
    const content = document.querySelector("#content");
    const main = createAnElement(content, 'div', 'main');
    const h1 = createAnElement(main, "h1", null, "Baked Haven");
    const p = createAnElement(main, "p", "main--headline", "A place you can have a healthy relationship with Food");
}

)();