const formElem = document.forms[0];
const nameElem = formElem.name;
const name1Elem = formElem.name1;

let products = [];

const cards = document.querySelector('#cards')
const btnAsc = document.querySelector('#btnAsc');
const btnSrc = document.querySelector('#btnSrc');
const btnDsc = document.querySelector('#btnDsc');

function render(){
	cards.innerText = '';
	nameElem.value = '';
	name1Elem.value  = '';
	for (let i = 0; i< products.length; i++){
		const card = document.createElement('div');
		const pElem = document.createElement('p');
		pElem.innerText = products[i].name;
		card.classList.add('card');
		card.append(pElem);
		cards.appendChild(card);
	}
}

formElem.addEventListener('submit', event=>{
	event.preventDefault();
	products.push({name: nameElem.value})
render();
});

btnAsc.addEventListener('click',()=>{
	products = products.sort((a, b)=>{
		if(a.name < b.name){
			return -1;
		}else if(a.name > b.name){
			return 1;
		}else{
			return 0;
		}
	});
render();
});

btnDsc.addEventListener('click',()=>{
	products = products.sort((a, b)=>{
		if (a.name > b.name){
			return -1;
		}else if(a.name < b.name){
			return 1;
    	}else{
			return 0;
   		}
	});
render();
});

btnSrc.addEventListener('click',()=>{
	products = products.filter(sort => sort.name === name1Elem.value);
render();
});

