var textHolder = document.querySelector('.placeHolderText');
var mainContainer = document.querySelector('.main');
var button = document.createElement('div');
button.setAttribute('class', 'button');
button.textContent = 'KLIKNIJ MNIE';
button.style.padding = '1em 2em';
button.style.fontSize = '1.5rem';
button.style.textAlign = 'center';
button.style.border = '1px solid #fff';
button.style.margin = '2em 0.5em';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.appendChild(button);
button.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.textContent =
        'Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania. Tekst o zaletach czytania.Tekst o zaletach czytania. Tekst o zaletach czytania.';
    textHolder.appendChild(paragraph);
});
