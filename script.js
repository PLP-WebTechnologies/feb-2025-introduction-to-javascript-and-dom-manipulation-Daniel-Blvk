document.addEventListener('DOMContentLoaded', () => {
    // refer to the html elements
    const dynamicTextElement = document.getElementById('dynamicText');
    const changeTextButton = document.getElementById('changeTextButton');
    const styleMeElement = document.getElementById('styleMe');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');

    //Change Text 
    changeTextButton.addEventListener('click', () => {
        dynamicTextElement.textContent = 'Now my name is Mwangi, see?!';
    });

    // Modify CSS Styles using Js
    styleButton.addEventListener('click', () => {
        styleMeElement.style.backgroundColor = 'lightblue';
        styleMeElement.style.color = 'white';
        styleMeElement.style.padding = '15px';
        styleMeElement.style.borderRadius = '5px';
    });

    // --- Add or remove element
    let newElementCount = 0

    addElementButton.addEventListener('click', () => {
        newElementCount++;
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('new-element');
        newParagraph.textContent = `added paragraph ${newElementCount}`;
        elementContainer.appendChild(newParagraph);
    });

    removeElementButton.addEventListener('click', () => {
        const lastElement = elementContainer.lastElementChild;
        if (lastElement) {
            elementContainer.removeChild(lastElement);
        } else {
            alert('add elememnt to remove!');
        }
    });
});