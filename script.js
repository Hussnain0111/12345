document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const button = document.querySelector('.dropdown-button');
    
    button.addEventListener('click', function() {
        dropdown.classList.toggle('show'); // Toggle the 'show' class
    });
    
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            dropdown.classList.remove('show');
        }
    });
});

