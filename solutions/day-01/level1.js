const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

let emptyArr = []
let arrWithElements = Array(5).fill(1)

let arrWithElementsLength = arrWithElements.length

let firstElement = arrWithElements[0]
let middleElement = arrWithElements[2]
let lastElement = arrWithElements[4]

let mixedDataTypes = [
    "myNameIsPhil",
    128,
    301,
    {country : 'Korea', city: 'Suwon'},
    { skills: ["C", "Python", "Django", "Backends"]}
]

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("IT Companies :", itCompanies)

let lastIndex = itCompanies.length - 1

firstCompany = itCompanies[0]
middleCompany = itCompanies[itCompanies.length / 2]
lastCompany = itCompanies[lastIndex]

