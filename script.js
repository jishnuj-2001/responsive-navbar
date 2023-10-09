document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.nav-toggle-btn');
    var collapseItem = document.querySelector('.nav-items');

    toggleBtn.addEventListener('click', function () {
        // Get the computed style
        var computedStyle = window.getComputedStyle(collapseItem);
        var computedToggleBtn = window.getComputedStyle(toggleBtn);

        // Check if the computed display value is 'none'
        if (computedStyle.display === 'none') {
            collapseItem.classList.add('show');
        } else {
            collapseItem.classList.remove('show');
        }
        if(computedStyle.display==='flex'){
            toggleBtn.style.border='3px solid hsl(0, 0%, 70%)';
        }else{
            toggleBtn.style.border='2px solid hsl(0, 0%, 80%)';
        }
    });
});
