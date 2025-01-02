// Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

import Barcode from '../barcode'

class MSI extends Barcode {
  constructor(data, options) {
    super(data, options)
  }

  encode() {
    // Start bits
    let ret = '110'

    for (let i = 0; i < this.data.length; i++) {
      // Convert the character to binary (always 4 binary digits)
      const digit = Number.parseInt(this.data[i])
      let bin = digit.toString(2)
      bin = addZeroes(bin, 4 - bin.length)

      // Add 100 for every zero and 110 for every 1
      for (let b = 0; b < bin.length; b++) {
        ret += bin[b] == '0' ? '100' : '110'
      }
    }

    // End bits
    ret += '1001'

    return {
      data: ret,
      text: this.text,
    }
  }

  valid() {
    return this.data.search(/^\d+$/) !== -1
  }
}

function addZeroes(number, n) {
  for (let i = 0; i < n; i++) {
    number = `0${number}`
  }
  return number
}

export default MSI
