document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) || event.key === 'Escape') {
        event.preventDefault();
    }
});
