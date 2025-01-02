import { QRMath } from './QRMath'

export default class QRPolynomial {
  num: any

  constructor(num: any, shift: any) {
    if (num.length == null) {
      throw new Error(`${num.length}/${shift}`)
    }

    let offset = 0
    while (offset < num.length && num[offset] === 0) {
      offset++
    }

    // eslint-disable-next-line unicorn/no-new-array
    this.num = new Array(num.length - offset + shift)
    for (let i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset]
    }
  }

  get(index: number): number {
    return this.num[index]
  }

  getLength(): number {
    return this.num.length
  }

  multiply(e: QRPolynomial): QRPolynomial {
    const num: number[] = Array.from({ length: this.getLength() + e.getLength() - 1 })

    for (let i = 0; i < this.getLength(); i++) {
      for (let j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)))
      }
    }

    return new QRPolynomial(num, 0)
  }

  mod(e: any): any {
    if (this.getLength() - e.getLength() < 0) {
      return this
    }

    const ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0))
    // eslint-disable-next-line unicorn/no-new-array
    const num = new Array(this.getLength())
    for (let i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i)
    }

    for (let i = 0; i < e.getLength(); i++) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio)
    }

    // recursive call
    return new QRPolynomial(num, 0).mod(e)
  }
}
