
const marks = [34, 67, 34, 67];

const newMarks = [...marks, 25, 78];

console.log(newMarks);

const toArray = (...args) => {
    console.log('Number of argumnet passed', args.length)
    return args;
};

console.log('new aray is', toArray(1, 3, 6, 9));