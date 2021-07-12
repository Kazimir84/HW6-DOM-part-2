console.log('------------- # 3')

// 2 вариант (Можно через swich но мне больше нравится через if)

let divInput = document.getElementById('divInput');
let select = document.getElementById('select');
let inputColor = document.getElementById('color');
let btn = document.getElementById('btn');

select.addEventListener('change', function() {
        let n = this.value;   
        if (n === 'square') {            
            divInput.className = 'squareStyle';  
            document.getElementsByClassName('squareStyle')[0].style.background = 'black';    
            document.getElementsByClassName('squareStyle')[0].innerHTML = '<p class = "text">Квадрат</p>'
        } else if (n === 'rectangle') {
            divInput.className = 'rectangleStyle';
           document.getElementsByClassName('rectangleStyle')[0].style.background = 'black';
           document.getElementsByClassName('rectangleStyle')[0].innerHTML = '<p class = "text">Прямоугольник</p>'
        } else if (n === 'circle') {
            divInput.className = 'circleStyle';
           document.getElementsByClassName('circleStyle')[0].style.background = 'black';
           document.getElementsByClassName('circleStyle')[0].innerHTML = '<p class = "text">Круг</p>'
        } else {
            alert('Что-то пошло не так');
        }
});

btn.addEventListener('click', changeColor);

function changeColor() {        
        let inputValue = inputColor.value;        
        if (select.value === 'square' && inputValue !== '') {
            divInput.style.background = inputValue;                  
        } else if (select.value === 'rectangle' && inputValue !== '') {
            divInput.style.background = inputValue;            
        } else if (select.value === 'circle' && inputValue !== '') {            
            divInput.style.background = inputValue;
        } else {  
            divInput.style.background = 'black';                           
            alert('Выберите сначала фигуру, а потом напишите цвет! По умолчанию цвет - Черный.');            
        };        
};

// --------------------------------------------------------------

// 1 вариант

// let select = document.getElementById('select');
// let square = document.getElementById('square');
// let squareStyle = document.getElementById('squareStyle');
// let rectangle = document.getElementById('rectangle');
// let rectangleStyle = document.getElementById('rectangleStyle');
// let circle = document.getElementById('circle');
// let circleStyle = document.getElementById('circleStyle');
// let inputColor = document.getElementById('color');

// select.addEventListener('change', function() {
//     let n = this.value;   
//     if (n === 'Квадрат') {
//         squareStyle.style.display = 'block';
//         rectangleStyle.style.display = 'none';
//         circleStyle.style.display = 'none';
//     } else if (n === 'Прямоугольник') {
//         squareStyle.style.display = 'none';
//         rectangleStyle.style.display = 'block';
//         circleStyle.style.display = 'none';
//     } else if (n === 'Круг') {
//         squareStyle.style.display = 'none';
//         rectangleStyle.style.display = 'none';
//         circleStyle.style.display = 'block';
//     } else {
//         alert('Что-то пошло не так');
//     }
//   });

//   btn.addEventListener('click', changeColor);

//   function changeColor() {        
//     let inputValue = inputColor.value;        
//     if (select.value === 'Квадрат' && inputValue !== '') {       
//         squareStyle.style.background = inputValue;  
//         console.log('select.value 1 = ', select.value);      
//     } else if (select.value === 'Прямоугольник' && inputValue !== '') {
//         rectangleStyle.style.background = inputValue;
//         console.log('select.value 2 = ', select.value);
//     } else if (select.value === 'Круг' && inputValue !== '') {
//         console.log('select.value 3 = ', select.value);
//         circleStyle.style.background = inputValue;
//     } else {
//         squareStyle.style.background = 'black';
//         rectangleStyle.style.background = 'black';
//         circleStyle.style.background = 'black';
//         alert('Выберите сначала фигуру, а потом напишите цвет! По умолчанию цвет - Черный.')
//     };        
//   };
