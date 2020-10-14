const vNav = document.querySelector('.vNav')
let yDistance = window.pageYOffset

document.addEventListener('scroll', function () {
    let yDistance = window.pageYOffset
    if (yDistance > '100') {
        vNav.style.right = '10px';
    }else{
        vNav.style.right = '-50px';
    }
})