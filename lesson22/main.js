// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0)
    continue
  console.log(i);
}

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.
function factorial () {
  const number = +prompt("Введите число: ", 1)
  
  if (isNaN(number)) {
    alert('Некорректное число')
    return
  }

  if (number < 1) {
    alert('Число должно быть больше или равно 1')
    return
  }

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  alert(`Факториал числа ${number} равен ${result}`)
}
factorial()


// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.
function  doska() {
  let result = ''
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if (i % 2 == 1 && j % 2 == 1) result += '#'
      if (i % 2 == 1 && j % 2 == 0) result += '*'
      if (i % 2 == 0 && j % 2 == 1) result += '*'
      if (i % 2 == 0 && j % 2 == 0) result += '#'
    }
    result += '\n'
  }
  console.log(result);
}
doska()
