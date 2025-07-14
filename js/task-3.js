const searchInput = document.querySelector('#name-input')
const spanId = document.querySelector('#name-output');
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim()) {
        return spanId.textContent = searchInput.value
    } else {
        return spanId.textContent = 'Anonymous'
    }
});

