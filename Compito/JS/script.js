const lists = document.getElementById('lists')

function strong(){
     let input = document.getElementById('input-list')
     lists.innerHTML += `<div class="list"> <strong> ${input.value} </strong></div>`
    
}

// function invio(){
//     document.getElementById('input-list') = invio
// }
function getInputList(event){
    if (event.key !== 'Enter'){
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