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
ShowPersons(StudentsList);
//# sourceMappingURL=app.js.map