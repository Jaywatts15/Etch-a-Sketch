let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let penMode = true;
function Erase() {
    penMode = false;
}

function Write() {
    penMode = true;
}

let dimensions = prompt('Dimensions?')

const cols = (function() {
    num = dimensions.split('x')
    return num[0];
}());

const rows = (function() {
    num = dimensions.split('x')
    return num[1];
}());

const container = document.createElement('div');

container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

container.style.gridTemplateRows = `repeat(${rows}, 1fr)`

container.classList.add('grid__container');

document.body.appendChild(container);

function squares() {
    let total = cols * rows;

    if (cols > 100 || rows > 100) {
        alert("Error. The Dimensions are too large");
    }else {
        for (let i = 0; i < total; i++) {
        
            el = document.createElement('button');
    
            el.setAttribute('type', 'button')
    
            el.classList.add('grid__square');
            
            el.addEventListener('mouseover', color)

            
            el.addEventListener('mousedown', color)

            container.appendChild(el);
    
            console.log("Working");
            
        }
    }
    


};

squares();

function color(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (penMode) {
        e.target.classList.add('color')
    } else {
        e.target.classList.remove('color')
    }
};

function clearCanvas() {
    container.innerHTML = ''
}

function Clear() {
    clearCanvas();
    squares();
}
