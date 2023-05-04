
function openMenuMobile(){
    document.getElementById('headerNav').classList.add('open');
    document.getElementById('overlayNavMobile').classList.add('open')
}

function closeMenuMobile(){
    document.getElementById('headerNav').classList.remove('open');
    document.getElementById('overlayNavMobile').classList.remove('open');
}


// document.getElementById("overlayNavMobile").addEventListener("click", function() {
//     closeMenuMobile();
// });

document.getElementById("overlayNavMobile").addEventListener("click", closeMenuMobile);
document.getElementById("headerNav").addEventListener("click", closeMenuMobile);
document.getElementById("headerBurger").addEventListener("click", openMenuMobile);
