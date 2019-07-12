//функция для добавления элементов
function addElement (findEl, nameEl, classEl) {
    let el = document.querySelector(findEl);
    let newEl = document.createElement(nameEl);
    newEl.classList.add(classEl);
    el.appendChild(newEl)
}

// задание нулевых отступов к странице
document.querySelector('body').classList.add('body')

// создание flex блока и стилей к нему
addElement('body', 'div', 'wrapper');

// создание элементов пользователей и чата и стилей к ним
addElement('.wrapper', 'div', 'personOne');
addElement('.wrapper', 'div', 'chat');
addElement('.wrapper', 'div', 'personTwo');

// формирование карточек пользователей
var profilePersoneOne = {
    name : 'Антон',
    surname : 'Бородин',
    age : 27,
    email : 'email@yandex.ru',
    profession : 'студент',
    said : ' сказал:',
    photo : 'images/person1.png',

    // createElementForObject(elementBlock, elementName, elementClass) {
    //     let insertCardBlock = document.querySelector(elementBlock)
    //     let newCardElement = document.createElement(elementName);
    //     newCardElement.classList.add(elementClass);
    //     insertCardBlock.appendChild(newCardElement);
    // },

    // findElement(findSelector) {
    //     return document.querySelector(findSelector);
    // },

    // createCard() {
    //     this.createElementForObject('.personOne', 'div', 'personCardOne');
    //     this.createElementForObject('.personCardOne', 'div', 'profileOne');
    //     this.createElementForObject('.profileOne', 'div', 'personPic');
    //     let picElement = this.findElement('.personPic');
    //     picElement.style.background = `url(${this.photo}) center center / cover`;
    //     this.createElementForObject('.profileOne', 'div', 'personInfo');
    //     let infoElement = this.findElement('.personInfo');
    //     infoElement.innerHTML = `<div>${this.name} ${this.surname}</div>`;

    //     this.createElementForObject('.personOne', 'form', 'formOne');
    //     let form = this.findElement('.formOne');
    //     form.innerHTML = `
    //         <textarea class="formOneText"></textarea>
    //         <input type="submit" class="formOneBtn">
    //     `;
        
    // }
}

// profilePersoneOne.createCard();

var profilePersoneTwo = {
    name : 'Вячеслав',
    surname : 'Жуков',
    age : 27,
    email : 'zhukov@mail.ru',
    profession : 'преподаватель',
    said : ' сказал:',
    photo : 'images/person2.png'
}

// создание блоков, в которых будет находится содержимое карточки и форма отправки сообщения
addElement('.personOne', 'div', 'personCardOne');
addElement('.personTwo', 'div', 'personCardTwo')

// создание блока профиля первого пользователя
addElement('.personCardOne', 'div', 'profileOne')
addElement('.personCardTwo', 'div', 'profileTwo')

// добавление фотографий пользователей
let profileOnePhoto = document.createElement('img');
profileOnePhoto.setAttribute('src', profilePersoneOne['photo']);
profileOnePhoto.classList.add('profileOnePhoto');
profileOnePhoto.style.cssText = 'max-width: 150px; max-height: 150px; margin: 5px; border: 2px solid #ffc700;'

document.getElementsByClassName('profileOne')[0].appendChild(profileOnePhoto);

let profileTwoPhoto = document.createElement('img');
profileTwoPhoto.setAttribute('src', profilePersoneTwo['photo']);
profileTwoPhoto.classList.add('profileTwoPhoto');
profileTwoPhoto.style.cssText = 'max-width: 150px; max-height: 150px; margin: 5px; border: 2px solid #ffc700;'

document.getElementsByClassName('profileTwo')[0].appendChild(profileTwoPhoto);

// добавление блока с информацией о пользователе

// добавление основного блока
let profileOneInf = document.createElement('div');

profileOneInf.classList.add('profileOneInf');
profileOneInf.style.cssText = 'margin: 5px; width: 100%'

document.getElementsByClassName('profileOne')[0].appendChild(profileOneInf);

let profileTwoInf = document.createElement('div');

profileTwoInf.classList.add('profileTwoInf');
profileTwoInf.style.cssText = 'margin: 5px; width: 100%'

document.getElementsByClassName('profileTwo')[0].appendChild(profileTwoInf);

// добавление имени пользователя

let profileOneName = document.createElement('div');

profileOneName.classList.add('profileOneName');
profileOneName.style.cssText = 'background-color: #ffc700; color: white; font-size: 26px; padding: 5px;'

document.getElementsByClassName('profileOneInf')[0].appendChild(profileOneName);
profileOneName.innerText = `${profilePersoneOne['name']} ${profilePersoneOne['surname']}`;

let profileTwoName = document.createElement('div');

profileTwoName.classList.add('profileTwoName');
profileTwoName.style.cssText = 'background-color: #ffc700; color: white; font-size: 26px; padding: 5px;'

document.getElementsByClassName('profileTwoInf')[0].appendChild(profileTwoName);
profileTwoName.innerText = `${profilePersoneTwo['name']} ${profilePersoneTwo['surname']}`;

// добавление остальной информации о пользователях

let profileOneOtherInf = document.createElement('div');

profileOneOtherInf.classList.add('profileOneOtherInf');
profileOneOtherInf.style.cssText = 'padding: 5px; margin: 10px; color: white; font-size: 18px;'

document.getElementsByClassName('profileOneInf')[0].appendChild(profileOneOtherInf);
profileOneOtherInf.innerText = `Возраст: ${profilePersoneOne['age']}
                                E-mail:  ${profilePersoneOne['email']}
                                Профессиия: ${profilePersoneOne['profession']}`;

let profileTwoOtherInf = document.createElement('div');

profileTwoOtherInf.classList.add('profileTwoOtherInf');
profileTwoOtherInf.style.cssText = 'padding: 5px; margin: 10px; color: white; font-size: 18px;'

document.getElementsByClassName('profileTwoInf')[0].appendChild(profileTwoOtherInf);
profileTwoOtherInf.innerText = `Возраст: ${profilePersoneTwo['age']}
                                E-mail:  ${profilePersoneTwo['email']}
                                Профессиия: ${profilePersoneTwo['profession']}`;

// создание формы
let formOne = document.createElement('form');

formOne.classList.add('formOne');
formOne.style.cssText = 'margin: 10px; height: 500px; width: 96%;'

document.getElementsByClassName('personOne')[0].appendChild(formOne);

let formTwo = document.createElement('form');

formTwo.classList.add('formTwo');
formTwo.style.cssText = 'margin: 10px; height: 500px; width: 96%;'

document.getElementsByClassName('personTwo')[0].appendChild(formTwo);

// создание поля с текстом для отправки
let formOneText = document.createElement('textarea');

// formOneText.classList.add('formOneText');
// formOneText.style.cssText = 'border: 2px solid #ffc700';
// formOneText.setAttribute('cols', '60');
// formOneText.setAttribute('rows', '20');

// document.getElementsByClassName('formOne')[0].appendChild(formOneText);

let formTwoText = document.createElement('textarea');

formTwoText.classList.add('formTwoText');
formTwoText.style.cssText = 'border: 2px solid #ffc700';
formTwoText.setAttribute('cols', '60');
formTwoText.setAttribute('rows', '20');

document.getElementsByClassName('formTwo')[0].appendChild(formTwoText);

// создание кнопки отправки

// let formOneBtn = document.createElement('input');

// formOneBtn.classList.add('formOneBtn');
// formOneBtn.style.cssText = 'padding: 5px; margin-top: 5px; border: 2px solid #ffc700; width: 150px; height: 40px; background-color: white;';
// formOneBtn.setAttribute('type', 'submit');

// document.getElementsByClassName('formOne')[0].appendChild(formOneBtn);

let formTwoBtn = document.createElement('input');

formTwoBtn.classList.add('formTwoBtn');
formTwoBtn.style.cssText = 'padding: 5px; margin-top: 5px; border: 2px solid #ffc700; width: 150px; height: 40px; background-color: white;';
formTwoBtn.setAttribute('type', 'submit');

document.getElementsByClassName('formTwo')[0].appendChild(formTwoBtn);

// сообщения в диалогов окне

// кто отправил (первый пользователь)
let chatPersonOneSaid = document.createElement('p');

chatPersonOneSaid.classList.add('chatPersonOneSaid')
chatPersonOneSaid.style.cssText = 'color: #262350; font-size: 22px; text-align: left; padding: 10px; font-weight: bold';

document.getElementsByClassName('chat')[0].appendChild(chatPersonOneSaid);
chatPersonOneSaid.innerText = `${profilePersoneOne['name']} ${profilePersoneOne['surname']} ${profilePersoneOne['said']}`;

// что отправил (первый пользователь)

let chatPersonOneText = document.createElement('p');

chatPersonOneText.classList.add('chatPersonOneText')
chatPersonOneText.style.cssText = 'color: #262350; font-size: 22px; text-align: left; padding: 10px; margin-left: 20px; background-color: #f1f1f1; max-width: 50%'

document.getElementsByClassName('chat')[0].appendChild(chatPersonOneText);

chatPersonOneText.innerText = `Всем привет!`;

// кто отправил (второй пользователь)
let chatPersonTwoSaid = document.createElement('p');

chatPersonTwoSaid.classList.add('chatPersonTwoSaid')
chatPersonTwoSaid.style.cssText = 'color: #262350; font-size: 22px; text-align: right; padding: 10px; font-weight: bold';

document.getElementsByClassName('chat')[0].appendChild(chatPersonTwoSaid);
chatPersonTwoSaid.innerText = `${profilePersoneTwo['name']} ${profilePersoneTwo['surname']} ${profilePersoneTwo['said']}`;

// что отправил (второй пользователь)

let chatPersonTwoText = document.createElement('div');

chatPersonTwoText.classList.add('chatPersonTwoText')
chatPersonTwoText.style.cssText = 'color: #262350; font-size: 22px; text-align: right; padding: 10px; margin-left: auto; margin-right: 20px; background-color: #f1f1f1; max-width: 50%'

document.getElementsByClassName('chat')[0].appendChild(chatPersonTwoText);

chatPersonTwoText.innerText = `Всем привет!`;