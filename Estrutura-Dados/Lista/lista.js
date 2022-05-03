/**
 * Abrir o site https://pythontutor.com/javascript.html,
 * coloque a implementação lá e descreva ou resuma o que vc entendeu
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //ELe retornar true se a length do LinkedList for igual a Zero.
  isEmpty() {
    return this.length === 0;
  }

  //Esse método exclui um nó
  pop() {
    //Faz a verficação se a lista é vazia
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      // Se tiver apenas um nó ele será excluido
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      //Esse fará as comparações para ver qual nó será excluido
      // inicia o ponteiro na cabeçã
      let currentNode = this.head;
      // Nó que será removido
      let nodeToRemove = this.tail;
      // essa passa a ser a nova cauda
      let secondToLastNode;

      while (currentNode) {
        // Vefica o valor que está na cabeça
        if (currentNode.next === this.tail) {
          // Verifica se a proxima cabeça é igual a refenrencia da calda
          secondToLastNode = currentNode; // Adiciona a referencia do nó verificado como sendo a nova calda
          break;
        }
        currentNode = currentNode.next; // Adiciona a referencia do proximo nó a Cabeça.
      }

      secondToLastNode.next = null; // Inicia a variavel nula
      this.tail = secondToLastNode; // Adiciona o valor na calda
      this.length--; // Retira uma posição da lista

      return nodeToRemove; // Retorna o nó que foi removido
    }
  }

  //Método que adiciona os nós
  push(value) {
    const node = new Node(value); // cria um novo nó que recebe um valor

    if (this.isEmpty()) {
      //Verifica se a lista está vazia, se sim atribui o nó a esses atributos
      this.head = node;
      this.tail = node;
    } else {
      // Se não estiver vazio ele adiciona a referencia no next da calda e na propria calda
      this.tail.next = node;
      this.tail = node;
    }

    this.length++; // Adiciona mais uma posição
  }

  //Ele retorna o nó de acordo com o indice informado.
  get(index) {
    // Verifica se o valor de index menor que 0 ou que o valor de index é maior que a quantidade de nós no LinkedList ou se a nossa lista está vazia
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null; // se sim retorna vazio
    }

    if (index === 0) {
      // Verifica se nosso index está vazio
      return this.head; // se sim retorna a cabeça do nó
    }

    if (index === this.length - 1) {
      // verifica se nosso index possui valor igual ao ultimo nó da lista
      return this.tail; // se sim retorna a calda do nó
    }

    let currentNode = this.head; // Atribui o valor da cabeça do nó da variavel correntNode
    let interator = 0; // INicia o contador com valor zero

    // Cria uma condicional para verificar se o valor do contator é menor que o valor do index e faz essa verificação até ela não ser mais verdade
    while (interator < index) {
      interator++; // enquanto o intereador for menor ele vai adicionar mais 1 ao interator
      currentNode = currentNode.next; // e atribui o valor da proxima cabeça ao correntNode
    }

    return currentNode; // retorna o Nó que foi solicitado pelo valor do index
  }
}

const list = new LinkedList(); // Cria um novo objeto

list.push(5); // adiciona valor ao método push
list.push(8); // adiciona valor ao método push
list.push(10); // adiciona valor ao método push
list.pop(1); // Faz a exclusão de um nó de acordo com o valor informado
list.get(1); // Retorna um nó de acordo com o Indice informado
