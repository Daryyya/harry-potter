import {data} from './hp.js';

const wrapper = document.querySelector('.wrapper');

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

    card.append(img);
    card.append(wrapper);

    return card;
}

showCard(data);

let selectEl = document.querySelector('select');

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

function showCard (arr) {
    arr.forEach(el => {
        wrapper.append(createCard(el))
    })
}



function getOption (arr) {
    let sort = [];
    arr.map(el => sort.push(el.house));
    return [...new Set(sort)];
}


getOption(data).forEach(el => {
    selectEl.append(createOption(el));
})


let select = document.querySelector('select');

let input = document.querySelector('input');

// console.log(select, input);

select.addEventListener('change', serchCard);
input.addEventListener('input', serchCard);

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

function serchCard () {
    let selectValue = select.value.toLowerCase();
    let inputValue = input.value.toLowerCase().trim();

    wrapper.innerHTML = '';

    let newArr = data.filter(el => el.name.toLowerCase().includes(inputValue)).filter(el => el.house.toLowerCase() === selectValue || selectValue === '');
    console.log(newArr);
    showCard(newArr);
}


