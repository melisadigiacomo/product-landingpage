// Change images
function imgSlider(anything){
    document.querySelector('.image').src = anything;
}

// For hamburger menu
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('show-links');
    navigation.classList.toggle('show-links');

}