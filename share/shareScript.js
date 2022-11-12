var clickerValue = document.querySelector('.clicker__value');
var svgPlusIcon = document.querySelector('.clicker__plus svg');
var pagesReadValue = document.querySelector('.timeOnWebsite__pagesRead__value');
var timer = document.querySelector('.timeOnWebsite__timer');
if (!sessionStorage.getItem('timeSpend')) {
    console.log('a');
    var timeJoinedToWebsite = new Date();
    console.log(timeJoinedToWebsite);
    sessionStorage.setItem('timeSpend', String(Number(timeJoinedToWebsite)));
    console.log(sessionStorage.getItem('timeSpend'));
}
else {
    var newDate = new Date();
    timer.textContent =
        String(Math.floor((Number(newDate) - Number(sessionStorage.getItem('timeSpend'))) / 1000)) + ' sekund';
}
var clickerButton = document.querySelector('.clicker__plus');
var setStarterClickValue = function () {
    if (localStorage.getItem('numberOfClicks') == null) {
        return '0';
    }
    else {
        return localStorage.getItem('numberOfClicks');
    }
};
svgPlusIcon.style.display = 'block';
clickerValue.textContent = setStarterClickValue();
console.log(clickerValue);
var incrementClickCounter = function () {
    var clickNumber = String(Number(clickerValue.textContent) + 1);
    localStorage.setItem('numberOfClicks', clickNumber);
    clickerValue.textContent = localStorage.getItem('numberOfClicks');
};
clickerButton.addEventListener('click', incrementClickCounter);
setInterval(function () {
    var newDate = new Date();
    var secondsOnWebsite = String(Math.floor((Number(newDate) - Number(sessionStorage.getItem('timeSpend'))) / 1000));
    timer.textContent = secondsOnWebsite + ' sekund';
    pagesReadValue.textContent = String(Math.floor((Number(secondsOnWebsite) / 120) * 100) / 100);
}, 1000);
