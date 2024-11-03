const input = document.querySelector('.u-shaped-input');

input.addEventListener('focus', () => {
    input.style.borderColor = '#007BFF';
});

input.addEventListener('blur', () => {
    input.style.borderColor = 'transparent';
});
