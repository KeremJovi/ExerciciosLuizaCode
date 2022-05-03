/**
 * Exercicio 1 - Colocarem pessoas na fila, tirarem da fila e verem como a fila fica.
 */
class Queue {
  constructor() {
    this.fila = [];
  }

  // retorna o tamanho da fila
  get length() {
    return this.fila.length;
  }
  // verifica se a fila está vazia
  isEmpty() {
    return this.length === 0;
  }
  //adiciona elementos
  enqueue(item) {
    this.fila.push(item);
  }

  //remove o primeiro elemento
  dequeue() {
    this.fila.shift();
  }
  // vizualiza o primeiro elemento
  peek() {
    return this.fila[0];
  }

  /******************************************/
  //Execução do exercicio solicitado

  //Foi criado um novo método que percorre o array de nomes e vai adicionando eles na lista.
  enqueueList(itenList) {
    itenList.forEach((element) => {
      this.enqueue(element);
    });
  }
}

const queue = new Queue();
let nomes = ["thais", "breno", "bia"];

queue.enqueue("Kerem");
queue.enqueueList(nomes);

console.log(queue);
console.log(queue.peek());
console.log(queue.length);

while (!queue.isEmpty()) {
  queue.dequeue();
}

console.log(queue);
