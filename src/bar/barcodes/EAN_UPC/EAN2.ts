// Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

import Barcode from '../Barcode'
import { EAN2_STRUCTURE } from './constants'
import encode from './encoder'

class EAN2 extends Barcode {
  constructor(data, options) {
    super(data, options)
  }

  valid() {
    return this.data.search(/^\d{2}$/) !== -1
  }

  encode() {
    // Choose the structure based on the number mod 4
    const structure = EAN2_STRUCTURE[Number.parseInt(this.data) % 4]
    return {
      // Start bits + Encode the two digits with 01 in between
      data: `1011${encode(this.data, structure, '01')}`,
      text: this.text,
    }
  }
}

export default EAN2
