//функция для добавления элементов
function addElement (findEl, nameEl, classEl) {
    let el = document.querySelector(findEl); // поиск элемента, в который будет вставлен новый элемент
    let newEl = document.createElement(nameEl); // создание нового элемента
    newEl.classList.add(classEl); // добавление класса новому элементу
    el.appendChild(newEl) // вставка нового элемента на страницу
}

// задание нулевых отступов к странице
document.querySelector('body').classList.add('body')

// создание flex блока
addElement('body', 'div', 'wrapper');

// создание элементов пользователей и чата
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
    parentNode: '.personOne',

    findElement(findSelector) {
        return document.querySelector(findSelector);
    },
    sendQuestion() { // отображение имени пользователя и его сообщения
        let messageValue = this.findElement('.formOneText').value;
        addElement('.chat', 'p', 'chatPersonOneSaid');
        this.findElement('.chatPersonOneSaid:nth-last-child(1)').innerText = `${this.name} ${this.surname} ${this.said}`;
        addElement('.chat', 'p', 'chatPersonOneText');
        this.findElement('.chatPersonOneText:nth-last-child(1)').innerText = messageValue;
    },
    createCard() { // создание блоков, в которых будет находится содержимое карточки и форма отправки сообщения
        addElement('.personOne', 'div', 'personCardOne'); // добавление основого блока на страницу
        addElement('.personCardOne', 'div', 'profileOne'); // создание блока профиля
        addElement('.profileOne', 'div', 'profileOnePhoto') // добавление фотографии
        document.querySelector('.profileOnePhoto').style.background = `url(${this.photo}) center center / cover`;
        addElement('.profileOne', 'div', 'profileOneInf'); // добавление блока с информацией о пользователе
        addElement('.profileOneInf', 'div', 'profileOneName'); // добавление имени пользователя
        document.querySelector('.profileOneName').innerText = `${this.name} ${this.surname}`;
        addElement('.profileOneInf', 'div', 'profileOneOtherInf'); // добавление остальной информации о пользователе
        document.querySelector('.profileOneOtherInf').innerText = 
                                `Возраст: ${this.age}
                                E-mail:  ${this.email}
                                Профессиия: ${this.profession}`;
        addElement('.personOne', 'form', 'formOne'); // создание формы
        addElement('.formOne', 'textarea', 'formOneText'); // создание поля с текстом для отправки
        addElement('.formOne', 'input', 'formOneBtn'); // создание кнопки отправки
        document.querySelector('.formOneBtn').setAttribute('type', 'submit');

        let form = this.findElement(`.formOne`);

        form.addEventListener('submit', (event) => {
            console.log(event);
            this.sendQuestion();
            event.preventDefault();
            form.elements[0].value = '';
        });
    }
}

var profilePersoneTwo = {
    name : 'Вячеслав',
    surname : 'Жуков',
    age : 27,
    email : 'zhukov@mail.ru',
    profession : 'преподаватель',
    said : ' сказал:',
    photo : 'images/person2.png',
    parentNode: '.personTwo',

    findElement(findSelector) {
        return document.querySelector(findSelector);
    },
    sendQuestion() {
        let messageValue = this.findElement('.formTwoText').value;
        addElement('.chat', 'p', 'chatPersonTwoSaid');
        this.findElement('.chatPersonTwoSaid:nth-last-child(1)').innerText = `${this.name} ${this.surname} ${this.said}`;
        addElement('.chat', 'p', 'chatPersonTwoText');
        this.findElement('.chatPersonTwoText:nth-last-child(1)').innerText = messageValue;
        messageValue = '';

    },
    createCard() {
        addElement('.personTwo', 'div', 'personCardTwo');
        addElement('.personCardTwo', 'div', 'profileTwo');
        addElement('.profileTwo', 'div', 'profileTwoPhoto')
        document.querySelector('.profileTwoPhoto').style.background = `url(${this.photo}) center center / cover`;
        addElement('.profileTwo', 'div', 'profileTwoInf');
        addElement('.profileTwoInf', 'div', 'profileTwoName');
        document.querySelector('.profileTwoName').innerText = `${this.name} ${this.surname}`;
        addElement('.profileTwoInf', 'div', 'profileTwoOtherInf');
        document.querySelector('.profileTwoOtherInf').innerText = 
                                `Возраст: ${this.age}
                                E-mail:  ${this.email}
                                Профессиия: ${this.profession}`;
        addElement('.personTwo', 'form', 'formTwo');
        addElement('.formTwo', 'textarea', 'formTwoText');
        addElement('.formTwo', 'input', 'formTwoBtn');
        document.querySelector('.formTwoBtn').setAttribute('type', 'submit');

        let form = this.findElement(`.formTwo`);

        form.addEventListener('submit', (event) => {
            console.log(event);
            this.sendQuestion();
            event.preventDefault();
        });
    }
      
};

profilePersoneOne.createCard();
profilePersoneTwo.createCard();

// сообщения в диалогов окне

// кто отправил (первый пользователь)
// addElement('.chat', 'p', 'chatPersonOneSaid');
// document.querySelector('.chatPersonOneSaid').innerText = `${profilePersoneOne.name} ${profilePersoneOne.surname} ${profilePersoneOne.said}`;

// // что отправил (первый пользователь)
// addElement('.chat', 'p', 'chatPersonOneText');
// document.querySelector('.chatPersonOneText').innerText = `Всем привет!`;

// // кто отправил (второй пользователь)
// addElement('.chat', 'p', 'chatPersonTwoSaid');
// document.querySelector('.chatPersonTwoSaid').innerText = `${profilePersoneTwo.name} ${profilePersoneTwo.surname} ${profilePersoneTwo.said}`;

// // что отправил (второй пользователь)
// addElement('.chat', 'p', 'chatPersonTwoText');
// document.querySelector('.chatPersonTwoText').innerText = `Всем привет!`;