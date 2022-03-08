//Example:
function findFirstNumberGreaterThan10() {
  const nums = [5, 2, 1, 76, 12]
  
  return nums.find(num => num > 10) 
}

function findFirstNumberLessThan10() {
  const nums = [12, 34, 5, 12, 99]
  return nums.find(num => num < 10) 
  }
  //TODO: Use items.find to return the first item in the array with a quantity of 1


function findFirstItemWithQuantityOne() {
  const items = [
    { item: 'apple', quantity: 2 },
    { item: 'orange', quantity: 10 },
    { item: 'banana', quantity: 1 },
    { item: 'lemon', quantity: 2 }
  ]
  return items.find(item => item.quantity < 2)
  //TODO: Use items.find to return the first item in the array with a quantity of 1
}

function findIndexTom() {
  const names = ['bob', 'jane', 'tom', 'fred']
  
  return names.indexOf('tom')
  //TODO: Use names.findIndex to return the index of 'tom' in the array
}

function findIndexLemon() {
  const items = [
    { item: 'apple', quantity: 2 },
    { item: 'orange', quantity: 10 },
    { item: 'banana', quantity: 1 },
    { item: 'lemon', quantity: 2 }
  ]
  return items.findIndex(item => item.item === 'lemon')
  //TODO: Use items.findIndex to return the index of the item 'lemon' in the array
}

function allOver100() {
  const nums = [13, 16, 99, 101, 2001, 198, 10]
  
  return nums.filter(num => num > 100);
  //TODO: Use nums.filter to return an array containing every item nums that is over 100
}

function startsWithM() {
  const names = ['Matt', 'Bob', 'Marie', 'Fred', 'Mike', 'Charles']
  
  return names.filter(name => name.charAt(0) === 'M')
  //TODO: Use names.filter to return an array containing every name starting with an 'M'
}

function horrorFilms() {
  const films = [
    { 
      name: 'The Manor',
      genre: 'Horror'
    },
    { 
      name: 'Dune',
      genre: 'SciFi'
    },
    { 
      name: 'Dont Look Up',
      genre: 'Comedy'
    },
    { 
      name: 'In Ehe Earth',
      genre: 'Horror'
    },
  ]
  return films.filter(films => films.genre === 'Horror');
  //TODO: Use films.filter to return an array containing all horror films
}

function doubleEachNumber() {
  const nums = [1, 10, 100, 1000]
  
  return nums.map(x => x * 2)
  //TODO: Use nums.map to return an array containing each number doubled
}

function sumNumbers() {
  const nums = [1, 10, 100, 1000]
  
  return nums.reduce((a, b) => a + b)
  //TODO: Use nums.reduce to return the sum of all items in the array
}

function findLargest() {
  const nums = [341, 120, 9121, 862]

  return nums.reduce((a, b ) => Math.max(a, b))
  //TODO: Use nums.reduce to return the largest number in the array
}

module.exports = {
  findFirstNumberGreaterThan10 : findFirstNumberGreaterThan10,
  findFirstNumberLessThan10 : findFirstNumberLessThan10,
  findFirstItemWithQuantityOne : findFirstItemWithQuantityOne,
  findIndexTom : findIndexTom,
  findIndexLemon : findIndexLemon,
  allOver100 : allOver100,
  startsWithM : startsWithM,
  horrorFilms : horrorFilms,
  doubleEachNumber: doubleEachNumber,
  sumNumbers: sumNumbers,
  findLargest: findLargest
}