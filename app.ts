console.log('Objects destructuring');

/// simple object
let obj1 = {
    myName:'abid',
    age:24,
    course:'Typescript',
    city:'Karachi',
    state:true
}
// access obj values
console.log(obj1.myName)// abid
console.log(obj1.course) // Typescript
// or
console.log(obj1["city"]) // Karachi
console.log(obj1['state'])// true


// Desctrcturing
let {myName, course} = obj1;
console.log(myName);
console.log(course);
console.log(city); //error because city is not defined


// // destructuring full object
// let {myName,age,course,city,state} = obj1;
// console.log(myName);
// console.log(city);
// console.log(course)
