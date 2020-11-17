console.log("Hello!")

let a:number = 10
let b :String = "adsad"
enum LanguagesKnown {English, Spanish, Hindi}

interface StudentInfo {
    Name:string,
    Age:number,
    Phone:number,
    Language:string
}

let student:StudentInfo = {
    Name:"Alvaro",
    Age: 30, 
    Phone: 213546,
    Language:LanguagesKnown[LanguagesKnown.Hindi]
}

let StudentsList:StudentInfo[] = [
    {Name:"Sara", Age:26, Phone:5465487987, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name:"Samantha", Age:22, Phone:5465487987, Language: LanguagesKnown[LanguagesKnown.Spanish]}    
]

StudentsList.push(student);

function ShowPersons(persons: any[]) {
    for (let index = 0; index < persons.length; index++) {
        console.log(persons[index])
    }
}

function getNumbers (...nums:number[]) {
    nums.forEach(element => {
        console.log("Number:" + element)
    });
}


ShowPersons(StudentsList);

console.log("---------------------------")
getNumbers(1,2,3,4,5,6,7,8);

console.log("---------------------------")
function GetInfo(info:string = "Happy") {
    console.log(info)
}

GetInfo("Alvaro");
GetInfo();

console.log("---------------------------")

let StudentName = function (fName:string, lName:string) {
    return fName + "..."+ lName;
}

console.log(StudentName("Alvaro" , "Mercado"));

let StudentName2 =(fName:string, lName:string)=>{
    return fName + "..."+ lName;
}

console.log(StudentName2("El" , "Pepe"));

