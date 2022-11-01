// HELPERS FUNCTIONS
const qs = (s) => document.querySelector(s);

// localStorage

const getStorage = (key) => JSON.parse(localStorage.getItem(key));
const setStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

const initStorage = () => {
    const INIT_MODEL = {
        0: 'someBook',
    };
    !getStorage('model') ? setStorage('model', INIT_MODEL) : null;
};

// UPDATE MODEL

const updateModel = (oldModel, newTitle, i) => ({
    ...oldModel,
    [i++]: newTitle,
});

// DOM
const form = qs('#form');
const formInput = qs('.form__input');
const formButton = qs('.form__button');
const result = qs('.result');

// EVENTS

formButton.addEventListener('click', (evt) => {
    const newBook = formInput.value;
    updateModel(model, newBook, i);
});

const display = () => {
    result.innerHTML = `
        <div>${getStorage(key)}</div>
    `;
};
