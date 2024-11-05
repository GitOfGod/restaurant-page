import "./styles.css";
import { homepage } from "./homepage";
import { menu } from "./menu";
import { contactPage } from "./contact";

function populateContent() {
    const homeBtn = document.querySelector('#navbar--main__home');
    const menuBtn = document.querySelector('#navbar--main__menu');
    const aboutBtn = document.querySelector('#navbar--main__about');
    const content = document.querySelector('#content');

    homepage();

    const removeContent = () => {
        content.textContent = '';
    };

    homeBtn.addEventListener( 'click', () => {
        removeContent();
        homepage();
    }
    );

    menuBtn.addEventListener('click', () => { 
        removeContent();
        menu();
    }
    );

    aboutBtn.addEventListener('click', () => {
        removeContent();
        contactPage();

    })



};

populateContent();