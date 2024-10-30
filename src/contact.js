import contactImage from './contact_us.jpg';
import { createAnElement } from "./createAnElement";


export const contactPage = ( function() {
    const content = document.querySelector('#content');

    const contact = createAnElement(content,'div', 'contact');
    const contact_content = createAnElement(contact, 'div', 'contact_content');
    const contactTitle = createAnElement(contact_content,'h3', 'contact__title', 'Contact Us');
    const contactMain = createAnElement(contact_content,'div','contactMain');
    const phoneAddress = createAnElement(contactMain,'div', 'phoneAddress');
    const phone = createAnElement(phoneAddress,'div', 'phone');
    const address = createAnElement(phoneAddress, 'div', 'address');
    const image = createAnElement(contactMain,'img');
    image.src = contactImage;
    
}

)();