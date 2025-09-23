var resp = document.getElementById('saida');

//lembre-se que toda variável declarada aqui fora possui escopo global.
//let n muda a varíavel dentro dela.
//var pode mudar.

function acao1() {
    resp.textContent += 'Clicou no primeiro botão';

    var a = prompt("Informe um número");
    var compare = document.getElementById('se')

    if (a != "6") {
        compare.textContent += 'Diferença de 6';
    } else {
        compare.textContent += 'Igual de 6';
    }
}

function acao2() {
    resp.textContent += 'Clicou no segundo botão';
    var tempo = document.getElementById('switch');

    switch (prompt("Como está o tempo? Use chuvoso, ensolarado ou nublado.")) {
        case "chuvoso":
            tempo.textContent += 'Lembre-se de trazer guarda-chuva!';
            break;
        case "ensolarado":
            tempo.textContent += 'Vista roupas leves!';
            break;
        case "nublado":
            tempo.textContent += 'Vá lá fora!!!';
            break;
        default:
            tempo.textContent += 'Tempo desconhecido';
            break;
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'

    var numero = prompt("Informe um número");
    for (i = 0; i < numero; i++) {
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>';
    }
}

function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'

    var var1 = prompt("Informe um número");
    while (var1 <= 10) {
        resp.innerHTML += 'linha' + var1 + '<br/>';
        var1++;
    }
}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>'

    var var1 = prompt("Informe um número");
    do {
        resp.innerHTML += 'linha ' + var1 + '<br/>';
        var1++;
    } while (var1 <= 10);
}

function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botão</p>'

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    myArray.forEach(function (value, key) {
        resp.innerHTML += 'Chave: ' + key + 'Valor: ' + value + '<br/>'
        //document.write(value+ ' ', key + '<br/>');
        //.write reescreve toda página
        //resp.innerhtml pega os dados daqui joga lá pra cima e dps vai pro html
    });
}

function acao7() {

    var entrada = "Bem vindo " + prompt("Informe seu Nome: ");
    var saldacao = document.getElementById('titulo');
    saldacao.textContent = entrada;

    const colletion = document.getElementsByName("animal");
    for (let i = 0; i < colletion.length; i++) {
        if (colletion[i].type == "checkbox") {
            colletion[i].checked = true;
        }
    }
    //marca as caixas com a classe animal neles.

    resp.innerHTML += 'Clicou no sétimo botão'

    document.getElementsByTagName("p")[1].innerHTML = "Texto do paragrafo 2 substituido com sucesso!";
    //pega a tag 'p' a partir de 0 até 1 e modifica ele.

    var teste = document.getElementsByName("paragrafo");
    teste[1].textContent = 'Texto do paragrafo identificado por "paragrafo" na posição 1, substituido com sucesso!';
    //pega a classe 'paragrafo' a partir de 0 até 1 e modifica ele.
}

function acao8() {
    resp.innerHTML += '<p>Clicou no oitavo botão</p>'

    function calcularArea() {
        var area = 3 * 5;
        resp.innerHTML += '<h1> Área total: ' + area + '</h1>';
    }
    calcularArea();
    //se coloca o nome da função novamente para chama-lá, se n houver o nome dela, ela n é acionada, pq é uma função dentro de uma função.
}

function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>'

    var largura = prompt("Informe largura");
    var altura = prompt("Informe altura");
    //largura e altura são armazenadas dentro das variáveis.

    function getArea(width, height) {
        var calculateArea = width * height;
        return calculateArea;
        //então são mandadas dentro dessa function 'width' e 'height', calculadas numa variável, e retorna ela para a function.
    }
    var area = getArea(largura, altura);
    resp.innerHTML += '<h1>Área total ' + area + '</h1>'
    //então ela é armazenada dentro de 'area'.
    //é como se a 'function getArea' fosse a função e dentro dela é seu valor.
}

function acao10() {
    resp.innerHTML += '<p>Clicou no décimo botão</p>'

    //Set Item
    var login = ['user', '********'];
    sessionStorage.setItem("acessoOn", login);
    //Retrieve
    document.getElementById("session").innerHTML = sessionStorage.getItem("acessoOn");

}

function acao11() {
    resp.innerHTML += '<p>Clicou no décimo primeiro botão</p>'

    //Criando um objeto notação literal.
    var hotel = { //O objeto é declarado como um variável.
        nome: 'Por do Sol', //As chaves são separadas do seu valor por dois pontos. Igual ao CSS.
        quartos: 40, //Separa com vírgula cada propriedade e método.
        reservados: 25,
        piscina: true,
        tipoQuarto: ['simples', 'duplo', 'suite'],

        checkAvailability: function () {
            return this.quarto - this.reservados; //this = este objeto (objeto atual)
            //A palavra chave this indica que ele usa as propriedades deste objeto.
        }
    };

    var atrNome = document.getElementById('nome');
    atrNome.textContent = hotel.nome; //Acessando um objeto com a notação de ponto.
    //O ponto é conhecido como: Operador de membro.
    var atrQuartos = document.getElementById('quartos');
    atrQuartos.textContent = hotel.checkAvailability()
}

function acao12() {
    resp.innerHTML += '<p>Clicou no décimo segundo botão</p>'

    //Criando objeto notação de contrutor.
    var carro = new Object(); //Função do construtor object().

    carro.modelo = 'tracker'; //
    carro.ano = 2025;
    carro.fabricante = 'Chevrolet';
    carro.kmAtual = 123680;
    carro.proxTrocaOleo = 131680;

    carro.checkStatus = function () {
        return this.proxTrocaOleo - this.kmAtual;
    };

    var atrModelo = document.getElementById('modelo');
    atrModelo.textContent = carro.modelo; //Acessando um objeto com a notação de ponto.

    var atrProxTrocaOleo = document.getElementById('oleoMotor');
    atrProxTrocaOleo.textContent = carro.checkStatus();

    var atrKmAtual = document.getElementById('kmAtual');
    atrKmAtual.textContent = carro.kmAtual;

}

//Para criar um objeto vazio: var hotel = {}
//Para atualizar uma propriedade: carro.proxTrocaOleo = 313672;
//Para adicionar uma propriedade nova: hotel.playground = true;
//Para excluir uma propriedade: delete hotel.playground;

function acao13() {
    resp.innerHTML += '<p>Clicou no décimo terceiro botão</p>'

    //Notação objeto construtor.
    function Mobilia(nome, largura, altura, peso) { //Construção do template. Nome começa com letra maiúscula Informe as propriedades do objeto.

        this.nome = nome; //Usamos o this para indicar a propriedade ou método que a função criou.
        this.largura = largura;
        this.altura = altura;
        this.peso = peso;

        this.checkAreaOcupada = function () {
            return this.largura * this.altura
        }
    }
    //O this se torna útil quando você estiver criando vários objetos,
    //Usando um construtor de objeto (e se cada forma tiver dimensões diferentes)
    //this referenciará a instância individual do novo objeto que você está criando.

    //Criando vários objeos o tipo Mobília. Ou criar vários objetos semelhantes.
    //Forma padrão: var cama = new Mobília('Cama', 3, 4, 2);
    var listaObj = [
        cadeira = new Mobilia('Cadeira', 2, 1.5, 0.5),
        mesa = new Mobilia('Mesa', 3, 2, 1),
        cama = new Mobilia('Cama', 3, 4, 2)
    ];

    for (var i = 0; i < listaObj.length; i++) {
        document.getElementById('item').innerHTML += 'Item: <b>' +
            listaObj[i].nome + ' </b>' + 'Área Ocupada : <b>' + listaObj[i].checkAreaOcupada() +
            ' </b>' + 'Peso: <b>' + listaObj[i].peso + '</b> <br/>'
    }
}

function acao14() {
    resp.innerHTML += '<p>Clicou no décimo quarto botão</p>'

    var bd = 'Para conectar ao Banco de dados aprenda Node JS primeiro'


    document.getElementById('saida').innerHTML = '<h1>' + bd + '</h1>';

}