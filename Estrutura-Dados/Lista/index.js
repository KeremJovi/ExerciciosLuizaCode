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
      } else if (this.length === 1) { // Se tiver apenas um nó ele será excluido
        const nodeToRemove = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return nodeToRemove;
        
      } else { //Esse fará as comparações para ver qual nó será excluido 
        // inicia o ponteiro na cabeçã
        let currentNode = this.head;
        // Nó que será removido
        let nodeToRemove = this.tail;
        // essa passa a ser a nova cauda
        let secondToLastNode;
  
        while (currentNode) { // Vefica o valor que está na cabeça 
          if (currentNode.next === this.tail) { // Verifica se a proxima cabeça é igual a refenrencia da calda
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
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
  
      this.length++;
    }
  
    get(index) {
      if (index < 0 || index > this.length || this.isEmpty()) {
        return null;
      }
  
      if (index === 0) {
        return this.head;
      }
  
      if (index === this.length - 1) {
        return this.tail;
      }
  
      let currentNode = this.head;
      let interator = 0;
      while (interator < index) {
        interator++;
        currentNode = currentNode.next;
      }
  
      return currentNode;
    }
  }
  
  const list = new LinkedList();
  
  list.push(5);
  list.push(8);
  list.push(10);
  list.pop(1);
  list.get(1);
  