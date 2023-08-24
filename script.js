const inputBox = document.querySelector('input')
const listContainer = document.querySelector('#list-container')
const button = document.querySelector('#button')

console.log(button);
button.addEventListener('click', function(e){
    addtask();
});

listContainer.addEventListener('click', function(e){
    removetask();
})

function removetask(){
    const li = document.querySelector('')
}

function addtask(){
    if(inputBox.value.trim() === ''){
        alert("Please enter something");
    }
    else{
        
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }
}



