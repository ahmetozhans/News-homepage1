
// Hamburger menüleri  aç kapa divlerini belirttik
const hamburgerMenuOpenButton = document.querySelector('.hamburger-menu-open')
const hamburgerMenuCloseButton = document.querySelector('.hamburger-menu-close')


// Belirttiğimiz divleri aldık açılma divlerini belirledik > open divine gitti
hamburgerMenuOpenButton.addEventListener('click', () =>{
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.add("open");
})

// Belirttiğimiz kapanma divlerini belirledik  ve add'ı remove yaparak kapattık> open divine gitti
hamburgerMenuCloseButton.addEventListener('click', () =>{
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.remove("open");
})