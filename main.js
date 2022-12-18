const addToDoButton=document.getElementById("addToDo")
const todoContainer=document.getElementById("todoContainer")
const inputText=document.getElementById('inputText')
const ClearToDo=document.getElementById('ClearToDo')

addToDoButton.addEventListener('click', function(){

    const paragraph=document.createElement('p')
    paragraph.classList.add('paragrgaph-styling')

    todoContainer.appendChild(paragraph)
    paragraph.innerHTML= inputText.value;
    inputText.value=""
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
        
    })
    
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph)
    })
       
ClearToDo.addEventListener('click',function(){
    paragraph.remove();
})

})