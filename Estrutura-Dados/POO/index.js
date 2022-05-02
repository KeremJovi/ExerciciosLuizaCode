/*
Exercícios POO:
Abstração - Exemplos de abstração no dia a dia, se quiser implementar pode.
Encapsulamento - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
Herança:
Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
Exercicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
Polimorfismo: Quero que vocês tentem dar novas funcionalidades para a conta poupança.



*/

const PORCENTAGEM_BONIFICACAO = 0.02;
const VALOR_COMISSAO_GERENTE = 10.0;
const VALOR_COMISSAO_VENDEDOR_UM = 5.0;
const VALOR_COMISSAO_VENDEDOR_DOIS = 3.0;
const VALOR_COMISSAO_PADRAO = 1.50;
const PORCENTAGEM_BONIFICACAO_DESENVOLVEDOR = 0.10;

class Empregado {
  constructor(nome, dataNasc, endereco, salario) {
  this._nome = nome; 
  this.dataNasc = dataNasc;
  this.endereco = endereco;
  this._salario = salario;
  }

  getSalario(){
    return this._salario;
  }

  getNome(){
    return this._nome;
  }

  setNome(nome){
    this._nome = nome;
  }

  adicionaBonificacao() {
    this._salario += this._calculoBonificacao(this._salario);
  }

  getBonificação (){
    return this._calculoBonificacao(this._salario);
     
  }
  //Esse é um exemplo de abstração 
  _calculoBonificacao(salario){
    return salario * PORCENTAGEM_BONIFICACAO;

  }
}

class Vendedor extends Empregado {
  constructor(nome, dataNasc, endereco, salario, tipo){
    super(nome, dataNasc, endereco, salario );
    this.tipo = tipo;
  }
  comissao(quantidadeVendido){
    switch (this.tipo) {
      case "gerente":
      this._salario += (quantidadeVendido * VALOR_COMISSAO_GERENTE);
        break;
      case "vendedorUm":
        this._salario += (quantidadeVendido * VALOR_COMISSAO_VENDEDOR_UM);
        break;
      case "vendedorDois":
        this._salario += (quantidadeVendido * VALOR_COMISSAO_VENDEDOR_DOIS);
        break;

      default: 
        this._salario += (quantidadeVendido + VALOR_COMISSAO_PADRAO);
        break;
    } 
  }

}

class Desenvolvedor extends Empregado {
  constructor(nome, dataNasc, endereco, salario, nivel){
    super(nome, dataNasc, endereco, salario );
    this.nivel = nivel;
  }

  promocao(tempoTrabalhado){
    if(tempoTrabalhado >= 0.6 && tempoTrabalhado <= 2){
      this.nivel = 'Junior';
    } else if (tempoTrabalhado > 2 && tempoTrabalhado <= 4){
      this.nivel = 'Pleno';
    } else if (tempoTrabalhado > 4 && tempoTrabalhado <= 6) {
      this.nivel = 'Sênior';
    } else if ( tempoTrabalhado > 6){
      this.nivel = 'Especialista';
    } else {
      this.nivel = 'Estagiário'
    }
  }

  adicionaBonificacao() {
    this._salario += this._calculoBonificacao(this._salario);
  }

  //Esse é um exemplo de abstração 
  _calculoBonificacao(salario){
    return salario * PORCENTAGEM_BONIFICACAO_DESENVOLVEDOR; 
  }

  
}

let mariaVendedora = new Vendedor('Maria', '10/02/1880', 'Rua tupi', 1000, "vendedorDois");
let joaoVendedor = new Vendedor('Joao', '10/04/1880', 'Rua tupi', 1500, "gerente");

let betin = new Desenvolvedor('Betin', '10/07/1995', 'Rua tenente', 4000, 'Pleno' );

mariaVendedora.adicionaBonificacao();
joaoVendedor.adicionaBonificacao();
betin.adicionaBonificacao();

console.log(`Salario ${mariaVendedora.getNome()} apos bonificacao: ${mariaVendedora.getSalario()}`);
console.log(`Salario ${joaoVendedor.getNome()} apos bonificacao: ${joaoVendedor.getSalario()}`);
console.log(`Salario ${betin.getNome()} apos bonificacao: ${betin.getSalario()}`);

joaoVendedor.setNome('Joao da Silva');

console.log(`Bonificação do ${joaoVendedor.getNome()} foi de ${joaoVendedor.getBonificação()}`);

mariaVendedora.comissao(10);
joaoVendedor.comissao(5);
console.log(`Salario mais comissão da vendedora ${mariaVendedora.getNome()} deu um total de: ${mariaVendedora.getSalario()}`)
console.log(`Salario mais comissão da vendedor ${joaoVendedor.getNome()} deu um total de: ${joaoVendedor.getSalario()}`)

betin.promocao(8);
console.log(`O ${betin.getNome()} possui o nivel: ${betin.nivel}` );

