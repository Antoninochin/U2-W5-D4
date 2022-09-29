const lists = document.getElementById('lists')

// function strong(list){
//     let string = getElementsByClassName('list')
//     document.getElementsByClassName('list').innerHTML = `'<strong>' + ${string} + '</strong>'`;
    
// }

// function invio(){
//     document.getElementById('input-list') = invio
// }
function getInputList(eventObject){
    if (eventObject.key !== 'Enter'){
        return;
    }
  
let input = document.getElementById('input-list')

if (input.value !== ''){
    lists.innerHTML += `<div class="list">${input.value}</div>`
    input.value = ''
}else {
    alert("Se non scrivi qualcosa non va, A-ginius!")
}
}