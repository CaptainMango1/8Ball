let input = document.getElementById('input');
let output = document.getElementById('out');

input.addEventListener('keyup', () => {
    output.innerHTML = (input.value);
});