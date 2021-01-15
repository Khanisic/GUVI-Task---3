
// Problem 0 - A


// var cat = {
//     name: 'Fluffy',
//     activities: ['play', 'eat cat food'],
//     catFriends: [
//     {
//     name: 'bar',
//     activities: ['be grumpy', 'eat bread omblet'],
//     weight: 8,
//     furcolor: 'white'
//     }, 
//     {
//     name: 'foo',
//     activities: ['sleep', 'pre-sleep naps'],
//     weight: 3
//     }
//     ]
// }
// //1
// cat.height = '78 cms';
// cat.weight = 10;

// //2
// cat[0] = 'Fluffyy';

// //3
// for( i in cat.catFriends){
// console.log(cat.catFriends[i].activities); 
// }

// //4
// for( i in cat.catFriends){
// console.log(cat.catFriends[i].name); 
// }

// //5
// var weightFriends = 0;
// parseInt(weightFriends);
// for( i in cat.catFriends){
//     weightFriends += cat.catFriends[i].weight; 
// }
// console.log(weightFriends);

// //6
// var sum =0;
// parseInt(sum);
// for(i in cat.catFriends){
//     sum += cat.catFriends[i].activities.length;
// }
// console.log(sum + cat.activities.length);

// //7
// cat.catFriends[0].activities.push('Football','swimming');
// cat.catFriends[1].activities.push('Racing','Yarn');
// console.log(cat.catFriends);

// //8
// cat.catFriends[0].furcolor = 'Black';
// console.log(cat.catFriends[0]);


// // Problem 0 - B

// var myCar = {
//     make: 'Bugatti',
//     model: 'Bugatti La Voiture Noire',
//     year: 2019,
//     accidents: [
//     {
//     date: '3/15/2019',
//     damage_points: 5000,
//     atFaultForAccident: true
//     },
//     {
//     date: '7/4/2022',
//     damage_points: 2200,
//     atFaultForAccident: true
//     },
//     {
//     date: '6/22/2021',
//     damage_points: 7900,
//     atFaultForAccident: true
//     }
//     ]
// }
// //1
// for( i in myCar.accidents){
// myCar.accidents[i].atFaultForAccident = false;
// }
// // console.log(myCar.accidents)

// //2
// for( i in myCar.accidents){
// console.log(myCar.accidents[i].date)
// } 

// //   Problem 1

// var obj = {name : 'RajiniKanth',age : 33, hasPets : false};
// function printAllValues(obj) {
//  // your code here
// var newArray = [];
// newArray = Object.values(obj);
// console.log(newArray);

// }
// printAllValues(obj);

// //   Problem 2

// var obj = {name : 'RajiniKanth', age : 33, hasPets : false
//         };
// function printAllValues(obj) {
//  // your code here
// var newArray = [];
// newArray = Object.keys(obj);
// console.log(newArray);

// }
// printAllValues(obj);

// //   Problem 3

// var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
// function convertListToObject(obj) {
//  // your code here
// console.log(Object.entries(obj));
// }
// convertListToObject(obj);

// //    Problem 4

// var array = ['GUVI', 'I', 'am', 'Geek'];
// function transformFirstAndLast(array) {
// // your code here
// var myObject = {};
// array.forEach(function(){
// myObject[array[0]] = array[array.length-1]
    
// }
// )
// return myObject
// }
// console.log(transformFirstAndLast(array));


// //   Problem 5

// var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

// function fromListToObject(array) {

// var obj = {};

// var arr = array;
// for(var i = 0; i < array.length; i++){
//     var dataArr =arr[i];
//     for(var j= 0; j < arr[i].length; j++){
// obj[dataArr[0]] = dataArr[1]
//     }
// }
// return obj;
// }
// console.log(fromListToObject(array));

//  Problem 6

// var array = [
//     [['firstName', 'Vasanth'],['lastName', 'Raja'], ['age', 24],['role', 'JSWizard']], 
//     [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
// ];

// function transformEmployeeData(array) {

// var collection = [];
// for(var i = 0; i < array.length; i++){
//     var obj = {};
//     var dataArray =array[i];
//     for(var j= 0; j < array[i].length; j++){
//     obj[dataArray[j][0]] = dataArray[j][1]
    
//     }
//     collection.push(obj);
// }
// return collection;

// }

// console.log(transformEmployeeData(array));


// Problem 7


// var actual = {height: 185, age: 26};
// var expect = {height: 185, age: 26};
// var expect1 = {height: 160, age: 23};

// function assertObjectsEqual( actual, expected , testname){
    
//     actualString = JSON.stringify(actual);
//     expectedString = JSON.stringify(expected);
//     if(actualString == expectedString){
//     return "Passed"
// } else{
//     return "FAILED ["+testname+"] Expected "+actualString+", but got "+expectedString;
// }
// }

// console.log(assertObjectsEqual(actual,expect,'first case'));
// console.log(assertObjectsEqual(actual,expect1,'second case'));


//  Problem 8

// var securityQuestions = [
//     {
//     question: 'What was your first pet’s name?',
//     expectedAnswer: 'FlufferNutter'
//     },
// {
//     question: 'What was the model year of your first car?',
//     expectedAnswer: '1985'
//     },
//     {
//     question: 'What city were you born in?',
//     expectedAnswer: 'NYC'
//     }
// ]

// function chksecurityQuestions(securityQuestions,question, answer) { 
//     for (var i = 0; i < securityQuestions.length; i++)
//     {
//     for (keys in securityQuestions[i]){
//         if(keys == "question"){
//         if(securityQuestions[i].question == question && securityQuestions[i].expectedAnswer == answer){
//             return true;
//         }
//         }
//     }
//     }

// return false; 

// }
// var ques = 'What was your first pet’s name?';
// var ans  =  'FlufferNutter';

// var status = chksecurityQuestions(securityQuestions, ques, ans);
// console.log(status);

// var ques = 'What was your first pet’s name?';
// var ans  =  'DufferNutter';
// var status = chksecurityQuestions(securityQuestions, ques, ans);
// console.log(status);

// Problem 9

var students = [
    {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},
    {name: 'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
function returnMinors(arr)
{
    var list = [];
    for (var i = 0; i< arr.length; i++){
        if (arr[i].age < 20){
        list.push(arr[i]);
        }
    }
    return list;

}
console.log(returnMinors(students));

