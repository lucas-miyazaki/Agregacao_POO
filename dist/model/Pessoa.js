"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _anoNascimento) {
        this.nome = _nome;
        this.anoNascimento = _anoNascimento;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setAnoNascimento(_anoNascimento) {
        this.anoNascimento = _anoNascimento;
    }
    getAnoNascimento() {
        return this.anoNascimento;
    }
}
exports.Pessoa = Pessoa;
console.clear();
//# sourceMappingURL=Pessoa.js.map