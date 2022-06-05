const progressBar = document.querySelector(".outerRing")
const minElem = document.querySelector("#minutes")
const secElem = document.querySelector("#seconds")
const startStop = document.querySelector("#stsp")
const setting = document.querySelector("#setting")
const reset = document.querySelector('#reset')



let minutes = document.querySelector("#minutes").innerHTML
let	seconds = document.querySelector("#seconds").innerHTML
let	progress = null
let	progressStart = 0
let	progressEnd = parseInt(minutes) * 60 + parseInt(seconds)
let	speed = 1000
let	degTravel = 360 / progressEnd
let	toggleSettings = false
let	secRem = 0
let	minRem = 0

function progressTrack() {
	progressStart++;

	secRem = Math.floor((progressEnd - progressStart) % 60);
	minRem = Math.floor((progressEnd - progressStart) / 60);

	secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
	minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

	progressBar.style.background = `conic-gradient(
      	#9d0000 ${progressStart * degTravel}deg,
      	#17171a ${progressStart * degTravel}deg
  		)`;
	if (progressStart == progressEnd) {
		progressBar.style.background = `conic-gradient(
				#00aa51 360deg,
				#00aa51 360deg
		  )`;
		clearInterval(progress);
		startStop.innerHTML = "START";
		progress = null;
		progressStart = 0;
	}
}

function startStopProgress() {
	if (!progress) {
		progress = setInterval(progressTrack, speed);
	} else {
		clearInterval(progress);
		progress = null;
		progressStart = 0;
		progressBar.style.background = `conic-gradient(
				#17171a 360deg,
				#17171a 360deg
		  )`;
	}
}

function resetValues() {
	if (progress) {
		clearInterval(progress);
	}
	minutes = document.querySelector("#minutes").innerHTML;
	seconds = document.querySelector("#seconds").innerHTML;
	toggleSettings = false;
	minElem.contentEditable = false;
	minElem.style.borderBottom = `none`;
	secElem.contentEditable = false;
	secElem.style.borderBottom = `none`;
	progress = null;
	progressStart = 0;
	progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
	degTravel = 360 / progressEnd;
	progressBar.style.background = `conic-gradient(
				#17171a 360deg,
				#17171a 360deg
		  )`;
}


reset.onclick = () => {
	document.querySelector('#minutes').innerHTML = minutes
	document.querySelector('#seconds').innerHTML = seconds 
}

startStop.onclick =  () => {
	if (startStop.innerHTML === "START") {
		if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
			startStop.innerHTML = "STOP";
			startStopProgress();
		} else {
			alert("Click the Cog and enter a Time Value");
		}
	} else {
		startStop.innerHTML = "START";
		startStopProgress();
	}
};

setting.onclick = () => {
	if (!toggleSettings) {
		toggleSettings = true;
		minElem.contentEditable = true;
		minElem.style.borderBottom = `1px dashed #ffffff50`;
		secElem.contentEditable = true;
		secElem.style.borderBottom = `1px dashed #ffffff50`;
	} else {
		resetValues();
	}
};

minElem.onblur = function () {
	resetValues();
};

secElem.onblur = function () {
	resetValues();
};


//Below code needs fixing

const input = document.querySelector('#input')
const addBtn = document.querySelector('#button')
const deleteButton = document.querySelector('#delete')
const button2 = document.querySelector('#button2')

// let	checkStorage = localStorage.getItem('input') || '|' //keeps local storage
let	checkStorage = JSON.parse(localStorage.getItem('input')) || []

// addBtn.addEventListener('click', saveToLocalStorage)

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let inputRewardValue = inputReward.value;
	const newLi = document.createElement('li')
	newLi.innerHTML = inputRewardValue;
	userList.append(newLi);
	inputReward.value = ''
})

// deleteButton.addEventListener('click', deleteStorage) //removes localstorage data

// button2.addEventListener('click', createLi) // temporary show button for debugging

// let newArr = checkStorage.split('|')

//supposed to create li and append
// function createLi() {
// 	let newArr = checkStorage.split('|')
// 	document.getElementById('createdLi').replaceChildren()	
// 		for(let i = 1; i < newArr.length - 1; i++){				
// 			const userList = document.getElementById('createdLi') 
// 			const makeLi = document.createElement('li')
// 			makeLi.innerText = newArr[i]
// 			userList.appendChild(makeLi)
// 	}	
//  }


//create the li
function createLi() {
	let newArr = checkStorage.split('|'); 
	const userList = document.getElementById('createdLi')
	userList.innerHTML = '';
	let list = newArr.map((item) => `<li>${item}</li>`).join('')
	userList.insertAdjacentHTML('beforeend', list)
}


 //save inputs to local storage
// function save() {		
// 	let saveInputs = document.getElementById('input').value	
// 	checkStorage += `${saveInputs}|`
// 	localStorage.setItem('input', checkStorage)
// 	createLi()	
// }

//adams way of doing it
function saveToLocalStorage(newInput){
	checkStorage.push(newInput)
	localStorage.setItem('input', JSON.stringify(checkStorage))
}

//removes the stored information 
// function deleteStorage() {	
// 	localStorage.removeItem('input', checkStorage)
// 	checkStorage = '|'
// }

// function deleteStorage(itemToRemove){
// 	const index = checkStorage.indexOf(itemToRemove);

// }





	