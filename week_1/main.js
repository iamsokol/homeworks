//difference
function difference(arr, itemsToExclude) {
	return arr.filter((el)=> !itemsToExclude.includes(el));
}
difference([2, 1, 5], [2, 3])


//groupBy
function groupBy(array, value) {
  return array.reduce((element, object) => {
    const type = object[value];
    if (!element[type]) element[type] = [];
    element[type].push(object);
    return element;
  }, {})
}
groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender');


//flatten
function flatten(array) {
	return array.flat(1);
}
flatten([1, [2, 3], 4, 5]);


//uniq
function uniq(array) {
	return [...new Set(array)];
}
uniq([2, 1, 2]);


// chunk
function chunk(array, size) {
  const result = [];
  while(array.length) result.push(array.splice(0,size));
  return result;
}
chunk(['a', 'b', 'c', 'd'], 2);
