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
console.log("Number of IT Companies :", itCompanies.length)

let lastIndex = itCompanies.length - 1

firstCompany = itCompanies[0]
middleCompany = itCompanies[itCompanies.length / 2]
lastCompany = itCompanies[lastIndex]
console.log("first element of IT Companies :", firstCompany)
console.log("middle element of IT Companies :", middleCompany)
console.log("last element of IT Companies :", lastCompany)

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

itCompanies[0] = "FACEBOOK"
console.log(itCompanies[0])
itCompanies[1] = "GOOGLE"
console.log(itCompanies[1])
itCompanies[2] = "MICROSOFT"
console.log(itCompanies[2])
itCompanies[3] = "APPLE"
console.log(itCompanies[3])
itCompanies[4] = "IBM"
console.log(itCompanies[4])
itCompanies[5] = "ORACLE"
console.log(itCompanies[5])
itCompanies[6] = "AMAZON"
console.log(itCompanies[6])

console.log(itCompanies.join(", "))

check_string = "company"

let index = itCompanies.indexOf('check_string')

if(index != -1){
    log.console(itCompanies[index])
}
else{
    log.console("not found")
}

sortedArray = itCompanies.sort()
reversedArray = itCompanies.reverse()
firstThreeCompany = itCompanies.slice(0, 3)
lastThreeCompany = itCompanies.slice(3, 6)

removeFirstCompany = itCompanies.splice(0,1)
removeMiddleCompany = itCompanies.splice(3,4)
removeLastCompany = itCompanies.pop()

removeAllCompany = itCompanies.splice()
