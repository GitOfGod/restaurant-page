export const pageLoad = ( function() {
    const content = document.querySelector("#content");
    const main = document.createElement("div");
    main.classList.add("main");

    const h1 = document.createElement("h1")
    h1.textContent = "Baked Haven";

    const p = document.createElement("p");
    p.classList.add("main--headline");
    p.textContent = "A place you can have a healthy relationship with Food";

    main.appendChild(h1);
    main.appendChild(p);
    content.appendChild(main);

}

)();