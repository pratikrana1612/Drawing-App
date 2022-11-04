const canvas = document.querySelector('.canvas');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const sizetextBtn = document.querySelector('.sizetext');
const colorBtn = document.querySelector('.color input');
const squareBtn = document.querySelector('.square');
const circleBtn = document.querySelector('.circle');
const clearBtn =document.querySelector('.clear');

let isPressed=false;
let squarePressed = false;
let circlePressed = false;
let size=5;
let color='black';
let beforwidth;
let beforheight;

const  btnStateChanger= (btn) => btn?false:true;          


const decreaseBtnHandler = () =>
{
    if(size===5)
    {
        decreaseBtn.disabled=true;
        return;
    }
    size-=5;
    increaseBtn.disabled=false;
    sizetextBtn.textContent=size;
}


const increaseBtnHandler = () =>
{ 
    if(size===50)
    {
        increaseBtn.disabled=true;
        return;
    }
    size+=5;
    decreaseBtn.disabled=false;
    sizetextBtn.textContent=size;
}

canvas.addEventListener('mousedown',(event) =>
{
    if(event.target.classList.contains('canvas'))
    {
        const div = document.createElement('div');
        // isPressed=true;
        isPressed = btnStateChanger(isPressed);
        div.className='draw';
        event.target.append(div);
        div.style.left=event.offsetX + 'px';
        div.style.top=event.offsetY + 'px';
        beforwidth = event.offsetX;
        beforheight = event.offsetY;
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style['background-color']=color;
        // canvas.style.backgroundColor='red';
    }
});




canvas.addEventListener('mousemove',(event) =>
{
    if(isPressed)
    {   
        if(event.target.classList.contains('canvas'))
        {
            if(squarePressed && !circlePressed)
            {
                circlePressed = circlePressed?btnStateChanger(circlePressed):circlePressed;
                const div = canvas.querySelector('div:last-of-type');
                div.style.width = event.offsetX - beforwidth + 'px';
                div.style.height = event.offsetY - beforheight + 'px';
            }
            else if(circlePressed && !squarePressed)
            {
                squarePressed = squarePressed?btnStateChanger(squarePressed):squarePressed;
                const div = canvas.querySelector('div:last-of-type');
                div.classList.add('circleDraw');
                div.style.borderColor = color;
                div.style.width = event.offsetX - beforwidth + 'px';
                div.style.height = event.offsetY - beforheight + 'px';
            }
            else
            {
                const div = document.createElement('div');
                div.className='draw';
                event.target.append(div);
                div.style.width = size + 'px';
                div.style.height = size + 'px';
                div.style.left=event.offsetX + 'px';
                div.style.top=event.offsetY + 'px';
                div.style['background-color']=color;
                // console.log(div);
                // console.log(event.offsetX);
            }
            
        }
    }
    // canvas.style.backgroundColor='red';
});





decreaseBtnHandler();
canvas.addEventListener('mouseup',() => isPressed=btnStateChanger(isPressed));
increaseBtn.addEventListener('click',increaseBtnHandler);
decreaseBtn.addEventListener('click',decreaseBtnHandler);
clearBtn.addEventListener('click',() => canvas.innerHTML='');
colorBtn.addEventListener('change',() => color=colorBtn.value);
squareBtn.addEventListener('click',() =>{
    circlePressed=false;
    squarePressed = btnStateChanger(squarePressed)
});
circleBtn.addEventListener('click',() =>{
    squarePressed=false;
    circlePressed = btnStateChanger(circlePressed)
});

// canvas.addEventListener('mouseup',() =>
// {
//     canvas.style.backgroundColor='green';
// });

