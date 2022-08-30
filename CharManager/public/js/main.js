//button for weapon
const addWeaponBtn = document.getElementById('weapon-button')
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button


// Adding/Removing Weapons

    // I want to click the add weapon button to appened the already created
        // div(s) the the li? 

addWeaponBtn.onclick = function () {
    let weaponContainer = document.querySelector('#weapon-container')
    let meleeWeapon = document.querySelector('#melee-weapon')
    weaponContainer.appendChild(meleeWeapon)
}


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

//mouse out functions 
document.getElementById('mouse-out').addEventListener('mouseout', saveData)

function saveData(){
    console.log('please fucking work');
    window.location.reload
}

//checklist

// const dyingCheckList = Array.from(document.getElementsByClassName('dying'))
// dyingCheckList.forEach(e => e.addEventListener('change', setBoxes))

// function setBoxes(){
//     console.log('setBoxes');
//     // dyingCheckList.forEach(e => {
//     //     e.checked === true ?
//     // })
//     const boxes = this.template.querySelectorAll('.dying');
//     boxes.forEach(box => box.checked = event.target.name === box.name);
// }

// TRYING TO GET CHECK BOX TO JUST HAVE ONE AT A TIME CHECKED

// wrap form, every input needs a name (NAME NOT ID), add everything into character object shcema within user (all the names of the inputs) -> create save button, 