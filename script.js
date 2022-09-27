import {data} from './hp.js';

const wrapper = document.querySelector('.wrapper');

function createCard (el) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
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

data.forEach ((el) => {
    wrapper.append(createCard(el));
})