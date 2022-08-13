//modal button for weapon
const open = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('modal-close');
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button



// modal button for adding a weapon
open.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})

//button for showing and hiding shield information
shieldButton.onclick = function() {    
    if(showHideShield.style.display === 'flex'){ 
        showHideShield.style.display = 'none'
    }else{
        showHideShield.style.display = 'flex'
    }    
} 

//swaps the text on shield button
shieldButton.addEventListener('click', function shieldButtonTextSwap() {
    if(shieldButton.innerText === 'Show Shield'){
        shieldButton.innerText = 'Hide Shield'
    } else{
        shieldButton.innerHTML = 'Show Shield'
    }
})

