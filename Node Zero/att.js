function Produto(nome, preco) { 
            this.nome = nome; 
            this.preco = preco; 
} 

let produto1 = new Produto("Camisa", 50); console.log(produto1.nome);

//um bom exemplo de uma função construtora