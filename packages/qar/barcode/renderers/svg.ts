import merge from '../help/merge'
import { calculateEncodingAttributes, getMaximumHeightOfEncodings, getTotalWidthOfEncodings } from './shared'

const svgns = 'http://www.w3.org/2000/svg'

class SVGRenderer {
  document: Document
  svg: SVGElement
  encodings: any[]
  options: any

  constructor(svg: SVGElement, encodings: any[], options: any) {
    this.svg = svg
    this.encodings = encodings
    this.options = options
    this.document = options.xmlDocument || document
  }

  render(): void {
    let currentX = this.options.marginLeft

    this.prepareSVG()
    for (let i = 0; i < this.encodings.length; i++) {
      const encoding = this.encodings[i]
      const encodingOptions = merge(this.options, encoding.options)

      const group = this.createGroup(currentX, encodingOptions.marginTop, this.svg)

      this.setGroupOptions(group, encodingOptions)

      this.drawSvgBarcode(group, encodingOptions, encoding)
      this.drawSVGText(group, encodingOptions, encoding)

      currentX += encoding.width
    }
  }

  prepareSVG(): void {
    // Clear the SVG
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild)
    }

    calculateEncodingAttributes(this.encodings, this.options)
    const totalWidth = getTotalWidthOfEncodings(this.encodings)
    const maxHeight = getMaximumHeightOfEncodings(this.encodings)

    const width = totalWidth + this.options.marginLeft + this.options.marginRight
    this.setSvgAttributes(width, maxHeight)

    if (this.options.background) {
      this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute(
        'style',
        `fill:${this.options.background};`,
      )
    }
  }

  drawSvgBarcode(parent, options, encoding) {
    const binary = encoding.data

    // Creates the barcode out of the encoded binary
    let yFrom
    if (options.textPosition === 'top') {
      yFrom = options.fontSize + options.textMargin
    }
    else {
      yFrom = 0
    }

    let barWidth = 0
    let x = 0
    for (let b = 0; b < binary.length; b++) {
      x = b * options.width + encoding.barcodePadding

      if (binary[b] === '1') {
        barWidth++
      }
      else if (barWidth > 0) {
        this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent)
        barWidth = 0
      }
    }

    // Last draw is needed since the barcode ends with 1
    if (barWidth > 0) {
      this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent)
    }
  }

  drawSVGText(parent, options, encoding): void {
    const textElem = this.document.createElementNS(svgns, 'text')

    // Draw the text if displayValue is set
    if (options.displayValue) {
      let x, y

      textElem.setAttribute('style', `font:${options.fontOptions} ${options.fontSize}px ${options.font}`)

      if (options.textPosition === 'top') {
        y = options.fontSize - options.textMargin
      }
      else {
        y = options.height + options.textMargin + options.fontSize
      }

      // Draw the text in the correct X depending on the textAlign option
      if (options.textAlign === 'left' || encoding.barcodePadding > 0) {
        x = 0
        textElem.setAttribute('text-anchor', 'start')
      }
      else if (options.textAlign === 'right') {
        x = encoding.width - 1
        textElem.setAttribute('text-anchor', 'end')
      }
      // In all other cases, center the text
      else {
        x = encoding.width / 2
        textElem.setAttribute('text-anchor', 'middle')
      }

      textElem.setAttribute('x', x)
      textElem.setAttribute('y', y)

      textElem.appendChild(this.document.createTextNode(encoding.text))

      parent.appendChild(textElem)
    }
  }

  setSvgAttributes(width, height) {
    const svg = this.svg
    svg.setAttribute('width', `${width}px`)
    svg.setAttribute('height', `${height}px`)
    svg.setAttribute('x', '0px')
    svg.setAttribute('y', '0px')
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

    svg.setAttribute('xmlns', svgns)
    svg.setAttribute('version', '1.1')

    svg.setAttribute('style', 'transform: translate(0,0)')
  }

  createGroup(x, y, parent) {
    const group = this.document.createElementNS(svgns, 'g')
    group.setAttribute('transform', `translate(${x}, ${y})`)

    parent.appendChild(group)

    return group
  }

  setGroupOptions(group, options) {
    group.setAttribute('style', `fill:${options.lineColor};`,
    )
  }

  drawRect(x, y, width, height, parent) {
    const rect = this.document.createElementNS(svgns, 'rect')

    rect.setAttribute('x', x)
    rect.setAttribute('y', y)
    rect.setAttribute('width', width)
    rect.setAttribute('height', height)

    parent.appendChild(rect)

    return rect
  }
}

export default SVGRenderer
