var set = new Set()
set.add(2)
set.add(1)
set.add(2)

console.log(set)

for (const value of set) {
	console.log(value)
}

var set = new Set([2,1,2]);

for (const value of set) {
	console.log(value); // 2, 1
}

var music1 = {
	title: 'O amor não tem rollback',
	autor: 'SQL'
}

var musics = new WeakSet([music1])

console.log(musics)