import './style.css';
// import { setupCounter } from './counter';

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

export interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'Eugene',
  id: 0,
};

// =======Если прокидываем отдедьный тип============
function greet(a: string, b: number, c: boolean) {}
greet('hellow', 0, true);

// =======Если прокидываем массив  строк============
//==== a: Array<string> можно ещё так описать массив строк======
function arrayString(a: string[]) {
  console.log(a);
}
arrayString(['511']);

// =======Если прокидываем массив  чисел============
//==== a: Array<string> можно ещё так описать массив строк======
function arrayNumber(a: number[]) {
  console.log(a);
}
arrayNumber([511]);

//==== Так можем указывать что ждём один элемент в массиве======
function oneMember(a: [number]) {
  console.log(a);
}
oneMember([511]);

// ===== Работа с объектами ==========
interface Coords {
  x: number;
  y: number;
}

function getCoords(cords: Coords) {
  return `x:${cords.x}, y:${cords.y}`;
}

// ==== "?" - означает что значение опциональное, может быть , а может нет ====
interface Car {
  id: number;
  name: string;
  location?: string;
}

const car: Car = {
  id: 5,
  name: 'BMW',
};

car.location;

// ==== "|" - означает что значение может быть или число или строка ====

function handleId(id: string | number) {
  if (typeof id === 'number') {
    return `${id} число`;
  } else if (typeof id === 'string') {
    return `${id} строка`;
  }
}
console.log(handleId('5'));
console.log(handleId(7));

// INTERFACE - обычно используют для объектов

function canPerformAction(
  action: 'create' | 'update',
  entity: 'user' | 'post'
) {}

canPerformAction('create', 'user');
