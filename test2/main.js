// test-1
// function extractNumbers(str) {
//     const numbers = str.match(/\d+/g);
//     return numbers ? numbers.map(Number) : [];
// }
//
// console.log(extractNumbers("a1fg5hj6"));

//test-2
// function fibonacciWithDelay(a = 0, b = 1) {
//     if (a > 144) return;
//     console.log(a);
//     setTimeout(() => fibonacciWithDelay(b, a + b), 1000);
// }
//
// fibonacciWithDelay();

//test-3
// async function fetchProductTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         data.forEach(product => console.log(product.title));
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// }
//
// fetchProductTitles();

//test-4
// const buttonContainer = document.getElementById('color-buttons');
// buttonContainer.addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         document.body.style.backgroundColor = event.target.textContent.toLowerCase();
//     }
// });

//test-5
// const box = document.getElementById('box');
// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function() {
//     if (box.style.display === 'none') {
//         box.style.display = 'block';
//         toggleButton.textContent = 'Скрыть блок';
//     } else {
//         box.style.display = 'none';
//         toggleButton.textContent = 'Показать блок';
//     }
// });

//test-6
// const counterElement = document.getElementById('counter');
// let count = 0;
// const increaseCounter = setInterval(() => {
//     if (count < 100) {
//         count++;
//         counterElement.textContent = count;
//     } else {
//         clearInterval(increaseCounter);
//     }
// }, 1);

//test-7
const app = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

app()



document.getElementById('fetchDataButton').addEventListener('click', app);

