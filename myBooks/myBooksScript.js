var booksCollection = document.querySelectorAll('.galleryImage');
var backgroundBiggerSizePhoto = document.querySelector('.backgroundBiggerPhoto');
console.log(booksCollection);
booksCollection.forEach(function (photo) {
    photo.addEventListener('click', function () {
        var copyImage = photo.cloneNode(true);
        backgroundBiggerSizePhoto.style.display = 'block';
        backgroundBiggerSizePhoto.append(copyImage);
        console.log(backgroundBiggerSizePhoto);
        document.body.style.overflow = 'hidden';
    });
});
backgroundBiggerSizePhoto.addEventListener('click', function () {
    backgroundBiggerSizePhoto.style.display = 'none';
    document.body.style.overflow = 'visible';
    backgroundBiggerSizePhoto.innerHTML = '';
});
