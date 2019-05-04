function groupAdultsByAgeRange(arr) {
    const under18 = 18;
    const under20 = 20;
    const under30 = 30;
    const under40 = 40;
    const under50 = 50;

    const ages = {};

    return arr.reduce((categories, currentPerson) => {
        if (currentPerson.age < under18) {
            return categories;
        }
        else if (currentPerson.age <= under20) {
            !('20 and younger' in categories) && (categories['20 and younger'] = [])
            categories['20 and younger'].push(currentPerson);
            return categories;
        }
        else if (currentPerson.age <= under30) {
            !('21-30' in categories) && (categories['21-30'] = [])
            categories['21-30'].push(currentPerson);
            return categories;
        }
        else if (currentPerson.age <= under40) {
            !('31-40' in categories) && (categories['31-40'] = [])
            categories['31-40'].push(currentPerson);
            return categories;
        }
        else if (currentPerson.age <= under50) {
            !('41-50' in categories) && (categories['41-50'] = [])
            categories['41-50'].push(currentPerson);
            return categories;
        }
        else if (currentPerson.age > under50) {
            !('51 and older' in categories) && (categories['51 and older'] = [])
            categories['51 and older'].push(currentPerson);
            return categories;
        }
    }, ages)
}

console.log(groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]))
  