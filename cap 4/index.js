// Work with key and value
var map = new Map()
function func(){}
var object = {};

map.set('str', "I'm string")
map.set(func, "I'm function")
map.set(object, "I'm object")

console.log(map.get('str'))
console.log(map.get(func))
console.log(map.get(object))
console.log('Length: ' + map.size)
console.log('Has: ' + map.has('str'))
console.log('Has: ' + map.has(object))

map.delete('str')

console.log(map.has('str'))

map.clear()

console.log(map.size)

var map = new Map();
map.set('um', 1);
map.set('dois', 2);
map.set('três', 3);

for (var key of map.keys()) {
	console.log(key)
}

for (var value of map.values()) {
	console.log(value)
}

// Look like with Map, but the keys should be objects
var weakMap = new WeakMap();
var element1 = window;
var element2 = document.querySelector('body');

weakMap.set(element1, "I'm element1")
weakMap.set(element2, "I'm element2")

console.log(weakMap.get(element1))
console.log(weakMap.get(element2))

element2.parentNode.removeChild(element2);
element2 = null;

console.log(weakMap.get(element2))
