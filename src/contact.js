import contactImage from './contact_us.jpg';
import { createAnElement } from "./createAnElement";


export const contactPage = ( function() {
    const content = document.querySelector('#content');

    const contact = createAnElement(content,'div', 'contact');
    const contact_content = createAnElement(contact, 'div', 'contact_content');
    const contactTitle = createAnElement(contact_content,'h3', 'contact__title', 'Contact Us');
    const contactMain = createAnElement(contact_content,'div','contact__main');
    const phoneAddress = createAnElement(contactMain,'div', 'phoneAddress');
    const phone = createAnElement(phoneAddress,'div', 'phone');
    const address = createAnElement(phoneAddress, 'div', 'address');
    const imageContainer = createAnElement(contactMain, 'div', 'imageContainer');
    const image = createAnElement(imageContainer,'img', 'contactImg');
    image.src = contactImage;
    
}

)();