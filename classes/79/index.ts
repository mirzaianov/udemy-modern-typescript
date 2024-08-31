interface Queue<T> {
  enqueue(item: T): void; // поставить в очередь
  dequeue(): T | undefined; // исключить из очереди
  peek(): T | undefined | null; // посмотреть первый элемент
  isEmpty(): boolean; // проверка на "пустоту" сущности
  length(): number; // проверка на длину
}

// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно

// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"

class ArrayQueue<T> implements Queue<T> {
  // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
  private queue: T[] = [];
  // Подсказка по методам:
  // при добавлении в очередь можно выполнить метод push
  enqueue(item: T) {
    this.queue.push(item);
  }
  // при удалении - shift, так как нужно удалить первый элемент.
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    }

    return this.queue.shift() as T;
  }
  // Обратите внимание на возвращаемое значение
  peek() {
    return this.queue[0] || null;
  }
  // isEmpty может использоваться в других методах
  isEmpty() {
    return this.length() === 0;
  }
  length() {
    return this.queue.length;
  }
}

// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно

class Stack<T> {
  // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
  private stack: T[] = [];
  // Создать приватное свойство limit, которое будет типом number
  private limit: number;

  // Здесь мы установим лимит на стопку листов.
  // При переполнении стэка программа зависает, а очень высокая стопка листов падает
  // Так что лимит всегда должен быть
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  push(value: T) {
    if (this.length() + 1 > this.limit) {
      throw new Error('Stack is overflow');
    }
    // Добавляет элемент в стэк
    this.stack.push(value);
    // Если стэк переполнен - выбрасывает ошибку (throw new Error)
  }

  pop() {
    // Удаляет последний элемент массива
    if (this.length() === 0) {
      throw new Error('Stack is empty');
    }

    return this.stack.pop() as T;
    // Если в стеке пусто - выбрасывает ошибку (throw new Error)
    // При удалении элемента возвращает его
    // Простыми словами: вы берете верхний лист в стопке и используете его
    // Если на столе нет листов - получается ошибка, брать нечего
  }

  length() {
    // Возвращает кол-во элементов в стэке
    return this.stack.length;
  }

  isEmpty() {
    // Проверяет стэк на "пустоту"
    return this.length() === 0;
  }

  top() {
    // Возвращает последний (верхний) элемент стэка, но не удаляет его
    // Вы просто читаете, что написано на верхнем листе
    // Если стэк пуст - вернется null
    return this.stack[this.length() - 1] || null;
  }
}

// Для тестов

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue('5');
arrTest2.enqueue('10');
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push('20');
stackTest2.push('50');
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
