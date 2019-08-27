var witches = [
	'Harry Potter',
	'Hermione Granger',
	'Rony Weasley'
]

var iteratorWitches = witches[Symbol.iterator]()

console.log(iteratorWitches.next())
console.log(iteratorWitches.next())
console.log(iteratorWitches.next())
console.log(iteratorWitches.next())