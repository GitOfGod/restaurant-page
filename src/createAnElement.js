export function createAnElement(parentElement, element, className, text) {
    const anElement = document.createElement(element);
    if(className) {
     anElement.classList.add(className);
    }
    if(text) {
     anElement.textContent = text;
    }
    if (parentElement) {
     parentElement.appendChild(anElement);
    }

    return anElement;
 }