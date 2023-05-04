
function openMenuMobile(){
    document.getElementById('menu-burger').classList.add('open');
    document.getElementById('overlayNavMobile').classList.add('open');
    document.getElementById('headerClose').classList.add('open');
}

function closeMenuMobile(){
    document.getElementById('menu-burger').classList.remove('open');
    document.getElementById('overlayNavMobile').classList.remove('open');
    document.getElementById('headerClose').classList.remove('open');
}


// document.getElementById("overlayNavMobile").addEventListener("click", function() {
//     closeMenuMobile();
// });

document.getElementById("overlayNavMobile").addEventListener("click", closeMenuMobile);
document.getElementById("headerBurger").addEventListener("click", openMenuMobile);
document.getElementById("headerClose").addEventListener("click",closeMenuMobile);
