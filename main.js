const root = document.getElementById('root')
const container = document.createElement('div')

const flex = document.createElement('form')
container.appendChild(flex).classList.add('flex')

const title = document.createElement('h1')
title.textContent = 'ToDoList'
flex.appendChild(title).classList.add('title')

const textInFlex = document.createElement('div')
flex.appendChild(textInFlex).classList.add('flex-input')


const textIn = document.createElement('input')
textInFlex.appendChild(textIn).setAttribute('type', 'text')
textIn.setAttribute('placeholder', 'Покормить кота')
textIn.setAttribute('required', 'required')

const btn = document.createElement('button')
btn.classList.add('flex-input-btn')
textInFlex.appendChild(btn).textContent = '+'

window.addEventListener('load', (event) => {
    console.log(JSON.parse(localStorage.getItem('tasks')));
    JSON.parse(localStorage.getItem('tasks')) && JSON.parse(localStorage.getItem('tasks')).map((el) => {
const li = document.createElement('li')
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    list.style = ''
    check.addEventListener('change',()=>{
        check.checked ?  (tasks.style = 'text-decoration:2px red line-through;', check.setAttribute('checked', 'checked')) :
        (tasks.style = 'text-decoration: none;', check.removeAttribute('checked'));
    })
    const tasks = document.createElement('input')
    tasks.setAttribute('type', 'text')
    tasks.value = el.text
    tasks.setAttribute('readonly', 'readonly')
    const edit = document.createElement('button')
    edit.classList.add('edit')
    edit.textContent = 'edit'
    edit.addEventListener('click', () => {
        edit.textContent === 'save' ? (edit.textContent = 'edit', tasks.setAttribute('readonly', 'readonly')):
        (edit.textContent = 'save', tasks.removeAttribute('readonly'));
    })

    const del = document.createElement('button')
    del.textContent = 'del'
    del.addEventListener('click', () =>{
        li.style = 'transition:transform 1s;position: relative;transform: translateX(-1000px);'
        setTimeout(() => li.remove(), 300)
    })



    li.appendChild(check)
    li.appendChild(tasks)
    li.appendChild(edit)
    li.appendChild(del)
    list.appendChild(li)
    })
    
})


const list = document.createElement('ul')
flex.addEventListener('submit', (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    list.style = ''
    check.addEventListener('change',()=>{
        check.checked ?  (tasks.style = 'text-decoration:2px red line-through;', check.setAttribute('checked', 'checked')) :
        (tasks.style = 'text-decoration: none;', check.removeAttribute('checked'));
    })
    const tasks = document.createElement('input')
    tasks.setAttribute('type', 'text')
    tasks.value = textInFlex.children[0].value
    tasks.setAttribute('readonly', 'readonly')
    const edit = document.createElement('button')
    edit.classList.add('edit')
    edit.textContent = 'edit'
    edit.addEventListener('click', () => {
        edit.textContent === 'save' ? (edit.textContent = 'edit', tasks.setAttribute('readonly', 'readonly')):
        (edit.textContent = 'save', tasks.removeAttribute('readonly'));
    })
    const del = document.createElement('button')
    del.textContent = 'del'
    del.addEventListener('click', () =>{
        li.style = 'transition:transform 1s;position: relative;transform: translateX(-1000px);'
        setTimeout(() => li.remove(), 300)
    })



    li.appendChild(check)
    li.appendChild(tasks)
    li.appendChild(edit)
    li.appendChild(del)
    list.appendChild(li)

    textInFlex.children[0].value = ''

})
    container.appendChild(list)
    list.addEventListener('DOMSubtreeModified', (e) => {
               if (e.target.localName === 'ul') {
            const todoArr = Array.from(e.target.children).map((el,idx) =>{
                el.children[2].addEventListener('click', (e) => {
                    if(el.children[2].textContent !== 'save'){
                       const newTaskArr = JSON.parse(localStorage.getItem('tasks')).map((item, index) => {
                            return idx === index ? {...item, text: el.children[1].value} : item
                        })
                        localStorage.setItem('tasks', JSON.stringify(newTaskArr))
                    }
                })
                el.children[0].addEventListener('change', (e) => {
                     if(el.children[0].checked === true){
                         const newCheck = JSON.parse(localStorage.getItem('tasks')).map((itemS, indexS) => {
                              return idx === indexS ? {...itemS, checked: el.children[0].checked} : itemS
                             })
                                 localStorage.setItem('tasks', JSON.stringify(newCheck))
     }
                })
        return {
            text: el.children[1].value,
            checked: el.children[0].checked
        }

    })
    localStorage.setItem('tasks', JSON.stringify(todoArr))
        }
    })







root.appendChild(container).classList.add('container')




