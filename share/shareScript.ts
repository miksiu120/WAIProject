let clickerValue = document.querySelector('.clicker__value') as HTMLParagraphElement
let svgPlusIcon = document.querySelector('.clicker__plus svg') as HTMLImageElement

let pagesReadValue = document.querySelector('.timeOnWebsite__pagesRead__value') as HTMLSpanElement
let timer = document.querySelector('.timeOnWebsite__timer') as HTMLDivElement

if (!sessionStorage.getItem('timeSpend')) {
	console.log('a')
	let timeJoinedToWebsite = new Date() as Date
	console.log(timeJoinedToWebsite)
	sessionStorage.setItem('timeSpend', String(Number(timeJoinedToWebsite)))
	console.log(sessionStorage.getItem('timeSpend'))
} else {
	const newDate = new Date()
	timer.textContent =
		String(Math.floor((Number(newDate) - Number(sessionStorage.getItem('timeSpend'))) / 1000)) + ' sekund'
}

const clickerButton = document.querySelector('.clicker__plus') as HTMLDivElement
const setStarterClickValue = () => {
	if (localStorage.getItem('numberOfClicks') == null) {
		return '0'
	} else {
		return localStorage.getItem('numberOfClicks')
	}
}

svgPlusIcon.style.display = 'block'

clickerValue.textContent = setStarterClickValue()

console.log(clickerValue)
const incrementClickCounter = () => {
	const clickNumber: string = String(Number(clickerValue.textContent) + 1)
	localStorage.setItem('numberOfClicks', clickNumber)
	clickerValue.textContent = localStorage.getItem('numberOfClicks')
}

clickerButton.addEventListener('click', incrementClickCounter)
setInterval(() => {
	const newDate = new Date()

	const secondsOnWebsite = String(Math.floor((Number(newDate) - Number(sessionStorage.getItem('timeSpend'))) / 1000))
	timer.textContent = secondsOnWebsite + ' sekund'

	pagesReadValue.textContent = String(Math.floor((Number(secondsOnWebsite) / 120) * 100) / 100)
}, 1000)
