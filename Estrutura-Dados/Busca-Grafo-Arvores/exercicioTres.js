/* Dado um grafo que represente uma árvore genealógica (não necessariamente uma árvore: https://adrianmejia.com/images/the-simpsons-family-tree.png),
implemente um método para decidir se duas pessoas são parentes ou não:

`areRelated(personA, personB)` -> `True` or `False` */



/*
1. Implemente a Busca em Profundidade (DFS)
2. Implemente a Busca em Largura (BFS)
*/


class Graph {
    constructor() {
        this.adjacencies = new Map();
    }

    addNode(value) {
        this.adjacencies.set(value, []);
    }

    addVertex(a, b) {
        this.adjacencies.get(a).push(b);
        this.adjacencies.get(b).push(a);
    }

    dfs() {
        // TODO:
    }

    bfs() {
        // TODO:
    }

    toString() {
        let result = "";
        for (let node of this.adjacencies.keys()) {
            result += `${node} -> ${this.adjacencies.get(node)}\n`;
        }
        return result;
    }
}

let g = new Graph();

g.addNode("a");
g.addNode("b");

g.addVertex("a", "b");

console.log(g.toString());