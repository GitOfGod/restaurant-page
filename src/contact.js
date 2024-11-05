import contactImage from './contact_us.jpg';
import mapImage from './generic-city-map.jpg';
import { createAnElement } from "./createAnElement";


export const contactPage = ( function() {
    const content = document.querySelector('#content');
    const contact = createAnElement(content,'div', 'contact');
    const contact_content = createAnElement(contact, 'div', 'contact_content');
    const contactTitle = createAnElement(contact_content,'h3', 'contact__title', 'Contact Us');
    const contactMain = createAnElement(contact_content,'div','contact__main');

    const phoneAddress = createAnElement(contactMain,'div', 'phoneAddress');
    const phone = createAnElement(phoneAddress,'div', 'phone');
    const phoneTitle = createAnElement(phone, 'h4', 'phone__title', 'Phone Number');
    const phoneNumber = createAnElement(phone, 'p', 'phone__number', '020 1234 5678');

    const address = createAnElement(phoneAddress, 'div', 'address');
    const addressTitle = createAnElement(address, 'h4', 'address__title', 'Address');
    const addressContent = createAnElement(address, 'p', 'address__content', '1 Anywhere Street, Anycity, London');

    const imageContainer = createAnElement(contactMain, 'div', 'imageContainer');
    const image = createAnElement(imageContainer,'img', 'contactImg');
    image.src = contactImage;

    const map = createAnElement(address, 'img', 'mapImg',)
    map.src = mapImage;
    
}

)();