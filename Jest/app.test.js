const sortByAge = require('./app');

test('check that first item in the list with $name `kate`', () => {
	const sortedList = sortByAge();
	expect(sortedList[0].name).toBe('kate');
});

test('check length of the list to be `4`', () => {
	const sortedList = sortByAge();
	expect(sortedList).toHaveLength(4);
});
