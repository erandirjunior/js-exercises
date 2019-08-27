var names = [
	'maria', 
	'josé', 
	'joão'
]

function showName(name) {
	console.log(name)
}

names.forEach(showName)

var channels = [
	"Globo", 
	"Sbt", 
	"Record"
]

// the values are precessed before callback execute
channels.forEach(function(channel) {
	channels.push('RedeTV') // ignored
	console.log(channel)
})

console.log(channels)

var numbers = [1,2,3]

// This does not modify the original array
var numbersDoubled = numbers.map(function(number) {
	return number * 2
})

console.log(numbersDoubled)

var students = [
	{name: 'joão', age: 15},
	{name: 'josé', age: 18},
	{name: 'maria', age: 20}
];

var adults = students.filter(function(student) {
	return student.age >= 18
})

console.log(adults)

// Return the first clause
var studentJose = students.find(function(student) {
	return student.name === 'josé'
})

console.log(studentJose)

// Check if all values meet the clause 
var areAllAdults = students.every(function(student) {
	return student.age >= 18
})

console.log(areAllAdults)

var weightBags = [12,32,21,29];

// Check if some value meet the clause 
var hasOverweightBags = weightBags.some(function(bag) {
	return bag > 30
})

console.log(hasOverweightBags)

var sum = 0

sum = numbers.reduce(function(sum, number) {
	return sum + number
})

console.log(sum)

var names = []

var studentNames = students.reduce(function(namesArray, studentName) {
	namesArray.push(studentName.name)
	return namesArray
}, [])

console.log(studentNames)