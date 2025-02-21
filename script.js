document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const links = document.querySelector('.links');

    menuIcon.addEventListener('click', function() {
        // Toggle the active class on the links
        links.classList.toggle('active');
        // Change the icon based on the active state
        if (links.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times'); // Change to cancel icon
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars'); // Change back to menu icon
        }
    });
});
