const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'r1') {
            body.style.backgroundColor = 'red';
        }
        if (e.target.id === 'g2') {
            body.style.backgroundColor = 'green';
        }
        if (e.target.id === 'b3') {
            body.style.backgroundColor = 'blue';
        }
        if (e.target.id === 'y4') {
            body.style.backgroundColor = 'yellow';
        }
        if (e.target.id === 'p5') {
            body.style.backgroundColor = 'purple';
        }
    });
});
