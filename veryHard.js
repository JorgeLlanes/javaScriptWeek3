
// class Person {                                               // <--First Try
//     constructor(name, job, age) {
//         this.name = name;
//         this.job = job;
//         this.age = age;

//     }

// }


// let person = new Person('Jorge', 'Coder', '23');

// person.exercise = function () {
//     console.log("I dont RUN!");
// };

// person.exercise();

// person.fetchJob = function () {
//     console.log(`${this.name} is a back-end developer`);
// }
// person.fetchJob();



class Person {                                              // <-- After Dyl class
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log("I DONT RUN!");
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }



}

const person = new Person("Jorge", "Coder", 23)
person.exercise()
person.fetchJob();


//////

class Programmer extends Person {

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = [languages];
        this.busy = true;

    };


    completeTask() {
        this.busy = false;

    };

    acceptNewTask() {
        this.busy = true;

    };



    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
        else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        };
    };


    learnLanguages(lang) {
        this.languages.push(lang)
        console.log(`${this.name} has learned a new language, ${lang}`)


    };

    listLanguages() {
        console.log(`${this.name} knows this languages ${this.languages}`);
    };


};

const programmer = new Programmer("Jorge", "Coder", 24, "javascript");
programmer.listLanguages();
programmer.offerNewTask();


const programmer1 = new Programmer("Jesse james", "Bandit", 31, "Python");
programmer1.listLanguages();
programmer1.offerNewTask();
programmer1.learnLanguages('jave');
programmer1.learnLanguages('python');



const programmer2 = new Programmer("Kobe", "Baller", 24, "Mamba")
programmer2.listLanguages();
programmer2.offerNewTask();



































