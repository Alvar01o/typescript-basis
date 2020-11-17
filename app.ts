console.log("Hello!")

let a:number = 10
let b :String = "adsad"
enum LanguagesKnown {English, Spanish, Hindi}

let student = {
    Name:"Alvaro",
    Age: 30, 
    Phone: 213546,
    Language:LanguagesKnown.Hindi
}

let StudentsList = [
    {Name:"Sara", Age:26, Phone:5465487987, Language: LanguagesKnown.English},
    {Name:"Samantha", Age:22, Phone:5465487987, Language: LanguagesKnown.Spanish}    
]

StudentsList.push(student);

for (let index = 0; index < StudentsList.length; index++) {
    console.log(StudentsList[index])
}


