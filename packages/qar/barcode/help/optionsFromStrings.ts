export default optionsFromStrings

// Convert string to integers/booleans where it should be
function optionsFromStrings(options) {
  const intOptions = [
    'width',
    'height',
    'textMargin',
    'fontSize',
    'margin',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
  ]

  for (let intOption in intOptions) {
    if (intOptions.hasOwnProperty(intOption)) {
      intOption = intOptions[intOption]
      if (typeof options[intOption] === 'string') {
        options[intOption] = Number.parseInt(options[intOption], 10)
      }
    }
  }

  if (typeof options.displayValue === 'string') {
    options.displayValue = (options.displayValue != 'false')
  }

  return options
}
