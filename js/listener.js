const OG = 4;
const UG = 0;
const input = document.getElementById('input');
const output = document.getElementById('out');
const submit = document.getElementById('submit');
const img = document.getElementById('ball');

submit.addEventListener('click', () => {
    let ans = ['Yes', 'No', 'Maybe', '...', 'I am not sure'];
    let ansNum = Math.round(Math.random() * OG);

    img.classList.add('animate-ball');

    output.innerHTML = 'Thinking ...';

    setTimeout(function () {

        output.innerHTML = ans[ansNum];
        img.classList.remove('animate-ball');
    }, 2000);

});