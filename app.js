"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
//// <reference path="./StudentCalc.ts" />
console.log("Hello!");
var a = 10;
var b = "adsad";
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Spanish"] = 1] = "Spanish";
    LanguagesKnown[LanguagesKnown["Hindi"] = 2] = "Hindi";
})(LanguagesKnown || (LanguagesKnown = {}));
var student = {
    Name: "Alvaro",
    Age: 30,
    Phone: 213546,
    Language: LanguagesKnown[LanguagesKnown.Hindi]
};
var StudentsList = [
    { Name: "Sara", Age: 26, Phone: 5465487987, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Samantha", Age: 22, Phone: 5465487987, Language: LanguagesKnown[LanguagesKnown.Spanish] }
];
StudentsList.push(student);
function ShowPersons(persons) {
    for (var index = 0; index < persons.length; index++) {
        console.log(persons[index]);
    }
}
function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number:" + element);
    });
}
ShowPersons(StudentsList);
console.log("---------------------------");
getNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log("---------------------------");
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo("Alvaro");
GetInfo();
console.log("---------------------------");
var StudentName = function (fName, lName) {
    return fName + "..." + lName;
};
console.log(StudentName("Alvaro", "Mercado"));
var StudentName2 = function (fName, lName) {
    return fName + "..." + lName;
};
console.log(StudentName2("El", "Pepe"));
console.log("---------------------------");
/**********************CLASSES */
var s = new Student_1["default"]("Someone", "fname");
console.log(s.GetFullname());
//console.log("---------------------------")
//let calc = StudentCalc.AnnualFeeCalc(100, 200);
//console.log(calc);
