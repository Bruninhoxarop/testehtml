//Criando seus próprios modulos
exports.dataHora = (function (){
    return Date();
}());
console.log(this.dataHora);