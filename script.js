const card = document.querySelector('.card')
const inputTodo = document.querySelector('#input')
const addBtn = document.querySelector('#add_task')
const todoList = document.querySelector('.list')

const arr = []

addBtn.addEventListener('click',function(){
    let todo = inputTodo.value
    arr.push(todo)
    inputTodo.value = ''
    addTodoItem(todo,arr.length-1)
})


    function addTodoItem(todo,index){
    // console.log(index);
    const listItems = document.createElement('span')
    const editBtn  = document.createElement('button')
    const todoText  = document.createElement('p')
    const deletBtn = document.createElement('button')
    const divBtn = document.createElement ('div')


    editBtn.textContent = 'Edit'
    deletBtn.textContent = 'Delete'
    editBtn.classList.add ('editBtn')
    deletBtn.classList.add ('deleteBtn')

    todoList.appendChild(listItems)
    listItems.appendChild(todoText)
    listItems.appendChild(divBtn)
    divBtn.appendChild(editBtn)
    divBtn.appendChild(deletBtn)
    todoText.textContent = todo

    

    listItems.style.backgroundColor = 'rgb(230, 232, 236)'
    listItems.hover = backgroundColor = 'gold'
    listItems.style.display = 'flex'
    listItems.style.justifyContent = 'space-between'
    listItems.style.margin = '0px 20px 5px 20px'
    listItems.style.borderRadius = '12px'
    //
    divBtn.style.display = 'flex'
    divBtn.style.alignItems = 'center'
    divBtn.style.gap = '10px'
    divBtn.style.marginRight = '10px'
    //
    todoText.style.marginLeft = '10px'
    //
    editBtn.style.backgroundColor = 'rgb(39, 167, 67)'
    editBtn.style.color = 'white'
    editBtn.style.border = 'none'
    editBtn.style.padding = '10px'
    editBtn.style.borderRadius = '8px'
    deletBtn.style.backgroundColor = 'rgb(216, 54, 71)'
    deletBtn.style.color = 'white'
    deletBtn.style.border = 'none'
    deletBtn.style.padding = '10px'
    deletBtn.style.borderRadius = '8px'

    editBtn.addEventListener('click',function(){
        editTodoItem(index)
    })
    deletBtn.addEventListener('click',function(){
        deleteTodoItem(listItems)
    })
}
function editTodoItem(index){
    const newTodo = prompt('Enter new text for this task')
    arr[index] = newTodo
    updateTodoList()

}
function updateTodoList(){
    todoList.innerHTML = ''
    arr.forEach((todo, index) => {
        addTodoItem(todo,index)
        
    })
}
function deleteTodoItem(a){
    a.style.display = 'none'
}




