const name = 'Erandir';
console.log(`Welcome, ${name}`)

const n1 = 1, n2 = 2

console.log(`${n1} + ${n2} = ${n1 + n2}`)

const hours = new Date().getHours() 
const message = defineMessage`${""} ${hours} o'clock`

function defineMessage(strings, ...values) {
	const hour = values[1]

	if (hour > 12 && hour <= 18) {
		values[0] = `Good afternoon`
	} else if (hour > 18 && hour > 6) {
		values[0] = `Good night`
	} else {
		values[0] = `Good morning`
	}

	values[0] = `${values[0]}, It's `;

	return `${values[0]}${strings[0]}${hour}${strings[2]}`
}

console.log(message)