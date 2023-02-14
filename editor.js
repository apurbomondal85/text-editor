
const textField = document.getElementById('text-field');


// text-bold
document.getElementById('bold').addEventListener('click',()=>{
    textField.classList.toggle('font-bold');
})

// text-italic
document.getElementById('italic').addEventListener('click',()=>{
    textField.classList.toggle('italic');
})

// text-underline 
document.getElementById('text-underline').addEventListener('click',()=>{
    textField.classList.toggle('underline');
})

// text-left
document.getElementById('align-left').addEventListener('click',()=>{
    textField.classList.remove('text-center');
    textField.classList.remove('text-justify');
    textField.classList.remove('text-right');
    textField.classList.add('text-left');
})

// text-center
document.getElementById('align-center').addEventListener('click',()=>{
    textField.classList.remove('text-justify');
    textField.classList.remove('text-left');
    textField.classList.remove('text-right');
    textField.classList.add('text-center');
})

// text-right
document.getElementById('align-right').addEventListener('click',()=>{
    textField.classList.remove('text-justify');
    textField.classList.remove('text-left');
    textField.classList.remove('text-center');
    textField.classList.add('text-right');
})
// text-justify
document.getElementById('align-justify').addEventListener('click',()=>{
    
    textField.classList.remove('text-center');
    textField.classList.remove('text-left');
    textField.classList.remove('text-right');
    textField.classList.add('text-justify');
})

// font-size
const fontSize = document.getElementById('number');
fontSize.addEventListener('input',()=>{
    let fontValue = fontSize.value;
    textField.style.fontSize = `${fontValue}px`;
})

// text-lower
document.getElementById('text-lower').addEventListener('click',()=>{
    textField.classList.remove('uppercase');
    textField.classList.remove('capitalize');
    textField.classList.add('lowercase');
})

// text-capitalize
document.getElementById('text-capitalize').addEventListener('click',()=>{
    textField.classList.remove('uppercase');
    textField.classList.remove('lowercase');
    textField.classList.add('capitalize');
})

// text-upper
document.getElementById('text-upper').addEventListener('click',()=>{
    textField.classList.remove('lowercase');
    textField.classList.remove('capitalize');
    textField.classList.add('uppercase');
})


// color
const color = document.getElementById('color');
color.addEventListener('input',()=>{
    let colorValue = color.value;
    textField.style.color = colorValue;
})

