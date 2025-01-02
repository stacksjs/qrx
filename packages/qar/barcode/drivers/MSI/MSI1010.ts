import { mod10 } from './checksums'
import MSI from './MSI'

class MSI1010 extends MSI {
  constructor(data, options) {
    data += mod10(data)
    data += mod10(data)
    super(data, options)
  }
}

export default MSI1010
