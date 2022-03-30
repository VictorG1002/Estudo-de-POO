import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
  constructor(saldo, agencia, cliente) {
    super(saldo, agencia, cliente)
  }

  depositar(valorParaDeposito) {
    if (valorParaDeposito <= 500) {
      console.log('Digite um valor acima de 500 para abrir uma Conta Poupaca')
    } else {
      this.saldo += valorParaDeposito
      console.log(
        `Dinheiro depositado com sucesso, Seu saldo eh de ${this.saldo}`
      )
      return valorParaDeposito
    }
  }
}
