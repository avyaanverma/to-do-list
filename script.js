const inputBox = document.querySelector('input')
const listContainer = document.querySelector('#list-container')
const button = document.querySelector('#button')

console.log(button);

// adding task the lists
button.addEventListener('click', function(e){
    addtask();
});

inputBox.addEventListener("keydown", (e) =>{
    // e.preventDefault();
    // console.log(e);
    if(e.key == 'Enter'){
        addtask();
    }
})

// event listener in the list whenver 


// function removetask(){
//     const li = document.querySelector('list')

//     li.
// }

function addtask(){
    if(inputBox.value.trim() === ''){
        alert("Please enter something");
    }
    else{
        
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        // class will be added in li 
    }
    inputBox.value = ""
    saveData()
}
// const list = document.querySelector('list')
// if(list){
//     console.log(hello);
//     list.addEventListener('click', function(e){
//         list.add('checked');
//     })
// }

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked"); 
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();



