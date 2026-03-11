// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
console.log('Task 1\n');
const me = {
  name: 'Vadim',
  age: 28,
  status: 'Aroken student'
}
for (let key in me)
  console.log(`${key}: ${me[key]}`);
console.log('\n-------------');


// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
console.log('Task 2\n');
const isEmpty = (obj) => {
  let keysAmount = 0
  for (let key in obj)
    keysAmount++
  return keysAmount === 0 ? true : false
}
obj1 = {}
obj2 = { name: 'Vadim' }
console.log(isEmpty(obj1));
console.log(isEmpty(obj2));
console.log('\n-------------');

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
console.log('Task 3\n');
const task = {
  title: 't',
  description: 'd',
  isCompleted: true
}
const modifications = { prepod: 'Тамара Петровна' }
const cloneAndModify = (object, modifications) => ({ ...object, ...modifications })
console.log(cloneAndModify(task, modifications))
console.log('\n-------------');


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
console.log('Task 4\n');
function callAllMethods(myObject) {
  for (let key in myObject)
    if (typeof myObject[key] === 'function')
      myObject[key]()
}

const funcObject = {
  func1: () => console.log('func1'),
  func2: () => console.log('func2'),
  b: 'Это не метод'
}

callAllMethods(funcObject)
