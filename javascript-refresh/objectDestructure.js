
// object destructuring..

const person = {
    name: 'Shaun',
    email: 'ninja@.co.uk',
    greet() {
        console.log('Hey shaun.!');
    }
}

const getpersonName = ({name}) => {console.log(name)};

const {name, email} = person;

console.log(name, email);

getpersonName(person);


// Array Destaructuring..

const names = ['Shaun', 'Ryu', 'Mario'];

const [name1, name2, name3] = names;

console.log(name1, name2, name3);