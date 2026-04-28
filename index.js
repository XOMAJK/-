x = 5;
y = 10;

console.log(x + y);

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
    output.innerHTML = "Кнопка была нажата!";
});
