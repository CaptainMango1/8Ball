const OG = 4;
const UG = 0;
const input = document.getElementById('input');
const output = document.getElementById('out');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let ans = ['Yes', 'No', 'Maybe', '...', 'I am not sure'];
    let ansNum = Math.round(Math.random() * OG);

    output.innerHTML = ans[ansNum];
});