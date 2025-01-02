import merge from '../help/merge'

function getEncodingHeight(encoding, options) {
  return options.height
    + ((options.displayValue && encoding.text.length > 0) ? options.fontSize + options.textMargin : 0)
    + options.marginTop
    + options.marginBottom
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
  if (options.displayValue && barcodeWidth < textWidth) {
    if (options.textAlign == 'center') {
      return Math.floor((textWidth - barcodeWidth) / 2)
    }
    else if (options.textAlign == 'left') {
      return 0
    }
    else if (options.textAlign == 'right') {
      return Math.floor(textWidth - barcodeWidth)
    }
  }
  return 0
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
  for (let i = 0; i < encodings.length; i++) {
    const encoding = encodings[i]
    const options = merge(barcodeOptions, encoding.options)

    // Calculate the width of the encoding
    var textWidth
    if (options.displayValue) {
      textWidth = messureText(encoding.text, options, context)
    }
    else {
      textWidth = 0
    }

    const barcodeWidth = encoding.data.length * options.width
    encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth))

    encoding.height = getEncodingHeight(encoding, options)

    encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options)
  }
}

function getTotalWidthOfEncodings(encodings) {
  let totalWidth = 0
  for (let i = 0; i < encodings.length; i++) {
    totalWidth += encodings[i].width
  }
  return totalWidth
}

function getMaximumHeightOfEncodings(encodings) {
  let maxHeight = 0
  for (let i = 0; i < encodings.length; i++) {
    if (encodings[i].height > maxHeight) {
      maxHeight = encodings[i].height
    }
  }
  return maxHeight
}

function messureText(string, options, context) {
  let ctx

  if (context) {
    ctx = context
  }
  else if (typeof document !== 'undefined') {
    ctx = document.createElement('canvas').getContext('2d')
  }
  else {
    // If the text cannot be messured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0
  }
  ctx.font = `${options.fontOptions} ${options.fontSize}px ${options.font}`

  // Calculate the width of the encoding
  const measureTextResult = ctx.measureText(string)
  if (!measureTextResult) {
    // Some implementations don't implement measureText and return undefined.
    // If the text cannot be measured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0
  }
  const size = measureTextResult.width
  return size
}

export { calculateEncodingAttributes, getBarcodePadding, getEncodingHeight, getMaximumHeightOfEncodings, getTotalWidthOfEncodings }
