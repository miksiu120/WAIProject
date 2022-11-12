const booksCollection = document.querySelectorAll('.galleryImage') as NodeList

const backgroundBiggerSizePhoto = document.querySelector('.backgroundBiggerPhoto') as HTMLDivElement
console.log(booksCollection)

booksCollection.forEach(photo => {
	photo.addEventListener('click', () => {
		const copyImage: Node = photo.cloneNode(true)
		backgroundBiggerSizePhoto.style.display = 'block'
		backgroundBiggerSizePhoto.append(copyImage)
		console.log(backgroundBiggerSizePhoto)
		document.body.style.overflow = 'hidden'
	})
})

backgroundBiggerSizePhoto.addEventListener('click', () => {
	backgroundBiggerSizePhoto.style.display = 'none'
	document.body.style.overflow = 'visible'
	backgroundBiggerSizePhoto.innerHTML = ''
})
