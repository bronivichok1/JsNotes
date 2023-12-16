/*const leng=100
const array= new Mas[leng]
*/

const inputElement=document.getElementById('title')
const createBtn=document.getElementById('create')
const listElement=document.getElementById('list')
const notes=[
{
    title:'Lose',
    completed:false,
},
{
    title:'Win',
    completed: true,
},
]
//console.log(inputElement.value)

function render()
{
    listElement.innerHTML=''
    if(notes.length==0){
        listElement.innerHTML='<p>Нет заметок</p>'
    }
    for(let i=0;i<notes.length;i++){
        listElement.insertAdjacentHTML('beforeend',getNote(notes[i],i))  
    }
    /*for(let note of notes){
        listElement.insertAdjacentHTML('beforeend',getNote(note))  
    }*/
    
    
}
render()

createBtn.onclick = function(){
    if(inputElement.value.lenght==0)
    {
        return
    }
    const newNote={
        title:inputElement.value,
        completed: false,
    }
  notes.push(newNote)
  render()
    inputElement.value=''
}
listElement.onclick=function(event){
    if(event.target.dataset.index){
        const index=Number(event.target.dataset.index)
        const type=event.target.dataset.type

        if(type=='toggle'){
            notes[index].completed=!notes[index].completed
        }else if(type=='remove'){
            notes.splice(index,1)
        }
        render()
    }

}
function getNote(note,index){
    return`
    <li
    class="list-group-item d-flex justify-content-between
     align-items-center"
    >
    <span class="${note.completed?'text-decoration-line-through':''}">${
        note.title
    }</span>
    <span>
    <span class="btn btn-small btn-${
        note.completed?'warnning':'success'
    }"data-index="${index}" data-type="toggle">&check;</span>
    <span class="btn btn-small btn-danger"data-type="remove"
    data-index="${index}">&times;</span>
    </span>
    </li>
    `
    
}