document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

function toggleVisibility(id) {
    let modal = document.getElementById(id);
    let overlay=document.getElementById('overlay');
    if (modal.classList.contains("opacity-0")) {
        modal.classList.remove("opacity-0", "pointer-events-none");
        overlay.classList.toggle("hidden");
    } else {
        modal.classList.add("opacity-0", "pointer-events-none");
        overlay.classList.toggle("hidden");
    }
}