document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.nav-toggle-btn');
    var collapseItem = document.querySelector('.nav-items');

    toggleBtn.addEventListener('click', function () {
        // Get the computed style
        var computedStyle = window.getComputedStyle(collapseItem);

        // Check if the computed display value is 'none'
        if (computedStyle.display === 'none') {
            collapseItem.classList.add('show');
        } else {
            collapseItem.classList.remove('show');
        }
    });
});
