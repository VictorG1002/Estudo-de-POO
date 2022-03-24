import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const Cliente1 = new Cliente('yeda', '57036740')
const Cliente2 = new Cliente('victor', '08367852400')

const ContaCorrente1 = new ContaCorrente(1000, '001', Cliente1)

const ContaCorrente2 = new ContaCorrente(500, '002', Cliente2)

ContaCorrente1.transferir(600, ContaCorrente2)

console.log(ContaCorrente1)
console.log(ContaCorrente2)
