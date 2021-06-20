const Data = {
    name: 'Urmat',
    age: 41,
    parents: {
        parent1: "Father",
        parent2: "mother"
    }
};

// console.log(Data);

const newObj = JSON.parse(JSON.stringify(Data));
newObj.parents.parent1 = "Urmat";

console.log(JSON.stringify(Data));
console.log(JSON.parse(JSON.stringify(Data)));
console.log(newObj);