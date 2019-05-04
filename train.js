// function groupAdultsByAgeRange(arr) {
//     const under18 = 18;
//     const under20 = 20;
//     const under30 = 30;
//     const under40 = 40;
//     const under50 = 50;

//     const ages = {};
//     const arr17Up = arr.filter(person => person.age >= 18);
//     if(arr17Up.length === 0){return ages;}

//     var o =  {'20 and younger' : arr17Up.filter(person => person.age <= 20), 
//         '21-30': arr17Up.filter(person => person.age >20 && person.age <= 30), 
//         '31-40' :  arr17Up.filter(person => person.age >30 && person.age <= 40), 
//         '41-50' : arr17Up.filter(person => person.age >40 && person.age <= 50), 
//         '51 and older' : arr17Up.filter(person => person.age >= 51)};
    
//     return Object.entries(o).reduce(function (previous, pair) {
//         const [key, value] = pair;
//         console.log("pair" + pair);
//         console.log("key" + key);
//         console.log("value" + value);
//         // console.log(o[key].value);
//         // if(o[key].value !== []){ 
//         //     return previous + o[key].value;
//         // }
//         // return previous;
        
//     }); 

   
// }
// console.log(groupAdultsByAgeRange([
//     { name: "pete", age: 10 },
//     { name: "dove", age: 17 },
//     { name: "dave", age: 18 },
//     { name: "hall", age: 19 },
//     { name: "donn", age: 20 },
//     { name: "cloe", age: 31 },
//     { name: "dart", age: 39 },
//     { name: "this", age: 40 },
//     { name: "dame", age: 41 },
//     { name: "henk", age: 49 },
//     { name: "anna", age: 50 },
//     { name: "olga", age: 51 },
//     { name: "bert", age: 52 },
//     { name: "oldd", age: 120 },
//   ]))
// const result2 = { 
//     '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
//     '41-50': [],
//     '51 and older': [ { name: 'Hank', age: 60 } ] 
//   }


function g(){
    var test = new Promise(function(resolve, reject){
        resolve('done1');
    });

    var test2 = new Promise(function(resolve, reject){
        resolve('done2');
    });

    test.then(function(data) {
        console.log(data);
        return test2;
    }).then(resultOfTest2 => doSomething)
    .then(function(data) {
    console.log(data);
    });
}