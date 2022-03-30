import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Empresarial } from './Empresarial.js'
import { Conta } from './Conta.js'

const Cliente1 = new Cliente('yeda', '57036740')
const Cliente2 = new Cliente('victor', '08367852400')

const ContaCorrente1 = new ContaCorrente(1000, '001', Cliente1)

const ContaCorrente2 = new ContaCorrente(500, '002', Cliente2)

const Conta1 = new ContaCorrente(1000, '001', Cliente1)
const Conta2 = new ContaPoupanca(500, '003', Cliente2)
const Conta3 = new Empresarial(500, '004', Cliente)

console.log(Conta2)
