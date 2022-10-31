const canvas = document.querySelector('.canvas');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const sizetextBtn = document.querySelector('.sizetext');
const colorBtn = document.querySelector('.color input');
const clearBtn =document.querySelector('.clear');

let isPressed=false
let size=5;
let color='black';
let beforwidth;
let beforheight;

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
        isPressed=true;
        div.className='draw';
        canvas.append(div);
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
        const div = document.createElement('div');
        div.className='draw';
        canvas.append(div);
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.left=event.offsetX + 'px';
        div.style.top=event.offsetY + 'px';
        div.style['background-color']=color;
        // console.log(div);
        // console.log(event.offsetX);
        }
    }
    // canvas.style.backgroundColor='red';
});
canvas.addEventListener('mouseup',() =>{
    
    isPressed=false;
})
decreaseBtnHandler();
increaseBtn.addEventListener('click',increaseBtnHandler);
decreaseBtn.addEventListener('click',decreaseBtnHandler);
clearBtn.addEventListener('click',() => canvas.innerHTML='');
colorBtn.addEventListener('change',() => color=colorBtn.value);
// canvas.addEventListener('mouseup',() =>
// {
//     canvas.style.backgroundColor='green';
// });

function squarewithOwal(){
    const div = canvas.querySelector('div:last-of-type');
    div.style.width = event.offsetX - beforwidth + 'px';
    div.style.height = event.offsetY - beforheight + 'px';
}