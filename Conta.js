export class Conta {
  constructor(saldo, agencia, cliente) {
    this.saldo = saldo
    this.agencia = agencia
    this.cliente = cliente
  }
  sacar(valorParaSaque) {
    if (this.saldo < valorParaSaque) {
      console.log('Voce nao pode sacar mais do que voce tem')
    } else {
      this.saldo -= valorParaSaque
      console.log(`Dinheiro sacado com sucesso, Seu saldo eh de ${this.saldo}`)
      return valorParaSaque
    }
  }
  depositar(valorParaDeposito) {
    if (valorParaDeposito <= 0) {
      console.log('Digite um valor acima de 0 para deposito')
    } else {
      this.saldo += valorParaDeposito
      console.log(
        `Dinheiro depositado com sucesso, Seu saldo eh de ${this.saldo}`
      )
      return valorParaDeposito
    }
  }
  transferir(valorParaTransferencia, conta) {
    if (valorParaTransferencia <= 0) {
      console.log(
        `Voce nao pode transferir o que nao tem, seu saldo eh de ${this.saldo}`
      )
    } else {
      const valorSacado = this.sacar(valorParaTransferencia)
      console.log(valorSacado)
      conta.depositar(valorSacado)
      console.log(
        `Valor de ${valorParaTransferencia} foi transferido para ${this.cliente.nome}`
      )
    }
  }
}
