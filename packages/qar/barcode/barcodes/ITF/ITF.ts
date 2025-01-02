import Barcode from '../barcode'
import { BINARIES, END_BIN, START_BIN } from './constants'

class ITF extends Barcode {
  valid() {
    return this.data.search(/^(\d{2})+$/) !== -1
  }

  encode() {
    // Calculate all the digit pairs
    const encoded = this.data
      .match(/.{2}/g)
      .map(pair => this.encodePair(pair))
      .join('')

    return {
      data: START_BIN + encoded + END_BIN,
      text: this.text,
    }
  }

  // Calculate the data of a number pair
  encodePair(pair) {
    const second = BINARIES[pair[1]]

    return BINARIES[pair[0]]
      .split('')
      .map((first, idx) => (
        (first === '1' ? '111' : '1')
        + (second[idx] === '1' ? '000' : '0')
      ))
      .join('')
  }
}

export default ITF
