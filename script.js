// import {data} from './hp.js';

const wrapper = document.querySelector('.wrapper');
const select = document.querySelector('select');
const input = document.querySelector('input');
const url = 'http://localhost:3000/get/hp';

function createCard (el) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'image';
    img.src = el.image;
    img.width = 334;
    img.height = 192;

    const divImg = document.createElement('div');
    divImg.className = 'card__img';
    // img.textContent = el.image;

    divImg.append(img);

    const wrapper = document.createElement('div');
    wrapper.className = 'card__wrapper';

    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = el.name;

    const actor = document.createElement('p');
    actor.className = 'card__info';
    actor.textContent = `Actor: ${el.actor}`;

    const gender = document.createElement('p');
    gender.className = 'card__info';
    gender.textContent = `Gender: ${el.gender}`;

    const house = document.createElement('p');
    house.className = 'card__info';
    house.textContent = `House: ${el.house}`;

    const wand = document.createElement('p');
    wand.className = 'card__info';
    wand.textContent = `Wand core: ${el.wand.core}`;

    const alive = document.createElement('p');
    alive.className = 'card__info';
    alive.textContent = `Alive: ${el.alive === true? 'Yes': 'No'}`;

    wrapper.append(title);
    wrapper.append(actor);
    wrapper.append(gender);
    wrapper.append(house);
    wrapper.append(wand);
    wrapper.append(alive);

    card.append(divImg);
    card.append(wrapper);

    return card;
}
function createOption (el) {
    let option = document.createElement('option');
    option.value = el;
    if (option.value === '') {
        option.textContent = 'All';
        option.setAttribute("selected", "selected");
    }
    else {
        option.textContent = el;
    }
    
    
    return option;
}
function getUniqueValueForOption (arr) {
    let allSchools = arr.map(el => el.house);
    let uniqueSchools = [...new Set(allSchools)]
    return(uniqueSchools);
}
function showCard (arr) {
    arr.forEach(el => {
        wrapper.append(createCard(el))
    })
}
function showOption (arr) {
    getUniqueValueForOption(arr).forEach(el => {
        select.append(createOption(el));
    })
}

function serchCard (arr) {
    let selectValue = select.value.toLowerCase();
    let inputValue = input.value.toLowerCase().trim();

    wrapper.innerHTML = '';

    let newArr = arr
        .filter(el => el.name.toLowerCase().includes(inputValue))
        .filter(el => el.house.toLowerCase() === selectValue || selectValue === '');
    console.log(newArr);
    showCard(newArr);
}

function mainFunc (data) {
    showCard(data);
    showOption(data);
    select.addEventListener('change', () => serchCard(data));
    input.addEventListener('input', () => serchCard(data));
}



let getData = fetch(url);

getData
    .then(response => response.json())
    .then(data => mainFunc(JSON.parse(data)))

// function serchCard (event) {
    
//     let selectValue = select.value;
//     let inputValue = input.value.trim();

//     wrapper.innerHTML = '';

//     if (!selectValue && !inputValue) {
//         showCard(data);
//     }

//     else if (selectValue && !inputValue) {
//         let sortArr = data.filter(el => el.house.includes(selectValue));
//         showCard(sortArr);
//     }

//     else if (!selectValue && inputValue) {
//         let inputSortArr = data.filter(el => el.name.toLowerCase().includes(inputValue));
//         showCard(inputSortArr);
//     }

//     else {
//         let firstSort = data.filter(el => el.house.includes(selectValue)).filter(el => el.name.toLowerCase().includes(inputValue));
//         showCard(firstSort);
//     }
// }


// function getOption (arr) {
//     let sort = [];
//     arr.map(el => sort.push(el.house));
//     return [...new Set(sort)];
// }


