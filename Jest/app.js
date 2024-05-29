const list = [
	{ name: 'kate', age: 25 },
	{ name: 'Deer', age: 28 },
	{ name: 'Antony', age: 30 },
	{ name: 'Andy', age: 26 },
];

function sortByAge() {
	list.sort((a, b) => a.age - b.age);
	return list;
}

console.log(sortByAge());

module.exports = sortByAge;
