x = 5;
y = 1;

console.log(x + y);

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
    output.innerHTML = "Кнопка была нажата!";
});
