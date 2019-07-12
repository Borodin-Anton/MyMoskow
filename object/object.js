let Anton = {
    name : 'Антон',
    surname : 'Бородин',
    age : 27,
    skill : 'говорить',
    insertElement: document.querySelector('body'),

    showName() {
        alert(this.name)
    },

    showSkills() {        
        this.insertElement.innerText = `Меня зовут ${this.name} и я умею ${this.skill}`;
    }
    
};

Anton.showSkills()

console.log(Anton.name);