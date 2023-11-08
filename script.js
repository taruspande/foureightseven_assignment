function changeImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.carousel-button');

    images.forEach(image => image.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('selected'));

    images[index].classList.add('active');
    buttons[index].classList.add('selected');
}
